import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "../Paginas/Cadastro/Cadastro"
import Home from "../Paginas/Home/Home"
import Login from "../Paginas/Login/Login"
import Erro from "../Paginas/Erro/Erro"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas