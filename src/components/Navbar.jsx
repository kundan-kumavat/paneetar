import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { navlinks } from "../constants";
import { ref } from "firebase/storage";
import { HashLink } from 'react-router-hash-link';
import { logout } from "../actions/auth";
import { useDispatch } from "react-redux";
import { RxCross2 } from 'react-icons/rx';
import {FiMenu} from 'react-icons/fi';

function Navbar() {

    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
 
    const navigate = useNavigate();

    const SignOut = () => {
        // signOut(auth).then((res) => {
        //     alert("Logout Successfull");
        //     localStorage.setItem("admin", false);
        //     navigate('/');
        // }).catch((err) => {
        //     const error = err.message;
        //     console.log(error);
        //     alert("Something Went Wrong");
        // });
        dispatch(logout(navigate));
    }

    return(
        <div className="md:px-[3rem] px-[1rem] py-[1rem] flex flex-row justify-between fixed w-full bg-primary border-b-[1px] border-[rgba(0,0,0, 0.8)] z-[100] text-[1.2rem]">
            <div className="text-gradient text-[1.5rem] font-bold font-aclonica cursor-pointer">
                <Link to={'/'}>
                Paneetar
                </Link>
            </div>
            <div className="items-center sm:flex hidden">
                {
                    navlinks.map((navLink, i) => (
                        <HashLink
                        key={i}
                        smooth to={`/#${navLink.id}`}>
                        <button
                        className="ml-[2rem] hover:text-button font-normal"
                        >
                            {navLink.title}
                        </button>
                        </HashLink>
                    ))
                }
            </div>

            {
                localStorage.getItem("token") ? 
                <div id="logout" className="nav-links flex sm:flex hidden items-center">
                    <button
                     onClick={() => {
                    SignOut();
                   }}>Logout</button>
                   <Link to="/upload">
                   <button className="ml-[1rem] flex">Upload</button>
                   </Link>
                </div>
                :
                <button
                className="sm:block hidden"
                onClick={() => {
                    localStorage.setItem("admin", true);
                    navigate('/login')
                }}>Admin Login</button>
            }

            <div className="sm:hidden flex flex-1 justify-end items-center z-[100]">

                <FiMenu
                onClick={() => {
                    setToggle(true)
                }}
                className={`${toggle ? 'hidden' : 'flex' } h-[1.3rem] w-auto object-contain`}
                alt="menu icon" />

                <div
                 className={`${toggle ? 'translate-x-[0]' : 'translate-x-[-100%]'} py-6 px-8 bg-primary absolute left-0 top-[0] h-[100vh] w-[200px] border-[1px] border-[#6a6b6a] sidebar`}
                >
                    <div className="flex w-full justify-end">
                    <RxCross2
                     onClick={() => {
                        setToggle(false);
                     }}
                    />
                    </div>
                    <ul className="list-none flex flex-col flex-1">
                        {
                            navlinks.map((navLink, index) => (
                                <HashLink
                                 key={index}
                                to={`/#${navLink.id}`}>
                                <li
                                key={navLink.id}
                                className={`font-normal cursor-pointer mb-6`}>
                                        {navLink.title}
                                </li>
                                </HashLink>
                            ))
                        }

                        {
                         localStorage.getItem("token") ? 
                         <div id="logout" className="nav-links flex flex-col font-normal">

                          <Link to="/upload">
                            <button>Upload</button>
                          </Link>   
                         <button
                         onClick={() => {
                          SignOut();
                          }}
                          className="mt-[1.5rem] flex">Logout</button>
                         </div>
                         :
                          <button
                            className="sm:hidden flex"
                            onClick={() => {
                            localStorage.setItem("admin", true);
                            navigate('/login')
                           }}>Admin Login</button>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;