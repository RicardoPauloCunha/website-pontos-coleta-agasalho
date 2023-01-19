import styled, { css } from "styled-components";

type DonationPointCardElProps = {
    isSelected?: boolean;
}

export const DonationPointCardEl = styled.div<DonationPointCardElProps>`
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 0.5rem;
    border: solid 1px var(--color-gray-200);
    background-color: var(--color-gray-100);
    transition: 0.5s;
    cursor: pointer;
    gap: 0.5rem;
    
    display: grid;
    grid-template-columns: 1fr 1.5rem;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
    "nam nam"
    "add add"
    "cep cep";

    ${props => props.isSelected && css`
        background-color: var(--color-white);
        box-shadow: -2px 3px 4px 0px var(--color-gray-200);
        margin-left: 0.5rem;
        border-right: 1rem;
        border-right-color: var(--color-blue-200);
        border-right-style: solid;
    `}

    &:hover {
        box-shadow: -2px 3px 4px 0px var(--color-gray-200);
        margin-left: 0.5rem;
    }

    &:active {
        box-shadow: none;
    }

    >strong {
        grid-area: nam;
    }

    >p {
        grid-area: add;
        margin-bottom: 0;
    }

    >span {
        grid-area: cep;

        >strong {
            font-weight: 600;
        }
    }

    & + & {
        margin-top: 1rem;
    }

    @media(max-width: 768px) {
        min-width: 30rem;

        & + & {
            margin-top: 0;
            margin-left: 1rem;
        }
    }

    @media(max-width: 512px) {
        min-width: 80vw;
    }
`;