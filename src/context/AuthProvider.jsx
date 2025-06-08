import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const storedEmployees = localStorage.getItem('employees')
    const initialEmployees = storedEmployees ? JSON.parse(storedEmployees) : []

    const [userData, setUserData] = useState(initialEmployees)

    useEffect(() => {
        if(userData && userData.length >= 0){
      localStorage.setItem('employees', JSON.stringify(userData))
    }
    }, [userData])


    // const data = getLocalStorage()
    // console.log(data)

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider