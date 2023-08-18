import './style.css';
import { ContainerHeader, H2 } from './styled';

function Header(){
    return(
        <>

        <ContainerHeader>

        <H2>
        CINEMA EMPOWERMENT
        </H2>

         <menu>
           <li><button onclick="click">Filmes</button></li>
           <li><button onclick="click">Resenhas</button></li>
           <li><button onclick="click">Sexualização</button></li>
           <li><button onclick="click">Teste de Bechdel</button></li>
        </menu>
      
      </ContainerHeader>
        </>
    )
}

export default Header