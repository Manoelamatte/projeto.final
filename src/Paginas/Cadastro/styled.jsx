import styled from "styled-components"

export const CardCadastro = styled.div`
    width: 70vw;
    height: 80vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const CardEsquerda = styled.div`
    width: 35vw;
    height: 80vh;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`

export const CardDireita = styled.div`
   width: 30vw;
    height: 75vh;
    flex-direction: column;
    background-color: #3D0000;
    border-radius: 10%;
`

export const ContainerGeral = styled.div`
    background-color:rgb(17, 10, 10);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const TituloCadastro = styled.h1`
color: #950101;
  padding: 05%;
  padding-left: 25%;
  font-family: Arial, Helvetica, sans-serif;
`

export const Botao = styled.button`
    width: 30%;
    padding: 16px;
    margin: 25px;
    margin-left: 130px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #950101;
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`
