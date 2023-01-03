import { getParams } from "../api";

const ROOT = '/donations-points';

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
    distance: number;
}

type listDonationPointResponse = {
    content: DonationPoint[];
}

type ListDonationPointParams = {
    size: number;
}

export const listDonationPointHttp = async (params: ListDonationPointParams): Promise<listDonationPointResponse> => {
    let { data } = await getParams<ListDonationPointParams, listDonationPointResponse>(ROOT, params);
    return data;
}