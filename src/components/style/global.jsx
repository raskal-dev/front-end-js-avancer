import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        margin: 25px;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center:
        background-color: #f2f2f2;
    }
`;

export default Global;