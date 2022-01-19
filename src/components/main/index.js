import React,{ Component } from 'react';
import bannerfoto from "../../images/bannerfoto.png";
import Fiesta from "../../images/FiestaFord.png"
import HB20 from "../../images/HB20Hyundai.png"
import Idea from "../../images/IdeaFiat.png"
import Onix from "../../images/OnixChevrolet.png"
import Corolla from "../../images/ToyotaCorolla.png"
import CG160 from "../../images/CG160Honda.png"
import lupa from "../../images/loupe.png"
import "../main/styles.css"

class Main extends Component{
    render(){
        return(
            <>
                <main className="main">
                    <div className="content">
                        <div className="banner">
                            <img className="banner-foto" src={bannerfoto} />
                        </div>  
                        <div className="busca">
                            <input className="texto-busca" type='text' placeholder='Informe o nome do veículo'/>
                            <a href='#' className="botao-busca">
                            <img src={lupa} alt='lupa' height="20" width="20"/>
                            </a>
                        </div>
                            <ul className="produtos">
                                <li>
                                    <div className="produto">
                                        <img className="produto-imagem" src={Fiesta} alt="produto"/>
                                        <div className="nome-produto">
                                            <a href="produto.html">Fiesta</a>
                                        </div>
                                        <div className="marca-produto">Ford</div>
                                        <div className="preco-produto">R$22.000</div>

                                    </div>
                                </li>
                                <li>
                                    <div className="produto">
                                        <img className="produto-imagem" src={HB20} alt="produto"/>
                                        <div className="nome-produto">
                                            <a href="produto.html">HB20</a>
                                        </div>
                                        <div className="marca-produto">Hyundai</div>
                                        <div className="preco-produto">R$23.500</div>

                                    </div>
                                </li>
                                <li>
                                    <div className="produto">
                                        <img className="produto-imagem" src={Idea} alt="produto"/>
                                        <div className="nome-produto">
                                            <a href="produto.html">Idea</a>
                                        </div>
                                        <div className="marca-produto">Fiat</div>
                                        <div className="preco-produto">R$20.150</div>

                                    </div>
                                </li>
                                <li>
                                    <div className="produto">
                                        <img className="produto-imagem" src={Onix} alt="produto"/>
                                        <div className="nome-produto">
                                            <a href="produto.html">Onix</a>
                                        </div>
                                        <div className="marca-produto">Chevrolet</div>
                                        <div className="preco-produto">R$25.400</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="produto">
                                        <img className="produto-imagem" src={Corolla} alt="produto"/>
                                        <div className="nome-produto">
                                            <a href="produto.html">Corolla</a>
                                        </div>
                                        <div className="marca-produto">Toyota</div>
                                        <div className="preco-produto">R$32.100</div>

                                    </div>
                                </li>
                                <li>
                                    <div className="produto">
                                        <img className="produto-imagem" src={CG160} alt="produto"/>
                                        <div className="nome-produto">
                                            <a href="produto.html">CG160</a>
                                        </div>
                                        <div className="marca-produto">Honda</div>
                                        <div className="preco-produto">R$5.350</div>

                                    </div>
                                </li>
                            </ul>
                    </div>
            </main>
            
            
            </>
        )

    }
}
    
export default Main