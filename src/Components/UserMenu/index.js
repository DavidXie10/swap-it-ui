import Mixpanel from '../../services/mixpanel';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Slices/user/userSlice';	

export default function UserMenu(){
    const dispatch = useDispatch();	
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const navigate = useNavigate();

    return (
        <div className='bg-white fixed right-20 top-16 h-auto w-[200px] rounded shadow py-2 divide-y divide-gray-100'>
            {
                isLoggedIn ? (<>
                    <div className='py-2 pl-4 hover:bg-gray-100'>
                        <Link to='/profile' className='text-[#2E2F2F] cursor-pointer'>                
                            <p className=''>Mi Perfil</p>
                        </Link>
                    </div>
                    <div className='py-2 pl-4 hover:bg-gray-100'>
                        <p className='text-[#2E2F2F] cursor-pointer' onClick={() => {dispatch(logout());Mixpanel.track(Mixpanel.TYPES.CLOSE_SESSION);}}>
                            Cerrar Sesión
                        </p>
                    </div>
                </>) : (<>
                    <div className='py-2 pl-4 hover:bg-gray-100'>
                        <p className='text-[#2E2F2F] cursor-pointer' onClick={() => navigate('/login')}>
                            Iniciar Sesión
                        </p>
                    </div>
                </>)
            }
        </div>
    )
}