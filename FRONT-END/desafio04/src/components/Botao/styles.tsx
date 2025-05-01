import styled from "styled-components";

export const BotaoContainer = styled.div`
    button {
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        width: 100%;
        margin: 10px 0;
        width: 500px;
        background-color: rebeccapurple;
        border: 2px solid rebeccapurple;
        border-radius: 30px;
        align-items: center;
        justify-content: center;
        align-content: center;
        
    }

    button:hover {
        transition: 0.1s;
        color: rebeccapurple;
        background-color: transparent;
        border: 2px solid rebeccapurple;
    }

    button:disabled {
        background-color: gray;
        color: black;
    }
`