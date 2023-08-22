import { ContainerGeral } from "../../styledGlobal"
import { CardCadastro } from "../Cadastro/styled"
// import { CardDireita2, CardEsquerda2, Tituloo } from "./styled"
import { CardDireita2, CardEsquerda2, Tituloo, Titulo2, TextField, Input, Botao, TextoDireita, BotaoDireita, ImagemDireita } from "./styled"
import imagemLogin from "../../assets/imagemLogin.png"

function Login(){
    return(
        <>
            <ContainerGeral>
                <CardCadastro>
                    <CardEsquerda2>
                        <Tituloo>
                            Olá
                        </Tituloo>

                        <Titulo2>
                            Seja Bem vindo de volta
                        </Titulo2>

                        <TextField>
                                Input
                        </TextField>
                            

                        <Botao>
                            Login
                        </Botao>
                    </CardEsquerda2>
{/* --------------------------------------------------------------------------------------------------------- */}
                    <CardDireita2>
                       
                       <TextoDireita>
                            Ainda não é cadastrado?
                       </TextoDireita>

                        <BotaoDireita>
                            cadastre-se
                        </BotaoDireita>

                        <ImagemDireita src={imagemLogin}/>

                    </CardDireita2>
                </CardCadastro>
            </ContainerGeral>        
        </>
    )
}

export default Login