export default function Label ({
    backgroundcolor, textcolor, width, height, text, size, textalign, font
}) {
    return (
        <p className={`${backgroundcolor || 'bg-white'} ${textcolor || 'text-black'} ${width || 'w-8'} ${height || 'h-8'} ${size || 'text-4xl'} ${textalign || 'text-left'} ${font || 'font-bold'}`}> 
            {text || 'Default'} 
        </p>
    )
}