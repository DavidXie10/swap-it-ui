export default function Checkbox({
    id, name
}) {
    return (
        <input type='checkbox' id={`${id}`} name={`${name}`}></input>
    )
}