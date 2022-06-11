export default function Label ({
    backgroundcolor, textcolor, width, height, text, size, alignText
}) {
    return (
        <p className={`${backgroundcolor || ''} ${textcolor || 'text-black'} ${width || 'w-8'} ${height || 'h-8'} ${size || 'text-4xl'} ${alignText || 'text-left'} font-bold`}> {text} </p>
    )
}