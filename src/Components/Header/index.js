import { useState } from 'react';
import { MdPermIdentity } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';	
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import UserMenu from '../UserMenu';
import CloseButton from '../CloseButton';
import {menuOptionClasses} from '../../utils/constants';
import { deleteLogout } from '../../Slices/user/requests/deleteLogout';
import Mixpanel from '../../services/mixpanel';

export default function Header({height}) {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const dispatch = useDispatch();	
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const userState = useSelector(
        (state) => state.user
    );

    return (
        <div className={`flex items-center justify-between ${height || 'h-16'} w-full bg-[#2E2F2F] sm:px-6 md:px-8 lg:px-16`}>
            <Link to='/' className='w-1/4'>
                <Logo height='h-12' width='w-34' />
            </Link>
            <nav className='lg:w-3/4 md:w-3/4'>
                <section className='flex lg:hidden md:hidden'>
                    <AiOutlineMenu onClick={() => setIsNavOpen((prev) => !prev)} className='h-8 w-8 cursor-pointer space-y-2 text-white hover:text-[#51e5ff] '/>

                    <div className={isNavOpen ? 'fixed bg-[#2E2F2F] w-full h-[100vh] top-0 left-0 z-10 flex flex-col justify-evenly items-center' : 'hidden'}>
                        <div
                            className='absolute top-0 right-0 px-8 py-8'
                            onClick={() => {
                                window.scrollTo(0, 0);
                                setIsNavOpen(false);
                            }}
                        >
                            <CloseButton width='w-8' height='h-8'/> 
                        </div>
                        <div className='flex flex-col items-center justify-between min-h-[250px] w-full'>
                            <div className='flex gap-2 items-center justify-center w-full border-y border-t-2 border-white py-5'>
                                <h1 className={`${menuOptionClasses}`}>
                                    <Link onClick={() => {
                                        setIsNavOpen(false)
                                        Mixpanel.track(Mixpanel.TYPES.GO_TO_CATALOG)
                                    }} to='/'>CATÁLOGO</Link>
                                </h1>                    
                            </div>
                            <div className='flex gap-2 items-center justify-center border-y w-full border-white py-5'>
                                <h1 className={`${menuOptionClasses}`}>
                                    <Link onClick={ () => setIsNavOpen(false)} to={`${isLoggedIn ? '/myItems' : '/login'}`}>MIS ARTÍCULOS</Link>
                                </h1>
                            </div>
                            {isLoggedIn ? (<><div className='flex gap-2 items-center justify-center border-y w-full border-white py-5'>
                                <h1 className={`${menuOptionClasses}`}>
                                    <Link onClick={() => {
                                        setIsNavOpen(false);
                                        Mixpanel.track(Mixpanel.TYPES.GO_TO_PROFILE)
                                    }} to='/profile'>MI PERFIL</Link>
                                </h1>
                            </div>
                            <div className='flex gap-2 items-center justify-center border-y border-b-2 w-full border-white py-5'>
                                <h1 className={`${menuOptionClasses}`} onClick={() => {
                                    dispatch(deleteLogout()); 
                                    Mixpanel.track(Mixpanel.TYPES.CLOSE_SESSION);
                                    }}>
                                    CERRAR SESIÓN
                                </h1>
                            </div> </>) :
                                <div className='flex gap-2 items-center justify-center border-y border-b-2 w-full border-white py-5'>
                                    <h1 className={`${menuOptionClasses}`}>
                                        <Link to='/login'>INICIAR SESIÓN</Link>
                                    </h1>
                                </div>}
                        </div>
                    </div>
                </section>

                <div className='hidden space-x-8 lg:flex md:flex w-full' >
                    <div className='flex gap-2 items-center justify-center w-1/3 '>
                        <h1 className={`${menuOptionClasses}`}>
                            <Link onClick={() => Mixpanel.track(Mixpanel.TYPES.GO_TO_CATALOG)} to='/'>CATÁLOGO</Link>
                        </h1> 
                    </div>
                    <div className='flex gap-2 items-center justify-end w-1/3'>
                        <h1 className={`${menuOptionClasses}`}>
                            <Link to={`${isLoggedIn ? '/myItems' : '/login'}`}>MIS ARTÍCULOS</Link>
                        </h1>
                    </div>
                    <div className='flex gap-2 items-center justify-end w-1/3'>
                        {isLoggedIn ? <p className='text-white'>{userState.user.fullName}</p> : <></>}
                        <MdPermIdentity
                            onClick={() => { 
                                Mixpanel.track(Mixpanel.TYPES.OPEN_USER_MENU); 
                                setShowUserMenu(true); 
                            }} className={`h-8 w-8 ${menuOptionClasses}`}/>
                        {showUserMenu && (
                            <div>
                                <div onClick={() => { setShowUserMenu(false); }} className='fixed top-0 left-0 h-full w-full cursor-pointer'></div>
                                <UserMenu /> 
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>  
    );
}