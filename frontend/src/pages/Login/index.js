import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../Store/Context';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function initialState(){
    return { email: '', password:''};
}

function login({ email, password}){
    if (email === 'frontend-dev@easycarros.com' && password ==='Fr0nt3ndR0ck5!'){
        return { token: '12342020' };
    }
    return { error: 'Usuário ou senha inválida!'}
}

export default function Login(){
    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]:value
        });
    }

    function onSubmit(event){
        event.preventDefault();

        const { token } = login(values);

        if(token){
            setToken(token);
            return history.push('/');
        }

        setValues(initialState);
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Logo da aplicação"/>

                <form onSubmit={onSubmit}>
                    <h1 className="login-title">Faça seu Login</h1>

                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="E-mail" 
                        onChange={onChange} 
                        value={values.email} 
                    />

                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Senha" 
                        onChange={onChange} 
                        value={values.password} 
                    />

                    <button type="submit" className="button">Entrar</button>
                </form>
            </section>
        </div>
    );
}