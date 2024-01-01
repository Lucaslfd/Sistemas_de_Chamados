import { useState } from 'react';
import { Link } from 'react-router-dom'; 

import './singin.css';
import logo from '../../assets/logo.png'


export default function SingIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Logo da tela de cadastro'/>
                </div>

                <form>
                    <h1>Entrar</h1>
                    <input 
                    type='email' 
                    placeholder='Email' 
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    />
                    <input 
                    type='password'
                    placeholder='Senha' 
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    />

                    <button type='submit' >Acessar</button>
                    
                </form>

                <Link to='/register'>Ainda não tem uma conta? Registre-se </Link>

            </div>
        </div>
    )
}