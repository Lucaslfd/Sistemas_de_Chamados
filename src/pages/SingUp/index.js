import { useState } from 'react';
import { Link } from 'react-router-dom'; 

import logo from '../../assets/logo.png';
import '../SingIn/singin.css'


export default function SingUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (name !== '' && email !== '' && password !== ''){
            
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Logo da tela de cadastro'/>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Cadastre-se</h1>
                    <input 
                    type='text' 
                    placeholder='Nome'
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    />

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

                    <button type='submit' >Cadastrar</button>
                    
                </form>

                <Link to='/'>Ja possui uma conta? Faca Login</Link>

            </div>
        </div>
    )
}