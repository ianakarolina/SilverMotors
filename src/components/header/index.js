import React, { Component } from 'react';
import logo from "../../images/SM.png"
import "../header/styles.css"

class Header extends Component{
    
    render(){
        const openMenu = () =>{
            document.querySelector(".sidebar").classList.add("open")
          }
          const closeMenu = () =>{
            document.querySelector(".sidebar").classList.remove("open")
          }
        return(
            <>
                <header className="header">
                    <div className="brand">
                        <img className="logo"src={logo}/>
                        <a href="index.html">SilverMotors</a>
                    </div>
                    <div className="header-links">
                        <a href="sobrenos.html">Sobre nós</a>
                        <a href="services.html">Fale conosco</a>
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Marcas</h3>
                    <button className="sidebar-close" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">Ford</a>
                        </li>

                        <li>
                            <a href="index.html">Chevrolet</a>
                        </li>
                    </ul>
                    <h3>Serviços</h3>
                    <ul>
                        <li>
                            <a href="index.html">Financiamento</a>
                        </li>

                        <li>
                            <a href="index.html">Seguro</a>
                        </li>
                        <li>
                            <a href="index.html">Catálogo 0km</a>
                        </li>
                    </ul>
                    <a className="mascote" href="index.html">Nosso mascote</a>
            </aside>
            
            </>
        )
    }
    
}

export default Header