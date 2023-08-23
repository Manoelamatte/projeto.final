import { Butao } from "../../components/Botao/styled.jsx"
import { CardCadastro, CardDireita, CardEsquerda, TextField, TituloCadastro,  EscritaDireita, ImgCadastro} from "../Cadastro/styled.jsx"
import { ContainerGeral } from "../../styledGlobal"
import imagemCadastro from  "../../assets/imagemCadastro.png"

function Cadastro(){
  return(
    <>
     <ContainerGeral>
            <CardCadastro>
                <CardDireita>
                  <EscritaDireita>
                     Cadastre-se para ter acesso aos nossos conteúdos informativos!
                  </EscritaDireita>

                  <ImgCadastro src={imagemCadastro}/>
                </CardDireita>

                <CardEsquerda>
                  <TituloCadastro>Cadastre-se</TituloCadastro>


                   {/* <TextField>
                     <Input type="text" name="email" placeholder="email"></Input>
                     <Input type="password" name="senha" placeholder="senha"></Input>
                     <Input type="password" name="senha" placeholder="confirme a senha"></Input>
                  </TextField>  */}
          
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