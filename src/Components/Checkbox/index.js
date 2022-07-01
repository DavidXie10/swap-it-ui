export default function Checkbox({
    isChecked
}) {
    return (
        <input type='checkbox' defaultChecked={isChecked}></input>
    )
}