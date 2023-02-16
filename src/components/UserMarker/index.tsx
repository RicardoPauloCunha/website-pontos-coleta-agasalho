import { Marker } from '@react-google-maps/api';
import userIcon from "../../assets/icons/user.svg";
import { PositionData } from '../../contexts/donationPoint';

export type UserMarkerProps = {
    position: PositionData;
}

const UserMarker = ({ position }: UserMarkerProps) => {
    return (
        <Marker key="collect"
            icon={{
                url: userIcon,
                anchor: new google.maps.Point(22, 22),
                scaledSize: new google.maps.Size(40, 40)
            }}
            position={position}
        />
    )
}

export default UserMarker;