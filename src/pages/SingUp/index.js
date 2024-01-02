import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; 

import logo from '../../assets/logo.png';
import '../SingIn/singin.css'
import { AuthContext } from '../../contexts/auth';

export default function SingUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { singUp, loadingAuth } = useContext(AuthContext);

    async function handleSubmit(event) {
        event.preventDefault();
        if (name !== '' && email !== '' && password !== ''){
            await singUp(email, password, name);
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

                    <button type='submit' >{ loadingAuth ? 'Carregando' : 'Cadastrar'}</button>
                    
                </form>

                <Link to='/'>Ja possui uma conta? Faca Login</Link>

            </div>
        </div>
    )
}