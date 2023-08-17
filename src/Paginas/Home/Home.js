// import { useNavigate } from "react-router-dom"
import './style.css';
import Header from '../../components/Header/Header';
import { ContainerGeral } from '../../styledGlobal';

function Home(){
    // const navigate = useNavigate()
    // const 
    return(


            <div class="content">
            <div class="slides">
             <input type="radio" name="slide" id="slide1" checked/>
                <input type="radio" name="slide" id="slide2"/>
                <input type="radio" name="slide" id="slide3"/>
                <input type="radio" name="slide" id="slide4"/>

                <div class="slide s1">
                    <img src="Marvel.jpg" alt="marvel"/>
                </div>

                <div class="slide">
                    <img src="MarvelH.png" alt="girl power"/>
                </div>

                <div class="slide">
                    <img src="dc.jpg" alt="dc"/>
                </div>

                <div class="slide">
                    <img src="DcH.png" alt="girl power dc"/>
                </div>
            </div>


            <div class="navegation">
                <label class="bar" for="slide1"></label>
                <label class="bar" for="slide2"></label>
                <label class="bar" for="slide3"></label>
                <label class="bar" for="slide4"></label>
            </div>
            </div>
        
        
    )
}

export default Home