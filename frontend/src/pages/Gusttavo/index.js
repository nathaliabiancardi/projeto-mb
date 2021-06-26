import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import { FiPower} from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';


import turnOnName from '../../assets/turnon.svg';

export default function GusttavoLima(){
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
