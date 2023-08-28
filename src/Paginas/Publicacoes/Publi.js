import { ContainerGeral } from "../../styledGlobal";
import { BotaoPublicar, CardBolinha, ComentariosCard, ImagemMascara, MiniContainer, TextoMiniContainer } from "../Comentario/styled";
import logoMascara from "../../assets/logoMascara.png"
import { Input } from "../Cadastro/styled";
import Header from "../../components/Header/Header";

function Publi(){
    return(
        <>
          <Header/>
        <ContainerGeral>
           <ComentariosCard>
                <MiniContainer>
                    <CardBolinha>
                        <ImagemMascara  src={logoMascara}/>
                    </CardBolinha>

                    <TextoMiniContainer>
                    Comente aqui sobre o que você anda assistindo! Queremos muito saber! 
                    </TextoMiniContainer>
                </MiniContainer>

                <BotaoPublicar>PUBLICAR</BotaoPublicar>
           </ComentariosCard>
        </ContainerGeral>
        </>
    )
}

export default Publi