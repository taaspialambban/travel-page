
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

// Google Diye sing Korar Jonno
const provider = new GoogleAuthProvider();

 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    const CreateLogin = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    };
    const singIn = (email , password) => {
        setLoading (true);
        return signInWithEmailAndPassword (auth , email , password);
    };

    const singInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup (auth , provider)
    };

    const singOut = () =>{
        setLoading(true)
        return signOut(auth) ;
    }

    useEffect (()=>{
        const unSubscribe = onAuthStateChanged (auth , currentUser =>{
            console.log('current value of the current user' , currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[]);

    const authInfo = {
        loading,
        user,
        CreateLogin,
        singIn,
        singInWithGoogle,
        singOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;