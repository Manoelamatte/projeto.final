import styled from "styled-components"

export const CardCadastro = styled.div`
    width: 70vw;
    height: 80vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 30px;
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
    background-color:rgba(106, 14, 14, 1);
    border-radius: 10%;
`

export const TextField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    row-gap: 20px;
    padding-left: 20px;
    `
    
export const Input = styled.input`
    width: 70%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: rgb(233, 225, 226);
    font-size: 12pt;
    outline: none;
    box-sizing: border-box;
`


export const TituloCadastro = styled.h1`
  color: #950101;
  padding: 05%;
  padding-left: 33%;
  font-family: Arial, Helvetica, sans-serif;
`

export const EscritaDireita = styled.h2`
    padding: 30px;
    padding-left: 50px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`

export const ImgCadastro = styled.img`
    padding-left: 80px;
    padding-top: 35px;
    height: 30vh;
    weight: 30vw;
`