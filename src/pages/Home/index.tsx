import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from 'react';
import AddressSearch from '../../components/AddressSearch';
import CustomMarker from "../../components/CustomMarker";
import DonationPointCard from '../../components/DonationPointCard';
import Loading from '../../components/Loading';
import Warning, { WarningTuple } from '../../components/Warning';
import { PositionData, useDonationPoint } from '../../contexts/donationPoint';
import { DonationPoint, listDonationPointHttp } from '../../services/http/donationPoint';
import { HomeEl } from './styles';

const Home = () => {
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
        navigator.geolocation.getCurrentPosition(getCurrentPosition);

        defineDefaultPosition();
        getDonationPoints();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (map && currentPosition.lat && currentPosition.lng)
            map.panTo(currentPosition);
        // eslint-disable-next-line
    }, [currentPosition]);

    const onMapLoad = (map: google.maps.Map) => {
        setMap(map);
    }

    const getDonationPoints = () => {
        setIsLoading(true);

        listDonationPointHttp({
            size: 100
        }).then(response => {
            if (response)
                setDonationPoints(response.content);
        }).catch(() => {
            setWarning(["danger", "Não foi possível buscar os pontos de coleta."]);
        }).finally(() => { setIsLoading(false); });
    }

    const getCurrentPosition = (geolocationPosition: GeolocationPosition) => {
        let position: PositionData = {
            lat: geolocationPosition.coords.latitude,
            lng: geolocationPosition.coords.longitude
        };

        defineCurrentPosition(position);
    }

    const defineDefaultPosition = () => {
        let initialPosition: PositionData = {
            lat: -23.556296,
            lng: -46.637773
        };

        defineCurrentPosition(initialPosition);
    }

    const handlerClickPoint = (index: number) => {
        setSelectedPointIndex(index);
        console.log(index)
    }

    const handlerClosePoint = () => {
        setSelectedPointIndex(-1);
    }

    return (
        <HomeEl>
            <h3>Pontos de coleta</h3>

            <div>
                {donationPoints.map(x => (
                    <DonationPointCard
                        key={x.id}
                        cardData={x}
                    />
                ))}

                {isLoading && <Loading />}

                <Warning value={warning} />

                {donationPoints.length === 0
                    && !isLoading
                    && !warning[0]
                    && <Warning value={["warning", "Nenhum ponto de coleta foi encontrado."]} />}
            </div>

            <div>
                <LoadScript
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
                    libraries={["places"]}
                >
                    <GoogleMap
                        onLoad={onMapLoad}
                        mapContainerStyle={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "0.5rem",
                            border: "solid 1px #999999"
                        }}
                        options={{
                            mapId: "138683949dfbf8c2",
                            disableDefaultUI: true
                        }}
                        center={currentPosition}
                        zoom={13}
                    >
                        <AddressSearch />

                        {donationPoints.map((x, index) => (<CustomMarker
                            key={index}
                            position={{
                                lat: x.lat,
                                lng: x.lng
                            }}
                            selected={index === selectedPointIndex}
                            onClick={() => handlerClickPoint(index)}
                        />))}

                        {donationPoints[selectedPointIndex] && <DonationPointCard
                            cardData={donationPoints[selectedPointIndex]}
                            alterLayout={true}
                            onClose={handlerClosePoint}
                        />}
                    </GoogleMap>
                </LoadScript>
            </div>
        </HomeEl>
    );
}

export default Home;