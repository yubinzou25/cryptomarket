import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center my-5">
            <div className="flex flex-row w-full justify-between items-start">
                
                <div className="flex flex-row w-full justify-between">
                    {/* left side header contains Logo and Navbar*/}
                    <div className="flex flex-row items-start gap-10">
                        <Logo/>
                        <NavBar/>
                    </div>
                    {/* right side header contains menu and Login/SignUp Button*/}
                    <div className="flex flex-row items-start gap-4">
                        <Link className="hidden sm:block" to="#">Log in</Link>
                        <Link className="hidden sm:block" to="#">Sign up</Link>
                        <MenuButton/>
                    </div>
                </div>
                
                
            </div>
        </header>
    );
}
function Logo() {
    return (
        <Link to="/" className="text-lg"
            ><span className="font-semibold text-slate-800">DIGIF</span><span
            className="text-slate-500">INEX</span>
        </Link>
    );
}
function MenuButton(){
    return (
        <div className="block lg:hidden">
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentcolor"
            color="#0C0F0F"
            >
                <path 
                    d="M3.996 12h16m-16-6h16m-16 12h16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}


export default Header