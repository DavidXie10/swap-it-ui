import { useState } from 'react';
// import { useSelector } from "react-redux";
import { MdPermIdentity } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import UserMenu from '../UserMenu';

export default function Header() {
    const [showUserMenu, setShowUserMenu] = useState(false);
    //const userState = useSelector(
    //    (state) => state.user
    //);

    return (
        <div className={'flex h-16 w-full bg-[#2E2F2F] sm:px-4 md:px-8 lg:px-16'}>
            <div className='flex gap-2 items-center w-1/4'>
                <Logo height='h-12'/>
            </div>
            <div className='flex gap-2 items-center justify-center w-1/4'>
                <h1 className='text-white cursor-pointer'>
                    <Link to='/catalog'>CATÁLOGO</Link>
                </h1>
            </div>
            <div className='flex gap-2 items-center justify-end w-1/4'>
                <h1 className='text-white cursor-pointer'>
                    <Link to='/my-products'>MIS ARTÍCULOS</Link>
                </h1>
            </div>
            <div className='flex gap-2 items-center justify-end w-1/4'>
                <p className='text-white'>Sol{/*userState.user.name*/}</p>
                <MdPermIdentity onClick={() => { setShowUserMenu(true); }} className='h-8 w-8 cursor-pointer text-white' />
                {showUserMenu && (
                    <div>
                        <div onClick={() => { setShowUserMenu(false); }} className='fixed top-0 left-0 h-full w-full cursor-pointer'></div>
                        <UserMenu /> 
                    </div>
                )}
            </div>
        </div>
    )
}