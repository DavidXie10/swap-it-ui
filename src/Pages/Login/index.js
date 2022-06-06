import Logo from '../../Components/Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Button';

export default function Login() {
    const containerClases = "flex w-full justify-center flex-wrap";

    return (
        <div className={`pt-[20vh] ${containerClases} bg-[#2e2f2f]  h-screen w-screen`}>
            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[20vh]`}>
                <Logo height='lg:h-15 md:h-15 sm:h-50' width='lg:w-[360px] md:w-[360px] sm:w-30'/>
            </div>
            <div className='lg:h-[15vh] md:h-[15vh] sm:h-[12vh]'> 
                <div className={`${containerClases} w-[350px]`}>
                    <Input id='user' placeholder='Ingrese su usuario' type='text' />
                </div>
                <div className={`${containerClases} w-[350px]`}>
                    <Input id='password' placeholder='Ingrese su contraseña' type='password' />
                </div>
            </div>
            <div className={`${containerClases} hidden lg:h-[5vh] md:h-[5vh] sm:h-[2vh]`}>
                <p className={`text-red-500`} id="errorMessage">
                    Usuario o contraseña incorrectas
                </p>
            </div>
            <div className={`${containerClases} lg:h-[20vh] md:h-[20vh] sm:h-[30vh]`}>
                <Button width='w-[350px]' height='h-[40px]' label='Ingresar' />
            </div>
        </div>
    )
}
