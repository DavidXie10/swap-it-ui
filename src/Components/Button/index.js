export default function Button ({
    backgroundcolor, textcolor, width, height, label, textSize, onClick, type
}) {
    return (
        <button type={`${type || ''}`} className={`${backgroundcolor || 'bg-[#51e5ff]'}  ${textcolor || 'text-[#051014]'} ${width || 'w-8'} ${height || 'h-8'} rounded-md px-8 font-bold ${textSize || 'text-lg'}`} onClick={onClick}> {label} </button>
    )
}
