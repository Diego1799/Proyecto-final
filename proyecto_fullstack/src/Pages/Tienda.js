import React, { useState } from 'react';
import '../App.css';
import '../components/style.css'
import Navb from '../components/Navb';
import Footer from '../components/Footer';
import Axios from 'axios'
import Carrousel from '../components/Carrousel'
import {Link} from "react-router-dom";



function Tienda () {
    const [productosList, setProductosList] = useState([])
    const getproducto = () => {
        Axios.get('http://localhost:3001/productos').then((response) => {
            setProductosList(response.data);
        });
    }
    return(
        <div className="bg-negro">
            <Navb/>
            <div className="boton-registrar-align pb-5">
            <Carrousel/>
            </div>
            
            <div className="boton-registrar-align pb-5">
                <button className="boton-crud" type="button" onClick={getproducto}>Mostrar</button>
                <Link to = '/Crud'>
                <button className="boton-crudmargin">CRUD</button>
                </Link>
                
            </div>
            {productosList.map((val,key) => {
                        return (
                        <div className="container boton-registrar-align pb-3"> 
                        <div className="tiendaproducto">
                            <div>
                                <h3 className="margin">Nombre: {val.nombre}</h3>
                                <h3 className="margin">Precio: ${val.precio}</h3>
                                <h3 className="margin">Riot Points: {val.riotpoints} RP</h3>
                            </div>
                        </div>
                        </div>
                        )
                        })}
            <Footer/>
        </div>
    )
}

export default Tienda;