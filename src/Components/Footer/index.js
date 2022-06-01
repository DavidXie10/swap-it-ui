import { Link } from "react-router-dom"
import Logo from "../Logo"

export default function Footer({height}) {
    return (
        <div className={`w-full bg-[#2E2F2F] `}>
            <div className={`flex sm:px-6 md:px-8 lg:px-16  items-center py-16`}>
                <div className="w-1/2 flex" >
                    <Link to='/catalog'>
                        <Logo height='h-15'/>
                    </Link>                
                </div>
                <div className="w-1/2 flex flex-col justify-center ">   
                    <p className="text-white flex justify-end text-2xl right-0">San Pedro, San José</p>
                    <a href="tel:+50624518181" className="text-white text-2xl flex justify-end">2451-8181</a>
                    <a href="tel:+50687930495" className="text-white text-2xl flex justify-end">8793-0495</a>
                    <a href="mailto:swapitecci@gmail.com" className="text-white text-2xl flex justify-end">swapitecci@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
