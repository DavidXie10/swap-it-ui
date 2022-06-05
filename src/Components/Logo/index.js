
export default function Logo({width, height}) {
    return (
        <img 
            src={require("../../Assets/logo.png")}
            alt='Page logo' 
            className={`${width || "w-50"} ${height || "h-10"}`}
        />
    )
}