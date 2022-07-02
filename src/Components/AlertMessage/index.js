import React from 'react'
import { Link } from 'react-router-dom'
import { RiCloseCircleLine } from 'react-icons/ri';

export default function AlertMessage({message, bottonMessage, success, linkToButton, buttonType, onClick}) {
    return (
    <>
        <div className='p-8 w-full sm:px-6 md:px-8 lg:px-16'>
            <div className={`sm:px-6 md:px-8 lg:px-16 flex p-4 text-sm ${success ? 'text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800' : 'text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'}`} role="alert">
                <div className='flex w-11/12'>
                    <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <div>
                        <span className="font-medium">{message || 'Mensaje'}</span> 
                    </div>
                </div>
                {buttonType === 'close'? (
                    <div className={`cursor-pointer  ${success ?'text-green-700 dark:text-green-800' : 'text-red-700 dark:text-red-800'}`}>
                        <RiCloseCircleLine className='text-xl' onClick={onClick} />
                    </div>
                    ):<></>
                }
            </div>
            
        </div>

        {buttonType === 'back'? (
            <div className='sm:px-6 md:px-8 lg:px-16 flex p-4 justify-end'>
                <button className={`flex bg-[#51e5ff] text-white w-80 h-12 rounded-md font-bold text-lg`}> 
                    <Link to={`${linkToButton || '/catalog'}`} className='flex w-full h-full flex-col justify-center'>
                        {bottonMessage || 'Regresar al catálogo'} 
                    </Link>
                </button>
            </div>
            ):<></>
        }
    </>
)
}
