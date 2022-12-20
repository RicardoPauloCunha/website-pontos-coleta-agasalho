import { DonationPoint } from "../../services/http/donationPoint";
import { formatAddress, formatCep } from "../../util/stringFormat";
import { DonationPointCardEl } from "./styles";

type DonationPointCardProps = {
    cardData: DonationPoint;
}

const DonationPointCard = ({ cardData }: DonationPointCardProps): JSX.Element => {
    return (
        <DonationPointCardEl>
            <strong>{cardData.name}</strong>

            <p>{formatAddress(cardData)}</p>

            <span>{formatCep(cardData.cep)}</span>
        </DonationPointCardEl>
    )
}

export default DonationPointCard;