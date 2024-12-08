
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {

    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: ''
    })


    function registerOnSubmit(){
        
    }

    return <AuthContext.Provider value={{ registerFormData, setRegisterFormData, registerOnSubmit }}>
        {children}
        </AuthContext.Provider>
}