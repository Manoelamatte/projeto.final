import { ContainerGeral } from "../../styledGlobal"
import { CardCadastro } from "../Cadastro/styled"
// import { CardDireita2, CardEsquerda2, Tituloo } from "./styled"
import { CardDireita2, CardEsquerda2, Tituloo } from "./styled"


function Login(){
    return(
        <>
            <ContainerGeral>
                <CardCadastro>
                    <CardEsquerda2>
                        <Tituloo>
                            Olá
                        </Tituloo>

                        <Tituloo>
                            Seja Bem vindo de volta
                        </Tituloo>
                    </CardEsquerda2>

                    <CardDireita2>
                        
                    </CardDireita2>
                </CardCadastro>
            </ContainerGeral>        
        </>
    )
}

export default Login