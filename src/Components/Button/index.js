export default function Button ({
    backgroundcolor, textcolor, width, height, buttonText
}) {
    return (
        <button className={`bg-[${backgroundcolor}] text-${textcolor} ${width || 'w-8'} ${height || 'h-8'}`}> {buttonText} </button>
    )
}