export default function Button ({
    backgroundcolor, textcolor, width, height, text, buttonFunction
}) {
    return (
        <button onClick={buttonFunction} className={`${backgroundcolor} ${textcolor} ${width || 'w-8'} ${height || 'h-8'}`}> {text} </button>
    )
}