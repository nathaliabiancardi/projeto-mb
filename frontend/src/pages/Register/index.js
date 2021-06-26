import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import turnOnName from '../../assets/turnon.svg';

export default function Register(){
    return( 
    <div className="register-container">
        <div className="content">
            <section>
                <img src={turnOnName} alt="Name"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro e fique ligado!</p>
                <p>A diversão vai começar.</p>
                <Link className="fb-link" to="/"><FiArrowLeft size={18} color="#4328E7"/>Retornar</Link>
            </section>
            <form>
                <input placeholder="Nome completo"/>
                <input type="email" placeholder="E-mail"/>
                <input placeholder="Telefone"/>
                <div className="address">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{width:80}}/>
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
        );
    
}