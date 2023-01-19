import { DonationPoint } from "../services/http/donationPoint";

export const format = (value: string | number, pattern: string) => {
    let i = 0;
    let v = value.toString();
    return pattern.replace(/#/g, _ => v[i++]);
}

export const formatCep = (value: string) => {
    value = value.padEnd(8, "0");

    return format(value, "#####-###");
}

export const formatState = (value: string) => {
    let acronym = "";

    value = value.toUpperCase();

    switch (value) {
        case "ACRE":
            acronym = "AC"; break;
        case "ALAGOAS":
            acronym = "AL"; break;
        case "AMAPÁ":
            acronym = "AP"; break;
        case "AMAZONAS":
            acronym = "AM"; break;
        case "BAHIA":
            acronym = "BA"; break;
        case "CEARÁ":
            acronym = "CE"; break;
        case "ESPÍRITO SANTO":
            acronym = "ES"; break;
        case "GOIÁS":
            acronym = "GO"; break;
        case "MARANHÃO":
            acronym = "MA"; break;
        case "MATO GROSSO":
            acronym = "MT"; break;
        case "MATO GROSSO DO SUL":
            acronym = "MS"; break;
        case "MINAS GERAIS":
            acronym = "MG"; break;
        case "PARÁ":
            acronym = "PA"; break;
        case "PARAÍBA":
            acronym = "PB"; break;
        case "PARANÁ":
            acronym = "PR"; break;
        case "PERNAMBUCO":
            acronym = "PE"; break;
        case "PIAUÍ":
            acronym = "PI"; break;
        case "RIO DE JANEIRO":
            acronym = "RJ"; break;
        case "RIO GRANDE DO NORTE":
            acronym = "RN"; break;
        case "RIO GRANDE DO SUL":
            acronym = "RS"; break;
        case "RONDÔNIA":
            acronym = "RO"; break;
        case "RORAIMA":
            acronym = "RR"; break;
        case "SANTA CATARINA":
            acronym = "SC"; break;
        case "SÃO PAULO":
            acronym = "SP"; break;
        case "SERGIPE":
            acronym = "SE"; break;
        case "TOCANTINS":
            acronym = "TO"; break;
        case "DISTRITO FEDERAL":
            acronym = "DF"; break;
    }

    return acronym;
}

export const formatAddress = (value: DonationPoint) => {
    return `${value.street}, ${value.number}, ${value.district} - ${value.city}/${value.state.toUpperCase()}, ${formatCep(value.cep)}`;
}

export const hasValueString = (value?: string | null) => {
    if (value === "" || value === undefined || value === null)
        return false;
    else
        return true;
}