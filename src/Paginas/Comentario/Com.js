import { ContainerGeral } from "../../styledGlobal";
import {BotaoPublicar, CardBolinha, ComentariosCard, Input, MiniContainer, TextoMiniContainer, ImagemMascara} from "./styled";
import logoMascara from "../../assets/logoMascara.png"
import Header2 from "../../components/Header/Header2";

function Com(){
    return(
        <>
     
        <ContainerGeral>
            <Header2/>
                <ComentariosCard>
                    <MiniContainer>
                        <CardBolinha>
                            <ImagemMascara src={logoMascara} />
                        </CardBolinha>

                         <TextoMiniContainer>
                            Comente aqui sobre o que você está pensando.
                         </TextoMiniContainer>
                    </MiniContainer>


                </ComentariosCard>

            {/* 

                <Input type="text" name="comentario" placeholder="Digite Aqui...">
                </Input>

                <BotaoPublicar>COMENTAR</BotaoPublicar>
        */}
        </ContainerGeral>
        </>
    )
}

export default Com