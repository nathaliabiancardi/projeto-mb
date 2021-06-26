import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import { FiPower} from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiArrowLeft} from 'react-icons/fi';

import turnOnName from '../../assets/turnon.svg';
import pagode from '../../assets/pagode2.svg';
import sertanejo from '../../assets/zeze.svg';
import funk from '../../assets/anitta.svg';
import forro from '../../assets/forro2.svg';
import rock from '../../assets/titas.svg';
import internacionais from '../../assets/beyonce.svg';
import reggae from '../../assets/reggae.svg';
import classica from '../../assets/classica.svg';
import mpb from '../../assets/mpb.svg';
import axe from '../../assets/axé.svg';
import rap from '../../assets/rap.svg';
import standUp from '../../assets/standup.svg';


export default function Shows(){
    return(
        <div className="shows-container">
             <header>
                <img src={turnOnName} alt="Name"/>
                <span>Bem Vinda, Nathalia!</span>
                <Link className="button" to="/perfil">Configurações de Perfil</Link>
                <button type="button">
                    <FiPower size={25} color="#4328E7"/>
                </button>
            </header>
            <section>
            <Link className="fb-link" to="/Events">
                <FiArrowLeft size={18} color="#4328E7"/>Retornar</Link>
                <input className="search" placeholder="Busca de eventos"/>
                <button className="button" type="submit">Buscar</button>
            </section>
            <main>
                <div>
                    <img src={pagode} alt="pagode"/>  
                    <Link className="button" to="">Pagode</Link>
                </div>
                <div>
                    <img src={sertanejo} alt="sertanejo"/>  
                    <Link className="button" to="/sertanejo">Sertanejo</Link>
                </div>
                <div>
                    <img src={funk} alt="funk"/>  
                    <Link className="button" to="">Funk</Link>
                </div>
                <div>
                    <img src={forro} alt="forro"/>  
                    <Link className="button" to="">Forró</Link>
                </div>
                <div>
                    <img src={rock} alt="rock"/>  
                    <Link className="button" to="">Pop Rock</Link>
                </div>
                <div>
                    <img src={internacionais} alt="internacionais"/>  
                    <Link className="button" to="">Internacionais</Link>
                </div>
                <div>
                    <img src={reggae} alt="reggae"/>  
                    <Link className="button" to="">Reggae</Link>
                </div>
                <div>
                    <img src={classica} alt="classica"/>  
                    <Link className="button" to="">Música Clássica</Link>
                </div>
                <div>
                    <img src={mpb} alt="mpb"/>  
                    <Link className="button" to="">MPB</Link>
                </div>
                <div>
                    <img src={axe} alt="axe"/>  
                    <Link className="button" to="">Axé</Link>
                </div>
                <div>
                    <img src={rap} alt="rap"/>  
                    <Link className="button" to="">Rap</Link>
                </div>
                <div>
                    <img src={standUp} alt="standup"/>  
                    <Link className="button" to="">Stand Ups</Link>
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