import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';

import turnOnLogo from '../../assets/tu.png';
import turnOnName from '../../assets/turnon.svg';

export default function Login(){
    return (
        
        <div className="login-container">
            <section className="form">
            <img src={turnOnName} alt="Name"/>
            <form>
                <h1> Faça seu Login</h1>
                <input type="email" placeholder="E-mail"/>
                <input placeholder="Senha"/>
                <button className="button" type="submit">Entrar</button>
                <Link className="fb-link" to="/register">
                    <FiLogIn size={18} color="#4328E7"/>
                    Cadastre-se</Link>
            </form>
            </section>
            <img src={turnOnLogo} alt="Logo"/>
        </div>
    )
}