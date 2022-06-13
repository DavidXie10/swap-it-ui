
export default function Category({
    id, name, icon, onClick
}) {
    return (
        <div 
        id={id} 
        className='flex bg-[#2E2F2F] py-0.5 px-2 hover:bg-[#7E868F] border-black rounded-lg cursor-pointer' 
        onMouseOver={() => document.getElementById(`icon-${id}`).classList.add('bg-[#51E5FF]')} 
        onMouseLeave={() => document.getElementById(`icon-${id}`).classList.remove('bg-[#51E5FF]')}
        onClick={onClick || ''}
        >   
            {icon} 
            <p className='text-white text-xs'> 
                {name}
            </p>
        </div>
    )
} 