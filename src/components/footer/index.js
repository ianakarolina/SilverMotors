import React,{ Component } from 'react';
import "../footer/styles.css";
import insta from "../../images/instagram.png";
import face from "../../images/facebook.png";
import whats from "../../images/whatsapp.png";

class Footer extends Component {
    render(){
        return(
            <>
                <footer className="footer">
                    Nossas Redes:
                    <a href="*" className='instagram-icon'>
                        <img src={insta} alt="instagram" heigh="32" width="32"/>
                    </a> 
                    <a href="*" className='facebook-icon'>
                        <img src={face} alt="facebook" heigh="30" width="30" />
                    </a> 
                    <a href="*" className='whatsapp-icon'>
                        <img src={whats} alt="whatsapp" heigh="32" width="32" />
                    </a> 
                </footer>
            </>
        )
    }
}

export default Footer 