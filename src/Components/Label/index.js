export default function Label ({
    backgroundcolor, textcolor, width, height, text, size, textposition, font
}) {
    return (
        <p className={`${backgroundcolor || 'bg-white'} ${textcolor || 'text-black'} ${width || 'w-8'} ${height || 'h-8'} ${size || 'text-lg'} ${textposition || 'text-center'} ${font || ''}`}> {text || 'Default'} </p>
    )
}