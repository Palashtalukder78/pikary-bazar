import FirebaseAuthentication from '../components/Login/Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
FirebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([])
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(true)

    const googleLogin = (navigate, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                const redirect_url = location?.state?.from || '/dashboard'
                navigate(redirect_url)
                swal("Welcome!", "Login Successfully!", "success");
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth])

    const logout = (navigate) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            navigate('/home')
            swal("Good job!", "Logout Successfully!", "success");
        }).catch((error) => {
            console.log('Logout Error');
        })
            .finally(() => setIsLoading(false))
    }
    return {
        googleLogin,
        user,
        logout,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;