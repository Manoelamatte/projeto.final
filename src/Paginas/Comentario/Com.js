import { ContainerGeral } from "../../styledGlobal";
import {BotaoPublicar, CardBolinha, ComentariosCard, Input, MiniContainer, TextoMiniContainer, ImagemMascara} from "./styled";
import logoMascara from "../../assets/logoMascara.png"
import Header from "../../components/Header/Header";

function Com(){
    return(
        <>
        <Header/>
        <ContainerGeral>
            <ComentariosCard>
                <MiniContainer>
                    <CardBolinha>
                    <ImagemMascara src={logoMascara} />
                    </CardBolinha>

                    <TextoMiniContainer>
                    Comente aqui sobre o que você está pensando.
                    </TextoMiniContainer>
                </MiniContainer>

                <Input type="text" name="comentario" placeholder="Digite Aqui...">
                </Input>

                <BotaoPublicar>COMENTAR</BotaoPublicar>
            </ComentariosCard>
        </ContainerGeral>
        </>
    )
}

export default Com