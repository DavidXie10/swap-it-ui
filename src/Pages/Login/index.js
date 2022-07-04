import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { postLogin } from '../../Slices/user/requests/postLogin';
import Logo from '../../Components/Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Button';

export default function Login() {
    const containerClases = 'flex w-full justify-center flex-wrap';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [localErrorMessage, setLocalErrorMessage] = useState('');
    
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);

    const isValidEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
      
    const dispatch = useDispatch();

    return isLoggedIn ? (
        <Navigate to='/'/>
    ) : (
  <div className={`pt-[20vh] ${containerClases} bg-[#2e2f2f] h-screen w-screen`}>
            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[10vh] lg:mb-2 md:mb-4 sm:mb-7`}>
                <Logo height='lg:h-[150px] md:h-[150px] sm:h-[140px]' width='lg:w-[360px] md:w-[360px] sm:w-[340px]'/>
            </div>
            <div className='lg:h-[15vh] md:h-[20vh] sm:h-[10vh]'> 
                <div className={`${containerClases} w-[360px]`}>
                    <Input id='user' placeholder='Ingrese su correo' type='email' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} customMessage={'Ingrese una dirección de correo válida'} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className={`${containerClases} w-[360px]`}>
                    <Input id='password' placeholder='Ingrese su contraseña' type='password' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} onChange={(event) => setPassword(event.target.value)} />
                </div>
            </div>

            <div className={`flex w-full justify-center`}>
                {errorMessage && <span className='text-red-500 sm:mt-4'>{errorMessage}</span>}
            </div>
            <div className={`flex w-full justify-center`}>
                {localErrorMessage && <span className='text-red-500'>{localErrorMessage}</span>}
            </div>

            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[15vh]`}>
                <Button width='w-[360px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Ingresar' onClick={() => {
                    if(email && password){
                        if(password.length < 8) {
                            setLocalErrorMessage('La contraseña debe contener mínimo 8 caracteres');
                        } else if(!isValidEmail(email)){
                            setLocalErrorMessage('Ingrese una dirección de correo válida');
                        } else{
                            setLocalErrorMessage('');
                            dispatch(postLogin({email, password}));
                        }
                    }else{
                        setLocalErrorMessage('Debe completar todos los campos');
                    }
                }}/>
            </div>
        </div>    
    )
}