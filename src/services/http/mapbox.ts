import { get } from '../api';

const ROOT = 'https://api.mapbox.com';

type GetAddressParams = {
    local: string;
}

export const getAddressHttp = async (params: GetAddressParams): Promise<any> => {
    let { data } = await get<any>(ROOT + `/geocoding/v5/mapbox.places/${params.local}.json?access_token=${process.env.REACT_APP_API_URL}`);
    return data;
}