import { getParams } from '../api';

const ROOT = '/';

export type DonationPoint = {
    id: number;
    name: string;
    cep: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    lng: number;
    lat: number;
    creationDate: string;
}

type ListDonationPointParams = {

}

export const listDonationPointHttp = async (params: ListDonationPointParams): Promise<DonationPoint[]> => {
    let { data } = await getParams<ListDonationPointParams, DonationPoint[]>(ROOT, params);
    return data;
}