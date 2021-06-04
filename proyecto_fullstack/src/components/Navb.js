import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './style.css';
import logo from '../img/logo.png';
import {Link} from "react-router-dom";
import toggler from '../img/toggler.png';

const Navb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="bg-negro" expand="md">
        <Link to = "/">
        <NavbarBrand>
          <img src={logo} className="logo" alt="Logo"/>  </NavbarBrand>
        </Link>
        
        <NavbarToggler  className="boton" onClick={toggle}>
        <img src={toggler} className="toggler" alt="toggle"/>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="white-letter">
                Información de juego
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Agentes
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Armas
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Mapas
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem >
              <NavLink className="white-letter" href="">Noticias</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="white-letter" href="">Pase de batalla</NavLink>
            </NavItem>
            <NavItem>
              <Link to ="/Tienda">
                <NavLink className="white-letter">Tienda</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to ="/Acerca de">
              <NavLink className="white-letter">Acerca de</NavLink>
              </Link>
            </NavItem>
          </Nav>
            <Link to="/Registro">
            <div class="navbar-form navbar-right">    
            <input className="boton-registro" type="button" value="REGISTRATE"/>
            </div>
            </Link>
    
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;