import Logo from '../../Components/Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Button';

export default function Login() {
    const containerClases = "flex w-full justify-center flex-wrap";

    return (
        <div className={`pt-[20vh] ${containerClases} bg-[#2e2f2f]  h-screen`}>
            <div className={`${containerClases} h-20`}>
                <Logo height='h-15'/>
            </div>
            <div className='h-10'> 
                <div className={`${containerClases} w-[350px]`}>
                    <Input id='user' placeholder='Ingrese su usuario' type='text' />
                </div>
                <div className={`${containerClases} w-[350px]`}>
                    <Input id='password' placeholder='Ingrese su contraseña' type='password' />
                </div>
            </div>
            <div className={`${containerClases} hidden`}>
                <p className={`text-red-500`} id="errorMessage">
                    Usuario o contraseña incorrectas
                </p>
            </div>
            <div className={`${containerClases} h-50`}>
                <Button width='w-[350px]' height='h-[40px]' label='Ingresar' />
            </div>
        </div>
    )
}
