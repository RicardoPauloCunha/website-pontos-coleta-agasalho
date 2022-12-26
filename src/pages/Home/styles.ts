import styled from "styled-components";

export const HomeEl = styled.main`
    width: 100vw;
    height: 100vh;
    padding: 5%;
    row-gap: 1rem;
    column-gap: 3rem;

    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-template-rows: 2.5rem auto;
    grid-template-areas:
    "subt map"
    "list map";

    >h3 {
        grid-area: subt;
        margin-bottom: 0;
    }
    
    >form {
        grid-area: form;
        min-width: 20rem;
    }

    >div {
        &:first-of-type {
            width: calc(100% + 1.5rem);
            grid-area: list;
            overflow-y: scroll;
            padding-right: 0.5rem;
        }

        &:last-of-type {
            grid-area: map;
            border-radius: 0.5rem;
        }
    }
`;