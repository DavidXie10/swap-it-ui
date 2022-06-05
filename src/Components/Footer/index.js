import { Link } from "react-router-dom"
import Logo from "../Logo"

export default function Footer({height}) {
    return (
        <div className={`w-full bg-[#2E2F2F] `}>
            <div className={`flex sm:px-6 md:px-8 lg:px-16  items-center py-16`}>
                <div className="w-1/3 flex md:w-2/3 sm:w-2/3" >
                    <Link to='/catalog'>
                        <Logo height='h-15'/>
                    </Link>                
                </div>
                <div className="w-1/3 sm:hidden"></div>
                <div className="w-1/3"></div>

                <div className="flex flex-col justify-center ">   
                    <p className="text-white flex justify-end text-2xl justify-end0">San Pedro, San José</p>
                    <p className="text-white text-2xl flex justify-end">2451-8181</p>
                    <p className="text-white text-2xl flex justify-end">8793-0495</p>
                    <a href="mailto:swapitecci@gmail.com" className="text-white text-2xl flex justify-end">swapitecci@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
