// import { useNavigate } from "react-router-dom"
import './style.css';
import { ContainerGeral, GlobalStyle } from '../../styledGlobal';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home(){
    
    return(
        <>
        <GlobalStyle/>
        <ContainerGeral>
            <Header/>

            <Footer/>
        </ContainerGeral>
        </>
    )
}

export default Home