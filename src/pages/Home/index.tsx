import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
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

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    })

    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState<WarningTuple>(["", ""]);
    const [selectedPointIndex, setSelectedPointIndex] = useState(-1);

    const [donationPoints, setDonationPoints] = useState<DonationPoint[]>([]);

    useEffect(() => {
        defineInitialPosition();
        getDonationPoints();
        // eslint-disable-next-line
    }, []);

    const defineInitialPosition = () => {
        let initialPosition: PositionData = {
            lat: -23.4990251,
            lng: -46.7962413
        };

        defineCurrentPosition(initialPosition);
    }

    const getDonationPoints = () => {
        setIsLoading(true);

        listDonationPointHttp({}).then(response => {
            if (response)
                setDonationPoints(response);
        }).catch(() => {
            setWarning(["danger", "Não foi possível buscar os pontos de coleta."]);
        }).finally(() => { setIsLoading(false); });
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
            <AddressSearch />

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
                {isLoaded && <GoogleMap
                    mapContainerStyle={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "0.5rem",
                        border: "solid 1px #999999"
                    }}
                    center={currentPosition}
                    zoom={15}
                    options={{ mapId: "8a357d15ae39d525" }}
                >
                    {donationPoints.map((x, index) => (<CustomMarker
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
                </GoogleMap>}
            </div>
        </HomeEl>
    );
}

export default Home;