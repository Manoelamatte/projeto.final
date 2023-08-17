import { ContainerGeral } from "../../styledGlobal"
import { CardCadastro } from "../Cadastro/styled"
// import { CardDireita2, CardEsquerda2, Tituloo } from "./styled"
import { CardDireita2, CardEsquerda2, Tituloo, Titulo2, TextField, Input, Label, Botao } from "./styled"


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
                            <Input type="text" name="email" placeholder="email">
                                
                            </Input>
                        </TextField>

                        <TextField>
                            <Input type="password" name="senha" placeholder="senha">
        
                            </Input>
                        </TextField>

                        <Botao>
                            Login
                        </Botao>
                    </CardEsquerda2>




                    <CardDireita2>
                        
                    </CardDireita2>
                </CardCadastro>
            </ContainerGeral>        
        </>
    )
}

export default Login