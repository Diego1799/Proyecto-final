import React from 'react'
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import riot from '../img/riot.png';
const Footer = () => {
    
    return(
        <footer className="footer">
            <div>
            <img src={riot} className="logo-footer" alt="logo"/> 
            </div>
        <div>
            <a href="https://twitter.com/riotgames"><img src={twitter} className="twitter" alt="twitter" /></a>
            <a href="https://www.instagram.com/riotgames/"><img src={instagram} className="instagram" alt="instagram"/></a>
            <a href="https://www.facebook.com/RiotGames/"><img src={facebook} className="facebook" alt="facebook"/></a>
        </div>
        <div > 
            <b>
            © 2020 Riot Games, Inc. Riot Games, VALORANT y cualquier logo asociado son marcas, marcas de servicio o marcas registradas de Riot Games, Inc.
            </b>
        </div>
        
        </footer>
    )
}

export default Footer;




