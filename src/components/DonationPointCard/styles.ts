import styled, { css } from "styled-components";

type DonationPointCardElProps = {
    isSelected?: boolean;
}

export const DonationPointCardEl = styled.div<DonationPointCardElProps>`
    gap: 0.5rem;
    width: 100%;
    height: auto;
    cursor: pointer;
    padding: 1rem;
    transition: 0.5s;
    border-radius: 0.5rem;
    border: solid 1px var(--color-gray-200);
    background-color: var(--color-gray-100);
    
    display: grid;
    grid-template-columns: 1fr 1.5rem;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
    "nam nam"
    "add add"
    "cep cep";

    ${props => props.isSelected && css`
        margin-left: 0.5rem;
        border-right: 1rem;
        background-color: var(--color-white);
        border-right-style: solid;
        border-right-color: var(--color-blue-200);
        box-shadow: -2px 3px 4px 0px var(--color-gray-200);
    `}

    &:hover {
        margin-left: 0.5rem;
        box-shadow: -2px 3px 4px 0px var(--color-gray-200);
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
        height: fit-content;

        & + & {
            margin-top: 0;
            margin-left: 1rem;
        }
    }

    @media(max-width: 512px) {
        min-width: 80vw;
    }
`;