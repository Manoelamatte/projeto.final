import style from "./style.css"

function Header(){
    return(
        <>
         <menu>
           <li><button onclick="click">Filmes</button></li>
           <li><button onclick="click">Resenhas</button></li>
           <li><button onclick="click">Sexualização</button></li>
           <li><button onclick="click">Teste de Bechdel</button></li>
        </menu>


      <h2>CINEMA EMPOWERMENT</h2>

      
      <div id="divBusca">
          <input type="text" id="txtBusca" placeholder="Buscar..."/>
          <button id="btnBusca">Buscar</button>
      </div>
        </>
    )
}

export default Header