import { useNavigate } from 'react-router-dom';
import { BotaoHeader, ContainerBotao, ContainerHeader, H2, } from './styled';

function Header(){

     const navigate = useNavigate()
      const goToLogin = () =>{
        navigate('/login')
    } 

    const goToCadastro = ()=>{
        navigate('/cadastro')
    }

    return(
        <>

        <ContainerHeader>

        <H2>
        CINEMA EMPOWERMENT
        </H2>

        <ContainerBotao>
        <BotaoHeader onClick={goToLogin}>
            Login
        </BotaoHeader>
        
        <BotaoHeader onClick={goToCadastro}>
            cadastrado
        </BotaoHeader>
        </ContainerBotao>
        

      </ContainerHeader>
        </>
    )
}

export default Header