import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center:
        background-color: #f2f2f2;
    }
`;

export default Global;