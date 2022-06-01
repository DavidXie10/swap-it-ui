import { useState } from 'react';
// import { useSelector } from "react-redux";
import { MdPermIdentity } from 'react-icons/md';
import {AiOutlineMenu, AiOutlineCloseCircle} from "react-icons/ai"
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import UserMenu from '../UserMenu';
import './index.css'

export default function Header() {
    const [showUserMenu, setShowUserMenu] = useState(false);
    //const userState = useSelector(
    //    (state) => state.user
    //);
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex items-center justify-between  h-16 w-full bg-[#2E2F2F] sm:px-6 md:px-8 lg:px-16">
            <Link to='/catalog' className='w-1/4'>
                <Logo height='h-12'/>
            </Link>
            <nav className='lg:w-3/4 md:w-3/4'>
                <section className="flex lg:hidden md:hidden">
                    <AiOutlineMenu onClick={() => setIsNavOpen((prev) => !prev)} className="h-8 w-8 cursor-pointer space-y-2 text-white hover:text-[#51e5ff] "/>

                    <div className={isNavOpen ? "showMenuNav bg-[#2E2F2F]" : "hideMenuNav" }>
                    <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <AiOutlineCloseCircle className="h-8 w-8 cursor-pointer hover:text-red-600 text-white"/>
                    </div>
                    <div className="flex flex-col items-center justify-between min-h-[250px]">
                        <li className='flex gap-2 items-center justify-center'>
                            <h1 className='cursor-pointer text-white hover:text-[#51e5ff] hover:font-bold'>
                                <Link to='/catalog'>CATÁLOGO</Link>
                            </h1>                    
                        </li>
                        <li className='flex gap-2 items-center justify-end'>
                            <h1 className='cursor-pointer text-white hover:text-[#51e5ff] hover:font-bold'>
                                <Link to='/my-products'>MIS ARTÍCULOS</Link>
                            </h1>
                        </li>
                        <li className='flex gap-2 items-center justify-end'>
                            <h1 className='cursor-pointer text-white hover:text-[#51e5ff] hover:font-bold'>
                                <Link to='/profile'>MI PERFIL</Link>
                            </h1>
                        </li>
                        <li className='flex gap-2 items-center justify-end'>
                            <h1 className='cursor-pointer text-white hover:text-[#51e5ff] hover:font-bold'>
                                <Link to='/logout'>CERRAR SESIÓN</Link>
                            </h1>
                        </li>
                    </div>
                    </div>
                </section>

                <ul className="hidden space-x-8 lg:flex md:flex w-full">
                    <li className='flex gap-2 items-center justify-center w-1/3'>
                        <h1 className='text-white cursor-pointer'>
                            <Link to='/catalog'>CATÁLOGO</Link>
                        </h1>                    
                    </li>
                    <li className='flex gap-2 items-center justify-end w-1/3'>
                        <h1 className='text-white cursor-pointer'>
                            <Link to='/my-products'>MIS ARTÍCULOS</Link>
                        </h1>
                    </li>
                    <li className='flex gap-2 items-center justify-end w-1/3'>
                        <p className='text-white'>Sol{/*userState.user.name*/}</p>
                            <MdPermIdentity onClick={() => { setShowUserMenu(true); }} className='h-8 w-8 cursor-pointer text-white' />
                            {showUserMenu && (
                                <div>
                                    <div onClick={() => { setShowUserMenu(false); }} className='fixed top-0 left-0 h-full w-full cursor-pointer'></div>
                                    <UserMenu /> 
                                </div>
                            )}
                    </li>
                </ul>
            </nav>
        </div>  
    );
}