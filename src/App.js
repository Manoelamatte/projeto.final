import style from "./style.css"

function App() {
  return (
    <><body>
     <div class="tela-inteira">
      <header>
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
      </header>


        <main>

        </main>

        <footer>
            <h4>Sobre a autora:</h4>
        </footer>
    </div>
</body>

</>
  );
}

export default App;
