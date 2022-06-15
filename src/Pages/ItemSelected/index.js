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
            <div className="flex flex-row">
                <Label text={"Artículo seleccionado"} width={'basis-3/4'} textposition={'text-left'} font={'font-bold'} size={'text-4xl'}></Label>
                <BackButton width={'basis-1/4'}></BackButton>
            </div>
            {/* <b/>
            <b/> */}
            <div className="grid grid-rows-6 grid-cols-5 gap-2 ">
                {/* Image carousel */}
                { images ? <img className="row-span-6 col-span-2 text-center" src={URL.createObjectURL(images)} alt={"Foto del artículo a intercambiar"}/> : <p className="row-span-6 col-span-2 text-center mb-4">Fotos no encontradas</p>}
                <Label text={title || "Title not found"} width={'col-span-3'} height={'row-span-1'} font={'font-bold'} textposition={'text-left'} size={'text-4xl'}></Label>
                <Label text={`Estado: ${state || "State not found"}`} width={'col-span-3'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                <Label text={`Ubicación: ${address || "Address not found"}`} width={'col-span-3'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} width={'col-span-3'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                <Label text={`Descripción: ${description || "Desciption not found"}`} width={'col-span-3'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                {/* <Button width={'col-span-3'} height={'row-span-1'} label='Editar' onClick={onClickEdit || ''}/> */}
                <Button textcolor='text-white' width='w-[180px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Intercambiar' onClick={onClickEdit || ''}/>
            </div>
        </div>
    )
}