import { useState } from 'react';
import { RiEyeLine, RiEyeCloseLine, RiSearch2Line } from 'react-icons/ri';

export default function Input({
    id, placeholder, type, value, passwordState, width, height, onChange, marginBottom, onClick
}) {
    const [showPassword, setShowPassword] = useState(passwordState || false);
    const toggleSetPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='relative w-full'>
            <input 
                id={id || ''} 
                type={type === "password" && showPassword ? "text" : type || "text"} 
                defaultValue={value}
                placeholder={placeholder || ''} 
                className={`${width || "w-full"} ${height || "h-10"} px-4 ${marginBottom || "mb-5"} rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600`}
                onChange={onChange}
            />
            {type === 'password' && (
                <div className={`cursor-pointer absolute w-12 h-12 top-3 -right-4`}>
                    {showPassword ? (
                        <RiEyeLine className='text-xl' onClick={toggleSetPassword} />
                    ) : (
                        <RiEyeCloseLine className='text-xl' onClick={toggleSetPassword} />
                    )}
                </div>
            )}
            {type === 'search' && (
                <div className={`cursor-pointer absolute w-12 h-12 top-[10px] -right-4`}>
                    <RiSearch2Line className='text-xl' onClick={onClick}/>
                </div>
            )}
        </div>
    )
}