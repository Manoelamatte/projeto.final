import styled from "styled-components"


export const CardDireita2 = styled.div`
    width: 30vw;
    height: 75vh;
    flex-direction: column;
    background-color: #3D0000;
    border-radius: 10%;
`

export const CardEsquerda2 = styled.div`
    width: 35vw;
    height: 80vh;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`


// esquerda
export const Tituloo = styled.h1`
    color: #950101;
    padding-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 50px;
`
export const Titulo2 = styled.h3`
    color: #950101;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 50px;

`

export const TextField = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 55;
    padding-top: 10px;
    `

export const Input = styled.input`
    width: 70%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: rgb(233, 225, 226);
    font-size: 12pt;
    outline: none;
    box-sizing: border-box
`
export const Label = styled.label`
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
`
// fim da esquerda

// direita

export const Botao = styled.button`
    width: 35%;
    padding: 16px 0px;
    margin: 40px 120px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #950101;
    cursor: pointer;
    color: white;
    box-shadow: 0px n10px n40px -12px $3D0000;
    `