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
        gap: 1rem;
        overflow: hidden;
        grid-area: men;
        padding: 2rem 2rem 0 2rem;
        box-shadow: inset -1px -1px 11px var(--color-gray-200);
        
        display: flex;
        flex-direction: column;

        >div {
            width: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            padding-right: 1.5rem;
            padding-bottom: 3rem;

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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;

        >aside {
            padding: 2rem 1rem;
            box-shadow: none;

            >p {
                margin-bottom: 1rem;
            }

            >div {
                overflow-y: hidden;
                overflow-x: scroll;
                padding-bottom: 1rem;

                flex-direction: row;
            }
        }

        >section {
            height: 70vh;
            min-height: 30rem;
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