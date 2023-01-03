import styled from "styled-components";

export const HomeEl = styled.main`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 30rem 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "men map";

    >aside {
        box-shadow: inset -1px -1px 11px var(--color-gray-200);
        padding: 2rem 2rem 0 2rem;
        overflow: hidden;
        
        grid-area: men;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        >h3 {
            grid-area: subt;
            margin-bottom: 0;
        }

        >div {
            width: calc(100% + 10rem);
            overflow-y: scroll;
            padding-right: 9rem;
            overflow-x: hidden;
            padding-bottom: 3rem;
        }
    }

    >section {
        grid-area: map;
    }
`;