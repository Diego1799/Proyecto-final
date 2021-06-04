import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home';
import Acercade from './Pages/Acerca de';
import Registro from './Pages/Registro';
import Crud from './Pages/Crud';
import Tienda from './Pages/Tienda'

function App() {
  return (
    <BrowserRouter>
       <Route exact path="/" component={Home}/>
       <Route exact path="/Acerca de" component={Acercade}/>
       <Route exact path="/Registro" component={Registro}/>
       <Route exact path="/Crud" component={Crud}/>
       <Route exact path="/Tienda" component={Tienda}/>
    </BrowserRouter>
  );
}

export default App;
