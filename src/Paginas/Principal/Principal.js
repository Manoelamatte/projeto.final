import Footer from "../../components/Footer/Footer"
import Header2 from "../../components/Header/Header2"
import { ContainerGeral } from "../../styledGlobal"
import { BotaoPrincipal, ImagemPrincipal } from "./styled"
import maisIcone from "../../assets/maisIcone.png"
import { useNavigate } from "react-router-dom"

function Principal(){

    const navigate = useNavigate()
    const goToPubli = ()=>{
        navigate('/publi')
    }

    return(
        <>
        <ContainerGeral>
            <Header2/>
        
            <BotaoPrincipal onClick={goToPubli}>
                <ImagemPrincipal src={maisIcone}/>
            </BotaoPrincipal>
        </ContainerGeral>
        </>
    )
}

export default Principal