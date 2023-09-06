import styled from "styled-components"


export const CardDireita2 = styled.div`
    width: 30vw;
    height: 75vh;
    flex-direction: column;
    background-color:rgba(106, 14, 14, 1);
    border-radius: 10%;
`

export const CardEsquerda2 = styled.div`
    width: 35vw;
    height: 80vh;
    display:flex;
    flex-direction: column;
   
    
    /* border-top-left-radius: 20px; */
    /* border-bottom-left-radius: 20px; */
    background-color: #ffffff;
`
// esquerda
export const Tituloo = styled.h1`
    color: #950101;
    padding-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 50px;
`
export const Titulo2 = styled.h2`
    color: #950101;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 50px;

`

export const TextField = styled.div`
    /* width: 100%; */
    /* height: 50px; */
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* margin: 10px; */
    background-color: yellow;
    
`

export const InputStyle = styled.input`
    /* width: 70%; */
    border: none;
    border-radius: 10px;
    /* padding: 15px; */
    font-size: 12pt;
    /* outline: none; */
    box-sizing: border-box;
    background-color: red;
    
`

export const Botao = styled.button`
    width: 35%;
    padding: 16px 0px;
    margin: 40px 120px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: rgba(212, 0, 0, 1);
    cursor: pointer;
    color: white;
    box-shadow: 0px n10px n40px -12px $3D0000;
`
// fim

// direita

export const TextoDireita = styled.h2`
    color: white;
    padding-top: 30px;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 50px;
`

export const BotaoDireita = styled.button`
    width: 40%;
    padding: 16px 0px;
    margin: 20px 115px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: rgba(212, 0, 0, 1);
    cursor: pointer;
    color: white;
    box-shadow: 0px n10px n40px -12px $3D0000;
`

export const ImagemDireita = styled.img`
    padding-left: 60px;
    height: 40vh;
    weight: 40vw;
`
