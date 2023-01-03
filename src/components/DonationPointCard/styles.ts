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
    gap: 0.5rem;
    cursor: pointer;
    transition: 0.5s;
    
    background-color: var(--color-gray-100);
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
            font-weight: 500;
        }
    }

    & + & {
        margin-top: 1rem;
    }
`;