import styled from "styled-components";

export const HomeEl = styled.main`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: auto;
    grid-template-areas:
    "men map";

    >aside {
        grid-area: men;
        box-shadow: inset -1px -1px 11px var(--color-gray-200);
        padding: 2rem 2rem 0 2rem;
        overflow: hidden;
        gap: 1rem;
        
        display: flex;
        flex-direction: column;

        >div {
            width: 100%;
            padding-right: 1.5rem;
            padding-bottom: 3rem;
            overflow-y: scroll;
            overflow-x: hidden;

            display: flex;
            flex-direction: column;

            ::-webkit-scrollbar {
                width: 10px;
            }

            ::-webkit-scrollbar-track {
                background: var(--color-white);
            }

            ::-webkit-scrollbar-thumb {
                background: var(--color-gray-200);
                border-radius: 0.5rem;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: var(--color-gray-300);
            }
        }
    }

    >section {
        grid-area: map;
    }

    @media(max-width: 768px) {
        grid-template-columns: auto;
        grid-template-rows: 1fr 20rem;
        grid-template-areas:
        "map"
        "men";

        >aside {
            gap: 0;

            >p {
                margin-bottom: 1rem;
            }

            >div {
                padding-bottom: 1rem;
                overflow-y: hidden;
                overflow-x: scroll;

                flex-direction: row;
            }
        }
    }

    @media(max-width: 768px) {
        grid-template-rows: 1fr 20rem;
    }

    @media(max-width: 512px) {
        grid-template-rows: 1fr auto;

        >aside {
            padding-bottom: 2rem;
        }
    }
`;