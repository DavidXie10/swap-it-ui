export default function Button ({
    backgroundcolor, buttonText
}) {
    return (
        <button className="bg-{backgroundcolor}"> {buttonText} </button>
    )
}