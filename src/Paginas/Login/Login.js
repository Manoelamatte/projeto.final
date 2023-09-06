import {ContainerGeral, ContainerCenter } from "../../styledGlobal"
import { CardCadastro } from "../Cadastro/styled"
import { CardDireita2, CardEsquerda2, Tituloo, Titulo2, TextField, Input, Botao, TextoDireita, BotaoDireita, ImagemDireita, InputStyle} from "./styled"
import imagemLogin from "../../assets/imagemLogin.png"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import React from "react"

function Login(){

    const navigate = useNavigate()
    const goToPrincipal = ()=>{
        navigate('/principal')
    }

    const goToCadastro = ()=>{
        navigate('/cadastro')
    }

    return(
        <>
            <ContainerGeral>

            <Header/>

            <ContainerCenter>
                <CardCadastro>
                    <CardEsquerda2>
                        <Tituloo>
                            Olá
                        </Tituloo>

                        <Titulo2>
                            Seja Bem vindo de volta
                        </Titulo2>


                        {/* <TextField>
                            <InputStyle type="text" name="email" placeholder="email"/>
                            <InputStyle type="password" name="senha" placeholder="senha"/>
                        </TextField> */}
                      
                        <Botao onClick={goToPrincipal}>
                            Login
                        </Botao>
                    </CardEsquerda2>
{/* --------------------------------------------------------------------------------------------------------- */}
                    <CardDireita2>
                       
                       <TextoDireita>
                            Ainda não é cadastrado?
                       </TextoDireita>

                        <BotaoDireita onClick={goToCadastro}>
                            cadastre-se
                        </BotaoDireita>

                        <ImagemDireita src={imagemLogin}/>

                    </CardDireita2>
                </CardCadastro>
                </ContainerCenter>
            </ContainerGeral>        
        </>
    )
}

export default Login