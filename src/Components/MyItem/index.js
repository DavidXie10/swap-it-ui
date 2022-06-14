import Label from "../Label";

export default function MyItem ({
    image, title, state, address, acquisition, searchFor
}) {
    return (
        <div className="grid grid-rows-6 grid-flow-col gap-4">
            <img className="row-span-6 text-center align-middle" src={console.log("image not found")} alt={"Foto del artículo a intercambiar"} />
            <Label text={title || "Title not found"} width={'col-span-2'} height={'row-span-2'} font={'font-bold'} textposition={'text-left'} ></Label>
            <Label text={`Estado: ${state || "State not found"}`} width={'col-span-2'} font={''} textposition={'text-left'}></Label>
            <Label text={`Ubicación: ${address || "Address not found"}`} width={'col-span-2'} font={''} textposition={'text-left'}></Label>
            <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} width={'col-span-2'} font={''} textposition={'text-left'}></Label>
            <Label text={`Busco: ${searchFor || "SearchFor not found"}`} width={'col-span-2'} font={''} textposition={'text-left'}></Label>
        </div>
    )
}
