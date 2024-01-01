import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function singIn(email, password){
        console.log(email)
        console.log(password)
        alert('Logado com Sucesso')
    }

    return(
        <AuthContext.Provider value={{
            singned: !!user,
            user,
            singIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;