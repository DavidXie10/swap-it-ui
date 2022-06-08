import Logo from '../../Components/Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Button';
import { useState } from 'react';

export default function Login() {
    const containerClases = "flex w-full justify-center flex-wrap";
    const [localErrorMessage, setLocalErrorMessage] = useState("");

    return (
  <div className={`pt-[20vh] ${containerClases} bg-[#2e2f2f] h-screen w-screen`}>
            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[10vh] lg:mb-2 md:mb-4 sm:mb-7`}>
                <Logo height='lg:h-[150px] md:h-[150px] sm:h-[140px]' width='lg:w-[360px] md:w-[360px] sm:w-[340px]'/>
            </div>
            <div className='lg:h-[15vh] md:h-[20vh] sm:h-[10vh]'> 
                <div className={`${containerClases} w-[360px]`}>
                    <Input id='user' placeholder='Ingrese su usuario' type='text' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'}/>
                </div>
                <div className={`${containerClases} w-[360px]`}>
                    <Input id='password' placeholder='Ingrese su contraseña' type='password' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} eyeTopPosition='top-3' />
                </div>
            </div>

            <div className={`flex w-full justify-center`}>
                {localErrorMessage && <span className="text-red-500 sm:mt-4">{localErrorMessage}</span>}
            </div>

            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[15vh]`}>
                <Button width='w-[360px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Ingresar' />
            </div>
        </div>    
    )
}