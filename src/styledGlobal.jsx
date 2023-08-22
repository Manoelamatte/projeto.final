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
    justify-content: center;
    align-items: center;
    background-image:url(${Fundo}); 
`
