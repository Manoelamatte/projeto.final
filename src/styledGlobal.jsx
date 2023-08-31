import styled, { createGlobalStyle } from "styled-components"
import Fundo from "./assets/Fundo.png"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }

`
export const ContainerGeral = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image:url(${Fundo}); 
`
export const ContainerCenter = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 30px;
`