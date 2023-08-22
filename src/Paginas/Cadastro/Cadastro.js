import { Butao } from "../../components/Botao/styled.jsx"
import {ContainerGeral, CardCadastro, CardDireita, CardEsquerda, TextField, TituloCadastro, Botao} from "../Cadastro/styled.jsx"
import { Input } from "./styled.jsx"

function Cadastro(){
  return(
    <>
     <ContainerGeral>
            <CardCadastro>
                <CardDireita>

                </CardDireita>

                <CardEsquerda>
                  <TituloCadastro>Cadastre-se</TituloCadastro>


                  {/* <TextField>
                     <Input type="text" name="email" placeholder="email"></Input>
                     <Input type="password" name="senha" placeholder="senha"></Input>
                     <Input type="password" name="senha" placeholder="confirme a senha"></Input>
                  </TextField> */}

          
                  <Butao>
                    Entrar
                  </Butao>
                </CardEsquerda>

            </CardCadastro>
        </ContainerGeral>
    </>
  )
}

export default Cadastro