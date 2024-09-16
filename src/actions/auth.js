import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { setCurrentUser } from "./currentUser";

export const signUp = ({email, password}, setIsLoading, navigate) => async(dispatch) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
        const user = res.user;
        const data = user.getIdToken;
        dispatch({type: 'AUTH', data});
        dispatch(setCurrentUser(localStorage.getItem('token')));
        setIsLoading(false);
        navigate('/');
    }).catch((err) => {
        console.log(err);
        setIsLoading(false);
    })
}

export const login = ({email, password}, navigate, setIsLoading) => async(dispatch) => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
        const user = res.user;
        const data = user.getIdToken;
        dispatch({type: 'AUTH', data});
        dispatch(setCurrentUser(localStorage.getItem('token')));
        setIsLoading(false);
        navigate('/upload');
    }).catch((err) => {
        const error = err.message;
        console.log(error);
        setIsLoading(false);
        // setLoginError('Something went wrong');
    });
}

export const logout = (navigate) => async(dispatch) => {
    signOut(auth).then((res) => {
        dispatch({type: 'LOGOUT'});
        navigate('/');
    }).catch((err) => {
        console.log(err);
    })
}