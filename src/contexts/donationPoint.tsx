import { createContext, ReactNode, useContext, useState } from 'react';

export type PositionData = {
    lat: number;
    lng: number;
};

type DonationPointContextData = {
    currentPosition: PositionData;
    defineCurrentPosition: (value: PositionData) => void;
}

const DonationPointContext = createContext({} as DonationPointContextData);

export const DonationPointContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentPosition, setCurrentPosition] = useState<PositionData>({ lat: 0, lng: 0 });

    const defineCurrentPosition = (value: PositionData) => {
        setCurrentPosition(value);
    }

    let valueContext = {
        currentPosition,
        defineCurrentPosition
    }

    return (
        <DonationPointContext.Provider value={valueContext}>
            {children}
        </DonationPointContext.Provider>
    );
}

export const useDonationPoint = () => {
    return useContext(DonationPointContext);
}