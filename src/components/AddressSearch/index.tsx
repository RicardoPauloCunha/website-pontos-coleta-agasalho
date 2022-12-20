import AsyncSelect from "react-select/async";
import { useDonationPoint } from "../../contexts/donationPoint";
import { getAddressHttp } from "../../services/http/mapbox";
import { AddressSearchEl } from "./styles";

const AddressSearch = () => {
    const {
        defineCurrentPosition
    } = useDonationPoint();

    const getOptions = async (local: any, callback: any) => {
        if (local.length < 5)
            return;

        let places: any = [];

        getAddressHttp(local).then(response => {
            places = response.features.map((x: any) => ({
                label: x.place_name,
                value: x.place_name,
                coords: x.center,
                place: x.place_name,
            }));
        });

        callback(places);

        return places;
    };

    const handleSelect = (event: any) => {
        defineCurrentPosition([event.coords[0], event.coords[1]]);
    };

    return (
        <AddressSearchEl>
            <label htmlFor="addressSearch">Pesquisar endereço</label>

            <AsyncSelect
                placeholder="Rua das flores Nº 32, 00000-000..."
                classNamePrefix="filter"
                cacheOptions
                loadOptions={getOptions}
                onChange={handleSelect}
            />
        </AddressSearchEl>
    );
}

export default AddressSearch;