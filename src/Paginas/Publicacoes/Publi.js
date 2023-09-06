import { ContainerCenter, ContainerGeral } from "../../styledGlobal";
import { BotaoPublicar, CardBolinha, ComentariosCard, ImagemMascara, MiniContainer, TextoMiniContainer } from "../Comentario/styled";
import logoMascara from "../../assets/logoMascara.png"
import { Input } from "../Cadastro/styled";
import Header2 from "../../components/Header/Header2";

function Publi(){
    return(
        <>
        <ContainerGeral>
            <Header2/>

            <ContainerCenter>
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
            </ContainerCenter>
    
        </ContainerGeral>
        </>
    )
}

export default Publi