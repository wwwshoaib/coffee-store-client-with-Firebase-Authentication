import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        loading,
        createUser,  
        signInUser,


    }
    return (
        <div>
            <AuthContext.Provider value ={userInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;