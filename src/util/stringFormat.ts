import { DonationPoint } from "../services/http/donationPoint";

export const format = (value: string | number, pattern: string) => {
    let i = 0;
    let v = value.toString();
    return pattern.replace(/#/g, _ => v[i++]);
}

export const formatCep = (value: string) => {
    return format(value, "#####-###");
}

export const formatAddress = (value: DonationPoint) => {
    return `${value.street}, ${value.number}, ${value.district} - ${value.city}/${value.state.toUpperCase()}`;
}

export const hasValueString = (value?: string | null) => {
    if (value === "" || value === undefined || value === null)
        return false;
    else
        return true;
}