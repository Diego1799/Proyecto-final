import React from 'react';
import '../App.css';
import Navb from '../components/Navb';
import Footer from '../components/Footer';
import '../components/style.css'
import bodyregistro from '../img/bodyregistro.jpg';

function Registro() {
    return (
      <div className="body-bg" style = {{
        backgroundImage: `url(${bodyregistro})`,
        }}>
          <Navb/>
          <div>
          <form className="form">
            <h1 className="titulo-registro">Registrate</h1> 
    
            <label className="form-label">Usuario*</label>
            <input className="form-input form-text" placeholder="User" required="true" type="text"/>
    
            <label className="form-label">Contraseña*</label>
            <input className="form-input form-text" placeholder="Contraseña" required="true" type="password"/>
    
            <label className="form-label">Confirmar Contraseña*</label>
            <input className="form-input form-text" placeholder="Confirmar Contraseña" required="true" type="password"/>
    
            <label className="form-label">Correo Electronico*</label>
            <input className="form-input form-text" placeholder="Email" required="true" type="email"/>
            
            <label className="form-label">Fecha De Nacimiento*</label>
            <input className="form-input form-date icon-date" type="date" required="true"/>
            <br/>
            <div className="boton-registrar-align">
                <button className="boton-registrar" type="submit">Registrar</button>
            </div>
            <hr/>
            <h6 className="condiciones">Al inscribirte, confirmas haber leído, comprendido y aceptado las Condiciones Generales de Uso y la Política de confidencialidad, así como haber sido informado de tu derecho a la información.</h6>
        </form>
          </div>
          <div>
            <Footer/>
          </div>
      </div>
    );
  }
  
  export default Registro;




