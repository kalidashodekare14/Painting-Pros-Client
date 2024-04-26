import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContect = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])


    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () =>{
        return signOut(auth)
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
    }, [])

    const info = { user, registerUser, loginUser, updateProfileSystem, signOutUser }

    return (
        <AuthContect.Provider value={info}>
            {children}
        </AuthContect.Provider>
    );
};

export default AuthProvider;