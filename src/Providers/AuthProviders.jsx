import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const googleSingIn = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    const githubSingIn = () =>{
        return signInWithPopup(auth, githubAuthProvider)
    } 

    

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => {
            unSub()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        singIn,
        logOut,
        googleSingIn,
        githubSingIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;