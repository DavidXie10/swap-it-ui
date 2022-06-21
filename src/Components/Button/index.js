export default function Button ({
    backgroundcolor, textcolor, width, height, label, textSize, onClick
}) {
    return (
        <button className={`${backgroundcolor || 'bg-[#51e5ff]'}  ${textcolor || 'text-[#051014]'} ${width || 'w-8'} ${height || 'h-8'} rounded-md px-8 font-bold text-center ${textSize || 'text-lg'}`} onClick={onClick}> {label} </button>
    )
}
