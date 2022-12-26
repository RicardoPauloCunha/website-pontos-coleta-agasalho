import { useState } from 'react';
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useDonationPoint } from "../../contexts/donationPoint";

const AddressSearch = () => {
    const {
        defineCurrentPosition
    } = useDonationPoint();

    const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();

    const onLoad = (ref: google.maps.places.SearchBox) => {
        setSearchBox(ref);
    };

    const handlerSelect = () => {
        let places = searchBox?.getPlaces();

        defineCurrentPosition({
            lat: places![0].geometry?.location?.lat() || 0,
            lng: places![0].geometry?.location?.lng() || 0
        });
    }

    return (
        <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={handlerSelect}
        >
            <input
                className='address-search-input'
                placeholder='Rua das flores Nº 32, 00000-000...'
            />
        </StandaloneSearchBox>
    );
}

export default AddressSearch;