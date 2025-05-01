import styled from "styled-components";

export const InputContainer = styled.div`
    input {
        width: 450px;
        height: 2px;
        padding: 20px;
        margin: 10px 0;
        background-color: transparent;
        border: 2px solid rebeccapurple;
        border-radius: 30px;
    }

    p {
        color: red;
    }

    input:hover {
        transition: 0.1s;
        width: 450px;
        height: 2px;
        padding: 20px;
        margin: 10px 0;
        background-color: transparent;
        border: 5px solid rebeccapurple;
        border-radius: 30px;
    }
`