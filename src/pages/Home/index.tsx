import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useRef, useState } from 'react';
import AddressSearch from '../../components/AddressSearch';
import CollectMarker from "../../components/CollectMarker";
import DonationPointCard from '../../components/DonationPointCard';
import Loading from '../../components/Loading';
import UserMarker from "../../components/UserMarker";
import Warning, { WarningTuple } from '../../components/Warning';
import { PositionData, useDonationPoint } from '../../contexts/donationPoint';
import { DonationPoint, listDonationPointHttp } from '../../services/http/donationPoint';
import { haversineFormula } from "../../util/formula";
import { donationPointCardIdGenetor } from "../../util/generator";
import { formatState } from "../../util/stringFormat";
import { HomeEl } from './styles';

const Home = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const {
        currentPosition,
        defineCurrentPosition,
    } = useDonationPoint();

    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState<WarningTuple>(["", ""]);
    const [selectedPointIndex, setSelectedPointIndex] = useState(-1);

    const [map, setMap] = useState<google.maps.Map>();
    const [donationPoints, setDonationPoints] = useState<DonationPoint[]>([]);

    useEffect(() => {
        setIsLoading(true);

        getDefaultPosition();

        navigator.geolocation.getCurrentPosition(getCurrentPosition);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (currentPosition.lat && currentPosition.lng && donationPoints.length !== 0) {
            handlerFocusPoint(currentPosition);

            let list = sortDonationsPoints(currentPosition, donationPoints);
            setDonationPoints([...list]);
        }
        // eslint-disable-next-line
    }, [currentPosition.lat, currentPosition.lng]);

    const getDonationPoints = (position: PositionData) => {
        setIsLoading(true);

        listDonationPointHttp({
            size: 100
        }).then(response => {
            if (response) {
                let list = response.content;

                list.forEach(x => {
                    x.state = formatState(x.state);
                });

                list = sortDonationsPoints(position, list);

                setDonationPoints(response.content);
            }
        }).catch(() => {
            setWarning(["danger", "Não foi possível buscar os pontos de coleta."]);
        }).finally(() => { setIsLoading(false); });
    }

    const getDefaultPosition = () => {
        let initialPosition: PositionData = {
            lat: -23.550599,
            lng: -46.632938
        };

        defineCurrentPosition(initialPosition);
        getDonationPoints(initialPosition);
    }

    const getCurrentPosition = (geolocationPosition: GeolocationPosition) => {
        let position: PositionData = {
            lat: geolocationPosition.coords.latitude,
            lng: geolocationPosition.coords.longitude
        };

        defineCurrentPosition(position);
    }

    const sortDonationsPoints = (position: PositionData, list: DonationPoint[]) => {
        list.forEach(x => {
            let pointPosition = {
                lat: x.lat,
                lng: x.lng
            };

            x.distance = haversineFormula(position, pointPosition);
        });

        list.sort((a, b) => a.distance - b.distance);

        return list
    }

    const toggleSelectedPoint = (index: number, mapFocus: boolean) => {
        if (index === selectedPointIndex) {
            setSelectedPointIndex(-1);
        }
        else {
            setSelectedPointIndex(index);

            if (mapFocus) {
                handlerFocusPoint({
                    lat: donationPoints[index].lat,
                    lng: donationPoints[index].lng
                });
            }
            else {
                const card = document.getElementById(donationPointCardIdGenetor(donationPoints[index].id));

                card?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    }

    const handlerMapLoad = (map: google.maps.Map) => {
        setMap(map);
    }

    const handlerFocusPoint = (position: PositionData) => {
        if (map)
            map.panTo(position);
    }

    const handlerResetSelections = () => {
        toggleSelectedPoint(selectedPointIndex, false);
        divRef.current?.scrollTo(0, 0);
    }

    return (
        <HomeEl>
            <aside>
                <h3>Pontos de coleta</h3>
                <p>Encontre os pontos de coleta mais próximos de você para realizar a doação de agasalhos.</p>

                <div ref={divRef}>
                    {donationPoints.map((x, index) => (
                        <DonationPointCard
                            key={x.id}
                            index={index}
                            isSelected={selectedPointIndex === index}
                            cardData={x}
                            toggleIsSelected={toggleSelectedPoint}
                        />
                    ))}

                    {isLoading && <Loading />}

                    <Warning value={warning} />
                </div>
            </aside>

            <section>
                <LoadScript
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
                    libraries={["places"]}
                >
                    <GoogleMap
                        onLoad={handlerMapLoad}
                        mapContainerStyle={{
                            width: "100%",
                            height: "100%",
                        }}
                        options={{
                            mapId: "138683949dfbf8c2",
                            disableDefaultUI: true
                        }}
                        center={currentPosition}
                        zoom={14}
                    >
                        <AddressSearch
                            resetSelections={handlerResetSelections}
                        />

                        {donationPoints.map((x, index) => (<CollectMarker
                            key={x.id}
                            position={{
                                lat: x.lat,
                                lng: x.lng
                            }}
                            selected={index === selectedPointIndex}
                            onClick={() => toggleSelectedPoint(index, false)}
                        />))}

                        {(currentPosition.lat || currentPosition.lng) && <UserMarker
                            position={{
                                lat: currentPosition.lat,
                                lng: currentPosition.lng
                            }}
                        />}
                    </GoogleMap>
                </LoadScript>
            </section>
        </HomeEl>
    );
}

export default Home;