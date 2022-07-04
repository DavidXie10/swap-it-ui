import { IoChevronBack } from 'react-icons/io5';

export default function BackButton({
    width, height, onClick
}) {
    return (
        <IoChevronBack className={`${width || "w-10"} ${height || "h-10"} cursor-pointer hover:text-[#51e5ff]`} onClick={onClick || ''}/>
    )
}