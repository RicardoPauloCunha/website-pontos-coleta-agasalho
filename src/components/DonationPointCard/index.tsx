import { FaTimesCircle } from "react-icons/fa";
import { DonationPoint } from "../../services/http/donationPoint";
import { formatAddress, formatCep } from "../../util/stringFormat";
import { DonationPointCardEl } from "./styles";

type DonationPointCardProps = {
    alterLayout?: boolean;
    cardData: DonationPoint;
    onClose?: () => void;
}

const DonationPointCard = ({ alterLayout, cardData, onClose }: DonationPointCardProps): JSX.Element => {
    return (
        <DonationPointCardEl
            alterLayout={alterLayout}
        >
            <strong>{cardData.name}</strong>

            {onClose && <FaTimesCircle
                onClick={onClose}
            />}

            <p>{formatAddress(cardData)}</p>

            <span>{formatCep(cardData.cep)}</span>
        </DonationPointCardEl>
    )
}

export default DonationPointCard;