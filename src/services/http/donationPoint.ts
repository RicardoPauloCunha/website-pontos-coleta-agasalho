
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
    // let { data } = await getParams<ListDonationPointParams, DonationPoint[]>(ROOT, params);

    let data: DonationPoint[] = [{
        id: 1,
        name: "Endereço 1",
        cep: "60730430",
        street: "Vila Santa Romana",
        number: "575",
        district: "Manuel Sátiro",
        city: "Fortaleza",
        state: "CE",
        lat: -23.498855,
        lng: -46.793912,
        creationDate: "",
    },
    {
        id: 2,
        name: "Endereço 2",
        cep: "68905450",
        street: "Passagem Nazaré",
        number: "159",
        district: "Cidade Nova",
        city: "Macapá",
        state: "AP",
        lat: -23.498825,
        lng: -46.792789,
        creationDate: "",
    },
    {
        id: 3,
        name: "Endereço 3",
        cep: "49066243",
        street: "Travessa Santo Antônio",
        number: "807",
        district: "Industrial",
        city: "Aracaju",
        state: "SE",
        lat: -23.499037,
        lng: -46.794908,
        creationDate: "",
    },
    {
        id: 4,
        name: "Endereço 4",
        cep: "12234786",
        street: "Avenida Dois",
        number: "403",
        district: "Jardim dos Bandeirantes",
        city: "São José dos Campos",
        state: "SP",
        lat: -23.497097,
        lng: -46.793391,
        creationDate: "",
    },
    {
        id: 5,
        name: "Endereço 5",
        cep: "29141866",
        street: "Rua 2 de Dezembro",
        number: "139",
        district: "Padre Gabriel",
        city: "Cariacica",
        state: "ES",
        lat: -23.501313,
        lng: -46.793388,
        creationDate: "",
    },
    {
        id: 6,
        name: "Endereço 6",
        cep: "65607726",
        street: "Rua do Piquizeiro",
        number: "931",
        district: "Luiza Queiroz",
        city: "Caxias",
        state: "MA",
        lat: -23.495951,
        lng: -46.795470,
        creationDate: "",
    }];

    return data;
}