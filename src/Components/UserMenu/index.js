import Mixpanel from '../../services/mixpanel';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteLogout } from '../../Slices/user/requests/deleteLogout';

export default function UserMenu(){
    const dispatch = useDispatch();	
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const navigate = useNavigate();

    return (
        <div className='bg-white right-20 top-16 h-auto w-[200px] rounded shadow py-2 divide-y divide-gray-100 absolute'>
            {
                isLoggedIn ? (<>
                    <div className='py-2 pl-4 hover:bg-gray-100'>
                        <Link onClick={() => Mixpanel.track(Mixpanel.TYPES.GO_TO_PROFILE)} to='/profile' className='text-[#2E2F2F] cursor-pointer'>                
                            <p className=''>Mi Perfil</p>
                        </Link>
                    </div>
                    <div className='py-2 pl-4 hover:bg-gray-100'>
                        <p className='text-[#2E2F2F] cursor-pointer' onClick={() => {
                            dispatch(deleteLogout());
                            Mixpanel.track(Mixpanel.TYPES.CLOSE_SESSION);
                            }}>
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