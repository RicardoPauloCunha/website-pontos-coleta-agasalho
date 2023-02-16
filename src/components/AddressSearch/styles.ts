import styled from "styled-components";

export const AddressSearchEl = styled.div`
    top: 2rem;
    left: 2rem;
    width: 30rem;
    height: 4.25rem;
    border: 1px solid var(--color-gray-200);
    padding: 0.5rem 1rem;
    display: flex;
    position: relative;
    font-size: 1rem;
    border-radius: 0.5rem;
    flex-direction: column;
    background-color: var(--color-white);

    label {
        font-weight: 500;
    }

    input {
        width: 100%;
        border: none;
        outline: none;
        position: relative;
        text-overflow: ellipsis;
    }

    @media(max-width: 768px) {
        width: calc(100% - 4rem);
    }

    @media(max-width: 768px) {
        top: 1rem;
        left: 1rem;
        width: calc(100% - 2rem);
    }
`