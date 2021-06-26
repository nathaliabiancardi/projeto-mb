import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import { FiPower} from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

import turnOnName from '../../assets/turnon.svg';
import university from '../../assets/universidade.svg';
import theater from '../../assets/teatros.svg';
import cine from '../../assets/cinema.svg';
import sertanejo from '../../assets/sertanejo.svg';
import child from '../../assets/infantil.svg';
import museum from '../../assets/museus.svg';

export default function Events(){
    return(
        <div className="events-container">
            <header>
                <img src={turnOnName} alt="Name"/>
                <span>Bem Vinda, Nathalia!</span>
                <Link className="button" to="/perfil">Configurações de Perfil</Link>
                <button type="button">
                    <FiPower size={25} color="#4328E7"/>
                </button>
            </header>
            <section>
                <input className="search" placeholder="Busca de eventos"/>
                <button className="button" type="submit">Buscar</button>
            </section>
            <main>
                <div>
                    <img src={university} alt="Universitários"/>
                    <Link className="button" to="">Palestras</Link>
                </div>
                <div>
                    <img src={theater} alt="Teatros"/>
                    <Link className="button" to="">Teatros</Link>
                </div>
                <div>
                    <img src={cine} alt="Cinemas"/>
                    <Link className="button" to="">Cinemas</Link>
                </div>
                <div>
                    <img src={sertanejo} alt="Sertanejo"/>
                    <Link className="button" to="/shows">Shows</Link>
                </div>
                <div>
                    <img src={child} alt="Infantil"/>
                    <Link className="button" to="">Infantis</Link>
                </div>
                <div>
                    <img src={museum} alt="Museus"/>
                    <Link className="button" to="">Museus</Link>
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