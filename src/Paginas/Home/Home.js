// import { useNavigate } from "react-router-dom"
import './style.css';
import { ContainerGeral } from '../../styledGlobal';
import { useNavigate } from "react-router-dom"
import Header from '../../components/Header/Header';
import { BotaoHome } from './styled';

function Home(){
    const navigate = useNavigate()

    const goToLogin = () =>{
        navigate('/login')
    } 

    const goToCadastro = ()=>{
        navigate('/cadastro')
    }


    return(
        <>
        <Header>
           <BotaoHome onClick={goToLogin} >
                Login
            </BotaoHome>

            <BotaoHome onClick={goToCadastro} >
                Cadastro
            </BotaoHome>
        </Header>

        <ContainerGeral>
    
        </ContainerGeral>
        </>
    )
}

export default Home