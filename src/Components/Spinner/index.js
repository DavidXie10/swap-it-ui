import React from 'react'

export default function Spinner() {
    return (
        <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
        </div> 
    )
}
