import React, { createContext, useState, useContext } from 'react';

const userContext = createContext();

export default function UserProvider({ children }) {

    const [user, setUser] = useState({
        id: 0,
        nome: "",
        email: "",
        password: "",
        logado: false,
    });

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
}


export function useUser() {
    const context = useContext(userContext);
    const {user,setUser} = context;

    return {user,setUser}
}