import { Butao } from "../../components/Botao/styled.jsx"
import { CardCadastro, CardDireita, CardEsquerda, TextField, TituloCadastro,  EscritaDireita, ImgCadastro} from "../Cadastro/styled.jsx"
import { ContainerCenter, ContainerGeral } from "../../styledGlobal"
import imagemCadastro from  "../../assets/imagemCadastro.png"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header.js"

function Cadastro(){
  const navigate = useNavigate()
  const goToPrincipal = ()=>{
    navigate('/principal')
}

  return(
    <>
     <ContainerGeral>
      <Header/>
        <ContainerCenter>

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
          
                  <Butao onClick={goToPrincipal}>
                    Entrar
                  </Butao>
                </CardEsquerda>

            </CardCadastro>

           </ContainerCenter>
        </ContainerGeral>
    </>
  )
}

export default Cadastro