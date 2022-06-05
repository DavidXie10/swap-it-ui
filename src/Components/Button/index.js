export default function Button ({
    backgroundcolor, textcolor, width, height, text
}) {
    return (
        <button className={`${backgroundcolor} ${textcolor} ${width || 'w-8'} ${height || 'h-8'}`}> {text} </button>
    )
}