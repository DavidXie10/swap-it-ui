import { IoChevronBack } from 'react-icons/io5';

export default function BackButton({
    width, height, onClick
}) {
    return (
        <IoChevronBack className={`${width || "w-5"} ${height || "h-5"} cursor-pointer`} onClick={onClick || ''}/>
    )
}