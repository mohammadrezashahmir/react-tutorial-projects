import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'
export const userContext = createContext()
function UserContextProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)
    const history = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            console.log(user);
            if (user) history('/chats/');
        })
    }, [user, history])
    return (
        <userContext.Provider value={user}>
            {!loading && children}
        </userContext.Provider>
    )
}

export default UserContextProvider;
