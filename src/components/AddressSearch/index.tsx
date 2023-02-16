import { useState } from 'react';
import { StandaloneSearchBox } from "@react-google-maps/api";
import { PositionData, useDonationPoint } from "../../contexts/donationPoint";
import { AddressSearchEl } from './styles';

type AddressSearchProps = {
    resetSelections: () => void;
}

const AddressSearch = ({ resetSelections }: AddressSearchProps) => {
    const {
        defineCurrentPosition
    } = useDonationPoint();

    const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();

    const onLoad = (ref: google.maps.places.SearchBox) => {
        setSearchBox(ref);
    };

    const handlerSelect = () => {
        let places = searchBox?.getPlaces();

        let position: PositionData = {
            lat: places![0].geometry?.location?.lat() || 0,
            lng: places![0].geometry?.location?.lng() || 0
        }

        defineCurrentPosition(position);
        resetSelections();
    }

    return (
        <AddressSearchEl>
            <label>Pesquisar endereço</label>

            <StandaloneSearchBox
                onLoad={onLoad}
                onPlacesChanged={handlerSelect}
            >
                <input
                    className='address-search-input'
                    placeholder='Clique aqui para digitar o endereço'
                />
            </StandaloneSearchBox>
        </AddressSearchEl>
    );
}

export default AddressSearch;