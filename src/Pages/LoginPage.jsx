import React, {useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../actions/auth";
import Loader from "../components/Loader";
import { AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

function LoginPage(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // const SignUp = () => {
    //     createUserWithEmailAndPassword(auth, email, password).then((res) => {
    //         const user = res.user;
    //         localStorage.setItem("token", user.getIdToken);
    //         alert("Signup Successfull");
    //     }).catch((err) => {
    //         const error = err.message;
    //         console.log(error);
    //         alert("Something Went Wrong");
    //     });
    // }

    const SignIn = () => {
        if(!email || !password) return alert('Enter email and password');
        setIsLoading(true)
        dispatch(login({email, password}, navigate, setIsLoading));
    }

    return(
        <div className="flex justify-center items-center min-h-[100vh]">
            {
                isLoading ? 
                <Loader /> :
                <></>
            }
            <div className="w-[320px] h-[370px] rounded-md overflow-hidden bg-red">
                <div className="px-[25px] py-[50px] flex flex-col">
                    <h2 className="font-bold text-[1.5rem] text-center leading-[0.1rem]">Login</h2>
                    <div className="inputBox">
                    <input className="" 
                    type="email"
                     onChange={(e) => {
                     setEmail(e.target.value);
                     }}
                    name="email" id="input_email" required/>
                    <span>Username</span>
                    <i></i>
                    </div>
                    <div className="inputBox">
                    <input type={`${showPassword ? 'text' : 'password'}`}
                     onChange={(e) => {
                     setPassword(e.target.value);
                     }}
                    name="password" id="input_password" required/>
                    <span>Password</span>
                    <i></i>
                    </div>
                    <div className="pt-[8px]">
                    {
                        showPassword ? 
                        <AiFillEye
                        className="text-[1.3rem]"
                       onClick={() => {
                        setShowPassword(false);
                       }}
                       />
                         : 
                       <AiFillEyeInvisible
                       className="text-[1.3rem]"
                        onClick={() => {
                        setShowPassword(true);
                        }}
                       />
                    }
                    </div>

                    <button
                     onClick={SignIn}
                     className="btn w-[100px]">Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;