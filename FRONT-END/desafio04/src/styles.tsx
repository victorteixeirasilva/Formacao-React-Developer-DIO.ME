import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rebeccapurple; /* Estilo global */
    font-family: 'Arial', sans-serif; /* Defina uma fonte global */
  }

  * {
    margin: 0;
    padding: 0;
  }

`