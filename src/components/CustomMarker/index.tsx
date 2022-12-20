import { Marker } from '@react-google-maps/api';
import pointDefaultIcon from "../../assents/icons/point_default.svg";
import pointSelectedIcon from "../../assents/icons/point_selected.svg";

export type CustomMarkerProps = {
    selected: boolean;
    position: {
        lat: number;
        lng: number;
    };
    onClick: () => void;
}

const CustomMarker = ({ selected, position, onClick }: CustomMarkerProps) => {
    return (
        <Marker key="custom_marker"
            icon={selected
                ? {
                    url: pointSelectedIcon,
                    anchor: new google.maps.Point(17, 17),
                    scaledSize: new google.maps.Size(25, 25)
                }
                : {
                    url: pointDefaultIcon,
                    anchor: new google.maps.Point(15, 15),
                    scaledSize: new google.maps.Size(20, 20)
                }
            }
            position={position}
            onClick={onClick}
        />
    )
}

export default CustomMarker;