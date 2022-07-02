export default function Checkbox({
    isChecked, onClick
}) {
    return (
        <input type='checkbox' defaultChecked={isChecked} onClick={onClick}></input>
    )
}