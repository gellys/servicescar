import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiXCircle } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Profile(){
    
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Services Car"/>
                <span>ServicesCar</span>

                <button>
                    <FiPower size={26} color="#083863"/>
                </button>
            </header>
            
            <div className="profile-cadastro">
                <input placeholder="Placa do veículo" style={{ width: 180 }} />
                <Link className="button" to="/carros-new">Cadastrar </ Link>
            </div>
            
            <h1>Carros cadastrados</h1>

            <ul>
                <li>
                    <p>ANG0804</p>

                    <button type="button">
                        <FiXCircle size={26} color="#d43418"/>

                    </button>
                </li>

                <li>
                    
                    <p>ANG0804</p>

                    <button type="button">
                        <FiXCircle size={26} color="#d43418"/>

                    </button>
                </li>

                <li>
                    
                    <p>ANG0804</p>

                    <button type="button">
                        <FiXCircle size={26} color="#d43418"/>

                    </button>
                </li>

                <li>
                    
                    <p>ANG0804</p>

                    <button type="button">
                        <FiXCircle size={26} color="#d43418"/>

                    </button>
                </li>
            </ul>
        </div>
    );
}