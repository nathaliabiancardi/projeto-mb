import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import { FiPower} from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiArrowLeft} from 'react-icons/fi';

import turnOnName from '../../assets/turnon.svg';
import marilia from '../../assets/marilia.svg';
import gustavo from '../../assets/gustavo.svg';
import daniel from '../../assets/daniel.svg';
import fernando from '../../assets/fernando.svg';
import simone from '../../assets/simaria.svg';
import chitao from '../../assets/chitao.svg';
import jorge from '../../assets/jorge.svg';
import felipe from '../../assets/felipe.svg';
import henrique from '../../assets/henrique.svg';
import zeze from '../../assets/zezeelu.svg';
import maiara from '../../assets/maiara.svg';
import zeneto from '../../assets/zeneto.svg';



export default function Sertanejo(){
    return(
        <div className="sertanejo-container">
             <header>
                <img src={turnOnName} alt="Name"/>
                <span>Bem Vinda, Nathalia!</span>
                <Link className="button" to="/perfil">Configurações de Perfil</Link>
                <button type="button">
                    <FiPower size={25} color="#4328E7"/>
                </button>
            </header>
            <section>
            <Link className="fb-link" to="/Shows">
                <FiArrowLeft size={18} color="#4328E7"/>Retornar</Link>
                <input className="search" placeholder="Busca de eventos"/>
                <button className="button" type="submit">Buscar</button>
            </section>
            <main>
                <div>
                    <img src={marilia} alt="Marília Mendonça"/>  
                    <Link className="button" to="">Marília Mendonça</Link>
                </div>
                <div>
                    <img src={gustavo} alt="Gusttavo Lima"/>  
                    <Link className="button" to="">Gusttavo Lima</Link>
                </div>
                <div>
                    <img src={daniel} alt="Daniel"/>  
                    <Link className="button" to="">Daniel</Link>
                </div>
                <div>
                    <img src={fernando} alt="Fernando e Sorocaba"/>  
                    <Link className="button" to="">Fernando e Sorocaba</Link>
                </div>
                <div>
                    <img src={simone} alt="Simone e Simaria"/>  
                    <Link className="button" to="">Simone e Simaria</Link>
                </div>
                <div>
                    <img src={chitao} alt="Chitãozinho e Xororó"/>  
                    <Link className="button" to="">Chitãozinho e Xororó</Link>
                </div>
                <div>
                    <img src={jorge} alt="Jorge e Mateus"/>  
                    <Link className="button" to="">Jorge e Mateus</Link>
                </div>
                <div>
                    <img src={felipe} alt="Felipe Araújo"/>  
                    <Link className="button" to="">Felipe Araújo</Link>
                </div>
                <div>
                    <img src={henrique} alt="Henrique e Juliano"/>  
                    <Link className="button" to="">Henrique e Juliano</Link>
                </div>
                <div>
                    <img src={zeze} alt="Zezé de Camargo e Luciano"/>  
                    <Link className="button" to="">Zezé de Camargo e Luciano</Link>
                </div>
                <div>
                    <img src={maiara} alt="Maiara e Maraisa"/>  
                    <Link className="button" to="">Maiara e Maraisa</Link>
                </div>
                <div>
                    <img src={zeneto} alt="Zé neto e Cristiano"/>  
                    <Link className="button" to="">Zé neto e Cristiano</Link>
                </div>
            </main>
            <footer>
                <span>Fale conosco</span>
                <button type="button">
                    <FiMail size={16} color="#fff"/></button>
                <span>Siga-nos nas redes sociais</span>
                <button type="button">
                    <FiFacebook size={16} color="#fff"/></button>
                <button type="button">
                    <FiInstagram size={16} color="#fff"/></button>
            </footer>
        </div>
    )
}