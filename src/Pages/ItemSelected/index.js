import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import Label from "../../Components/Label";

export default function MyItem ({
    images, title, state, address, acquisition, description, onClickEdit, onClickDelete
}) {
    return (
        <div>
            {/* TODO: Agregar Header y Footer */}
            {/* TODO: Agregar margen respecto a bordes */}
            {/* <div className="grid grid-flow-col gap-2 ">
                <Label text={"Artículo seleccionado"} width={'col-span-4'} heigh={'row-span-1'} textposition={'text-left'} font={'font-bold'}></Label>
                <BackButton width={'col-span-2'} heigh={'row-span-1'}></BackButton>
            </div> */}
            {/* <b/>
            <b/> */}
            <div className="grid grid-rows-7 grid-cols-5 gap-2">
                {/* Image carousel */}
                { images ? <img className="row-span-7 col-span-2 text-center" src={URL.createObjectURL(images)} alt={"Foto del artículo a intercambiar"}/> : <p className="row-span-7 col-span-2 text-center">Fotos no encontradas</p>}
                <Label text={title || "Title not found"} width={'col-span-3'} height={'row-span-2'} font={'font-bold'} textposition={'text-left'} ></Label>
                <Label text={`Estado: ${state || "State not found"}`} width={'col-span-3'} font={''} textposition={'text-left'}></Label>
                <Label text={`Ubicación: ${address || "Address not found"}`} width={'col-span-3'} font={''} textposition={'text-left'}></Label>
                <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} width={'col-span-3'} font={''} textposition={'text-left'}></Label>
                <Label text={`Descripción: ${description || "Desciption not found"}`} width={'col-span-3'} font={''} textposition={'text-left'}></Label>
                <Button width={'col-span-3'} height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Editar' onClick={onClickEdit || ''}/>
            </div>
        </div>
    )
}