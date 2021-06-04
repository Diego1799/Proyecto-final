import React, { useState } from 'react';
import '../App.css';
import '../components/style.css'
import Navb from '../components/Navb';
import Footer from '../components/Footer';
import Axios from 'axios'

function Crud() {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [riotpoints, setRiotpoints] = useState(0)

    const [newNombre, setNewnombre] = useState("");
    const [newPrecio, setNewprecio] = useState(0);
    const [newRiotpoints, setNewriotpoints] = useState(0);

    const [productosList, setProductosList] = useState([])

    const addproducto = () => {
        Axios.post('http://localhost:3001/create', {
        nombre: nombre,
        precio: precio,
        riotpoints: riotpoints
    }).then(() => {
        console.log('Completado');
    });
};
    const getproducto = () => {
        Axios.get('http://localhost:3001/productos').then((response) => {
            setProductosList(response.data);
        });
    }

    const borrarproducto = (id) =>{
        Axios.delete(`http://localhost:3001/borrar/${id}`).then((response) =>{
            setProductosList(productosList.filter((val) =>{
                return val.id !== id;
            }))
        })
    }

    const updateproducto = (id) => {
        Axios.put("http://localhost:3001/update", {nombre: newNombre,precio: newPrecio,riotpoints: newRiotpoints, id: id}).then((response) => {
            setProductosList(productosList.map((val) => {
                return val.id === id ? {
                    id: val.id,
                    nombre: val.nombre,
                    precio: val.precio,
                    riotpoints: val.riotpoints,
                }   : val;
            })
            );
        }
    );
    }


    return (
        <div className="bg-negro">
            <div className="pb-5">
            <Navb/>
            </div>
            
            <div className="pb-5">
            <h1 className="titulo pb-5">CRUD Productos</h1>
            </div>
            
            <div className="container">
                <form className="form">
                    <label className="form-label">Nombre producto:</label>
                    <input className="form-input form-text" type="text" onChange={(event) => {setNombre(event.target.value)}}></input>

                    <label className="form-label">Precio</label>
                    <input className="form-input form-text"  type="number" onChange={(event) => {setPrecio(event.target.value)}}></input>

                    <label className="form-label">Riot Points</label>
                    <input className="form-input form-text"  type="number" onChange={(event) => {setRiotpoints(event.target.value)}}></input>

                    <div className="boton-registrar-align pb-5">
                    <button className="boton-crud" onClick={addproducto}>Agregar</button>
                    <button className="boton-crudmargin" onClick={getproducto} type="button">Ver lista</button>
                    </div>
                    </form> 
                    {productosList.map((val,key) => {
                        return (
                        <div className="container boton-registrar-align pb-3"> 
                        <div className="productos">
                            <div>
                                <h3 className="margin">Nombre: {val.nombre}</h3>
                                <h3 className="margin">Precio: ${val.precio}</h3>
                                <h3 className="margin">Riot Points: {val.riotpoints} RP</h3>
                            </div>
                            
                            <div>
                                    <input className="form-input form-text" type="text" placeholder="Nombre" onChange={(event) =>{
                                    setNewnombre(event.target.value);}}></input>
                                    <input className="form-input form-text" type="number" placeholder="Precio" onChange={(event) =>{
                                    setNewprecio(event.target.value);}}></input>
                                    <input className="form-input form-text" type="number" placeholder="Riot Points" onChange={(event) =>{
                                    setNewriotpoints(event.target.value);}}></input>
                            </div>
                            <div className="borrar">
                                <button className="boton-crud2" onClick={()=>{borrarproducto(val.id)}}>Borrar</button>
                            </div>
                            <div className="editar">
                                <button className="boton-crud2" onClick={() =>{updateproducto(val.id)}}>Editar</button>    
                            </div> 
                                    
                        </div>
                        </div>
                        )
                        })}
                    
                           
            </div>
            <Footer/>
        </div> 
        
    );
}
  export default Crud;