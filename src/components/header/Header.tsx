import { Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import LinkButton from '../util/LinkButton';

function Header() {
    const location = useLocation();
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
                    {location.pathname !== "/login" && location.pathname !== "/signup" &&
                        <div className="flex flex-row items-center gap-4">
                            <LinkButton to="/login" buttonText="Log in" primaryColor={false}/>
                            <LinkButton to="/signup" buttonText="Sign up" primaryColor={true}/>
                            <MenuButton/>
                        </div>
                    }
                </div>
                
                
            </div>
        </header>
    );
}
function Logo() {
    return (
        // To do need to refactor
        <Link to="/" className="text-lg"
        >
            <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url("/image/logo.svg")`,
                width: "200px",
                height: "40px",
            }}
            />
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