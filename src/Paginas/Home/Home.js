// import { useNavigate } from "react-router-dom"
import './style.css';
import { ContainerGeral, GlobalStyle } from '../../styledGlobal';
import Header from '../../components/Header/Header';

function Home(){
    
    return(
        <>
        <GlobalStyle/>
        <Header/>

        <ContainerGeral>
        </ContainerGeral>
        </>
    )
}

export default Home