import React from 'react';
import '../App.css';
import '../components/style.css'
import bodyimage from '../img/body.png'
import Navb from '../components/Navb';
import imagen1 from '../img/imagen1.jpg';
import imagen2 from '../img/imagen2.jpg';
import imagen3 from '../img/imagen3.png';
import Jumbo1 from '../components/Jumbo1';
import Jumbo2 from '../components/Jumbo2';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';

function Home() {
  return (
  <div className="body-bg" style = {{
      backgroundImage: `url(${bodyimage})`,
      }}>
          <Navb/>

          <div className="titulo">
              SOMOS VALORANT
          </div>
          <div className="flex-container">
              <div className="contenedor-wrap"> 
            <img className="imagen1" src={imagen1}  alt="ingame"/>
            <img className="imagen2" src={imagen2}  alt="ingame"/>
            <img className="imagen3" src={imagen3}  alt="ingame"/>
              </div>
         </div>
         <div className="flex-container">
             <div className="contenedor-wrap">
                 <div>
                     <Jumbo1/>
                 </div>

                 <div>
                     <Jumbo2/>
                 </div>

             </div>
         </div>

         <div className="flex-container">
             <div className="contenedor-wrap">
                 <h1 className="white-letter">GAMEPLAY</h1>             
            </div>
            <div className="contenedor-wrap">
            <ReactPlayer
            className="video"
            url='https://www.youtube.com/watch?v=K2lp6xqnTqA' 
                 />
            </div>
        </div>
        <br></br><br></br>
        <div>
            <Footer/>
        </div>

  </div>

  
        
  );
}

export default Home;