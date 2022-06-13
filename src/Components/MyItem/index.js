import Label from "../Label";

export default function MyItem ({
    image, title, state, address, acquisition, searchFor
}) {
    return (
        <div>
            <img src={URL.createObjectURL(image) || console.log("image not found")} alt={"Foto del artículo a intercambiar"} width={'200px'} height={'80px'} />
            <Label backgroundcolor={} textcolor={} width={} height={} text={} size={}></Label>
        </div>
    )
}
