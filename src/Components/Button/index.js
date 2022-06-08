export default function Button ({
    backgroundcolor, textcolor, width, height, label, textSize
}) {
    return (
        <button className={`${backgroundcolor || 'bg-[#51e5ff]'}  ${textcolor || 'text-[#051014]'} ${width || 'w-8'} ${height || 'h-8'} rounded-md px-8 font-bold ${textSize || 'text-lg'}`}> {label} </button>
    )
}
