import React from 'react';
import '../App.css';
import Navb from '../components/Navb';
import '../components/style.css'
import Jumbo3 from '../components/Jumbo3';
import Jumbo4 from '../components/Jumbo4';
import oficina1 from '../img/oficina1.jpg';
import oficina2 from '../img/oficina2.jpeg';
import Footer from '../components/Footer';

function Acercade() {
    return (
        <div className="body-acerca">
            <Navb/>
            <div className="titulo-acerca">
                <h1><b>RIOT GAMES</b></h1>
            </div>
            <div className="flex-container">
             <div className="contenedor-wrap">
                 <div>
                     <Jumbo3/>
                 </div>

                 <div>
                     <Jumbo4/>
                 </div>
             </div>
            </div>
            <div className="titulo-acerca">
                <h1><b>NUESTRAS OFICINAS</b></h1>
            </div>
            <div class="flex-container">
                <div class="contenedor-wrap"> 
                <img className="imagen1" src={oficina1} alt="ingame"/>
                <img className="imagen2" src={oficina2} alt="oficina"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }
  
  export default Acercade;