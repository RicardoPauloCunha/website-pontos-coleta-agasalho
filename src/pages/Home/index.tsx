import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import AddressSearch from '../../components/AddressSearch';
import DonationPointCard from '../../components/DonationPointCard';
import Loading from '../../components/Loading';
import Warning, { WarningTuple } from '../../components/Warning';
import { PositionTuple, useDonationPoint } from '../../contexts/donationPoint';
import { DonationPoint, listDonationPointHttp } from '../../services/http/donationPoint';
import { HomeEl } from './styles';

const Home = () => {
    const {
        currentPosition,
        defineCurrentPosition,
    } = useDonationPoint();

    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState<WarningTuple>(["", ""]);

    const [donationPoints, setDonationPoints] = useState<DonationPoint[]>([]);

    useEffect(() => {
        defineInitialPosition();
        getDonationPoints();
        // eslint-disable-next-line
    }, []);

    const defineInitialPosition = () => {
        let initialPosition: PositionTuple = [-23.4990251, -46.7962413];

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

    return (
        <HomeEl>
            <AddressSearch />

            <div>
                <h3>Pontos de coleta</h3>

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
            </div>
        </HomeEl>
    );
}

export default Home;