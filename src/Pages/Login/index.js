import Logo from '../../Components/Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { postLogin } from '../../Slices/user/requests/postLogin';

export default function Login() {
    const containerClases = "flex w-full justify-center flex-wrap";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [localErrorMessage, setLocalErrorMessage] = useState('');
    
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);

    const dispatch = useDispatch();

    // TODO: Change showcase route
    return isLoggedIn ? (
        <Navigate to='/showcase'/>
    ) : (
  <div className={`pt-[20vh] ${containerClases} bg-[#2e2f2f] h-screen w-screen`}>
            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[10vh] lg:mb-2 md:mb-4 sm:mb-7`}>
                <Logo height='lg:h-[150px] md:h-[150px] sm:h-[140px]' width='lg:w-[360px] md:w-[360px] sm:w-[340px]'/>
            </div>
            <div className='lg:h-[15vh] md:h-[20vh] sm:h-[10vh]'> 
                <div className={`${containerClases} w-[360px]`}>
                    <Input id='user' placeholder='Ingrese su usuario' type='text' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className={`${containerClases} w-[360px]`}>
                    <Input id='password' placeholder='Ingrese su contraseña' type='password' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} onChange={(event) => setPassword(event.target.value)} />
                </div>
            </div>

            <div className={`flex w-full justify-center`}>
                {errorMessage && <span className="text-red-500 sm:mt-4">{errorMessage}</span>}
                {localErrorMessage && <span className="text-red-500 sm:mt-4">{localErrorMessage}</span>}
            </div>

            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[15vh]`}>
                <Button width='w-[360px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Ingresar' onClick={() => {
                    if(username && password){
                        if(password.length < 4) {
                            setLocalErrorMessage('La contraseña debe contener al menos 4 dígitos.');
                        }else{
                            setLocalErrorMessage('');
                            dispatch(postLogin({username, password}));
                        }
                    }else{
                        setLocalErrorMessage('Debe completar todos los campos');
                    }
                }}/>
            </div>
        </div>    
    )
}