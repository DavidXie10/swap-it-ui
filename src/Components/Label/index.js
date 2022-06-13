export default function Label ({
    backgroundcolor, textcolor, width, height, text, size
}) {
    return (
        <p className={`${backgroundcolor || 'bg-white'} ${textcolor || 'text-black'} ${width || 'w-8'} ${height || 'h-8'} ${size || 'text-lg'} text-center font-bold`}> {text || 'Default'} </p>
    )
}