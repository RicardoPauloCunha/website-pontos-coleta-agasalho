import styled, { css } from "styled-components";

type DonationPointCardElProps = {
    alterLayout?: boolean;
}

export const DonationPointCardEl = styled.div<DonationPointCardElProps>`
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 0.5rem;
    border: solid 1px var(--color-gray-200);
    gap: 0.5rem;
    
    background-color: var(--color-gray-100);
    display: grid;
    grid-template-columns: 1fr 1.5rem;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
    "nam nam"
    "add add"
    "cep cep";

    ${props => props.alterLayout && css`
        max-width: 40rem;
        background-color: var(--color-white);
        
        position: relative;
        top: 1rem;
        left: 1rem;

        grid-template-areas:
        "nam ico"
        "add add"
        "cep cep";
    `}

    >strong {
        font-weight: 500;
        grid-area: nam;
    }

    >svg {
        grid-area: ico;
        color: var(--color-red);
        font-size: 1.5rem;
        cursor: pointer;
        transition-duration: 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }

    >p {
        grid-area: add;
        margin-bottom: 0;
    }

    >span {
        grid-area: cep;
    }

    & + & {
        margin-top: 1rem;
    }
`;