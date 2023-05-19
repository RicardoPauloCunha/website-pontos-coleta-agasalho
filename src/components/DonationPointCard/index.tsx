import { DonationPoint } from "../../services/http/donationPoint";
import { donationPointCardIdGenetor } from "../../util/generator";
import { formatAddress } from "../../util/stringFormat";
import { DonationPointCardEl } from "./styles";

type DonationPointCardProps = {
    index: number
    isSelected: boolean;
    cardData: DonationPoint;
    toggleIsSelected: (index: number, mapFocus: boolean) => void;
}

const DonationPointCard = ({ index, isSelected, cardData, toggleIsSelected }: DonationPointCardProps): JSX.Element => {
    return (
        <DonationPointCardEl
            id={donationPointCardIdGenetor(cardData.id)}
            isSelected={isSelected}
            onClick={() => toggleIsSelected(index, true)}
        >
            {cardData.distance !== undefined
                ? <strong>Distância - {cardData.distance.toFixed(2)} KM</strong>
                : <strong>Distância - Calculando...</strong>
            }

            <p>{formatAddress(cardData)}</p>
        </DonationPointCardEl>
    )
}

export default DonationPointCard;