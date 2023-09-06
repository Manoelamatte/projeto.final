import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "../Paginas/Cadastro/Cadastro"
import Home from "../Paginas/Home/Home"
import Login from "../Paginas/Login/Login"
import Erro from "../Paginas/Erro/Erro"
import Principal from "../Paginas/Principal/Principal"
import Publi from "../Paginas/Publicacoes/Publi"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="*" element={<Erro/>}/>
                <Route path="principal" element={<Principal/>}/>
                <Route path="publi" element={<Publi/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas