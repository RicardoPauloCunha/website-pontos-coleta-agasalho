import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-red: #EF5350;
        
        --color-gray-100: #F2F2F2;
        --color-gray-200: #999999;
        --color-gray-300: #404040;
    }

    h1, h2, h3, h4, h5, h6, p, strong, span {
        color: var(--color-gray-300);
    }

    .address-search-input {
        border: 1px solid var(--color-gray-200);
        width: 30rem;
        height: 3rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        outline: none;
        text-overflow: ellipsis;
        position: relative;
        top: 1rem;
        left: 1rem;
    }
`;