import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContect = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])

    const provider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () =>{
        return signOut(auth)
    }
    const googleSignIn = () =>{
       return signInWithPopup(auth, provider)
    }
    const githubSignIn = () =>{
        return signInWithPopup(auth, gitProvider)
    }

    const updateProfileSystem = (name, photoUrl) =>{
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL : photoUrl
        })
        .then(()=>{
            setUser({displayName: name, photoURL: photoUrl})
        })
        .catch(()=>{
            // console.log(error.message)
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [user    ])

    const info = { user, registerUser, loginUser, updateProfileSystem, signOutUser, googleSignIn, githubSignIn, setUser}

    return (
        <AuthContect.Provider value={info}>
            {children}
        </AuthContect.Provider>
    );
};

export default AuthProvider;