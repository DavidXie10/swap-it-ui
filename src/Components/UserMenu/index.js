import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../Slices/user/userSlice';	

export default function UserMenu(){
    const dispatch = useDispatch();	

    return (
        <div className='bg-white fixed right-20 top-16 h-auto w-[200px] rounded shadow py-2 divide-y divide-gray-100'>
            <div className='py-2 pl-4 hover:bg-gray-100'>
                <p className='text-[#2E2F2F] cursor-pointer'>
                    <Link to='/profile'>Mi Perfil</Link>
                </p>
            </div>
            <div className='py-2 pl-4 hover:bg-gray-100'>
                <p className='text-[#2E2F2F] cursor-pointer' onClick={() => dispatch(logout())}>
                    Cerrar Sesión
                </p>
            </div>
        </div>
    
    )
}