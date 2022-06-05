export default function Label ({
    backgroundcolor, textcolor, width, height, text, size
}) {
    return (
        <p className={`${backgroundcolor} ${textcolor} ${width || 'w-8'} ${height || 'h-8'} ${size} text-center font-bold`}> {text} </p>
    )
}