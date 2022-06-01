import { AiOutlineCloseCircle} from "react-icons/ai"

export default function CloseButton({width, height, textColor}) {
    return (
        <AiOutlineCloseCircle className={`${width || "w-8"} ${height || "h-8"} cursor-pointer hover:text-red-600 ${textColor || "text-white"}`}/>
    )
}
