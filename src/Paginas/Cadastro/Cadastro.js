import Botao from "../../components/Botao/Botao"
import { ContainerGeral } from "../../styledGlobal"
import { CardCadastro, CardDireita, CardEsquerda } from "./styled"

function Cadastro(){
    return(
        <>
        <ContainerGeral>
            <CardCadastro>
                <CardEsquerda>
                    
                </CardEsquerda>

                <CardDireita>
                    <Botao/>
                </CardDireita>
            </CardCadastro>
        </ContainerGeral>
        </>
    )
}

export default Cadastro