import { Marker } from '@react-google-maps/api';
import pointDefaultIcon from "../../assets/icons/point_default.svg";
import pointSelectedIcon from "../../assets/icons/point_selected.svg";
import { PositionData } from '../../contexts/donationPoint';

export type CollectMarkerProps = {
    selected: boolean;
    position: PositionData;
    onClick: () => void;
}

const CollectMarker = ({ selected, position, onClick }: CollectMarkerProps) => {
    return (
        <Marker key="collect"
            icon={selected
                ? {
                    url: pointSelectedIcon,
                    anchor: new google.maps.Point(22, 22),
                    scaledSize: new google.maps.Size(45, 45)
                }
                : {
                    url: pointDefaultIcon,
                    anchor: new google.maps.Point(15, 15),
                    scaledSize: new google.maps.Size(30, 30)
                }
            }
            position={position}
            onClick={onClick}
        />
    )
}

export default CollectMarker;