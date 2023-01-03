import { PositionData } from "../contexts/donationPoint";

export const haversineFormula = (position1: PositionData, position2: PositionData) => {
    let radlat1 = Math.PI * position1.lat / 180;
    let radlat2 = Math.PI * position2.lat / 180;

    let theta = position1.lng - position2.lng
    let radtheta = Math.PI * theta / 180

    let dist = Math.sin(radlat1) *
        Math.sin(radlat2) +
        Math.cos(radlat1) *
        Math.cos(radlat2) *
        Math.cos(radtheta);

    dist = Math.acos(dist);

    dist *= 180 / Math.PI;
    dist *= 60 * 1.1515;
    dist *= 1.609344;

    return dist;
}