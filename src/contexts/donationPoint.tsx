import { createContext, ReactNode, useContext, useState } from 'react';

export type PositionTuple = [number, number];

type DonationPointContextData = {
    currentPosition: PositionTuple;
    defineCurrentPosition: (value: PositionTuple) => void;
}

const DonationPointContext = createContext({} as DonationPointContextData);

export const DonationPointContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentPosition, setCurrentPosition] = useState<PositionTuple>([0, 0]);

    const defineCurrentPosition = (value: PositionTuple) => {
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