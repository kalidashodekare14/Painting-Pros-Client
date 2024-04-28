import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContect = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)

    const provider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () =>{
        setLoader(true)
        return signOut(auth)
    }
    const googleSignIn = () =>{
        setLoader(true)
       return signInWithPopup(auth, provider)
    }
    const githubSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth, gitProvider)
    }

    const updateProfileSystem = (name, photoUrl) =>{
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL : photoUrl
        })
        .then(()=>{
            setUser({displayName: name, photoURL: photoUrl})
            setLoader(true)
        })
        .catch(()=>{
            // console.log(error.message)
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [user])

    const info = { user, registerUser, loginUser, updateProfileSystem, signOutUser, googleSignIn, githubSignIn, setUser, loader}

    return (
        <AuthContect.Provider value={info}>
            {children}
        </AuthContect.Provider>
    );
};

export default AuthProvider;