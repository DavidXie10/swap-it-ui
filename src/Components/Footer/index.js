import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function Footer({height}) {
    return (
        <div className={`w-full bg-[#2E2F2F] ${height || 'h-full'}`}>
            <div className={`flex sm:px-6 md:px-8 lg:px-16  items-center py-16`}>
                <div className='lg:w-1/3 flex md:w-2/3 sm:w-1/2' >
                    <Link to='/'>
                        <Logo height='lg:h-28 md:h-28 sm:h-[4.3rem]' width='lg:w-80 md:w-80 sm:w-44'/>
                    </Link>                
                </div>
                <div className='w-1/3 lg:flex md:flex sm:hidden'></div>
                <div className='w-1/3 lg:flex md:flex sm:hidden'></div>

                <div className='lg:w-1/3 flex md:w-2/3 flex-col justify-center sm:w-1/2'>   
                    <p className='text-white flex justify-end lg:text-xl md:text-xl sm:text-lg'>San Pedro, San José</p>
                    <p className='text-white lg:text-xl md:text-xl sm:text-lg flex justify-end'>2451-8181</p>
                    <p className='text-white lg:text-xl md:text-xl sm:text-lg flex justify-end'>8793-0495</p>
                    <a href='mailto:swapitecci@gmail.com' className='text-white lg:text-xl md:text-xl sm:text-lg flex justify-end'>swapitecci@gmail.com</a>
                </div>
            </div>
        </div>
    )
}