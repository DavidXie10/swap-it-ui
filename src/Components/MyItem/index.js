import Button from "../Button";
import Label from "../Label";

export default function MyItem ({
    image, title, state, address, acquisition, searchFor, backgroundcolor, onClickEdit, onClickDelete
}) {
    return (
        <div className={`${backgroundcolor || ""}`}>
            <div className={`flex justify-end ${backgroundcolor || ""}`}></div>
            <div className="grid lg:grid-rows-6 md:grid-rows-6 sm:grid-rows-8 grid-cols-5 lg:gap-1 md:gap-1 sm:gap-0 mt-8 mb-8">
                <div className={`lg:row-span-6 md:row-span-6 sm:row-span-5 col-span-2 ${backgroundcolor || ""} flex justify-center`}>
                    { image ? <img className={`lg:w-[30%] md:w-[70%] sm:w-[80%] lg:max-h-full md:max-h-full sm:max-h-[300px] `} src={image} alt={"Foto del artículo a intercambiar"}/> : <p className="row-span-6 text-center">Foto no encontrada</p>}
                </div>
                <Label text={title || "Title not found"} width={'col-span-3'} height={'lg:row-span-2 md:row-span-2 sm:row-span-1'} font={'font-bold'} textposition={'text-left'} backgroundcolor={backgroundcolor || ""}></Label>
                <Label text={`Estado: ${state || "State not found"}`} width={'col-span-3'} height={'row-span-[0.5]'} font={'normal'}textposition={'text-left'} backgroundcolor={backgroundcolor || ""} size={'text-lg'}></Label>
                <Label text={`Ubicación: ${address || "Address not found"}`} width={'col-span-3'} height={'row-span-[0.5]'} font={'normal'} textposition={'text-left'} backgroundcolor={backgroundcolor || ""} size={'text-lg'}></Label>
                <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} height={'row-span-1'} width={'col-span-3'} font={'normal'} textposition={'text-left'} backgroundcolor={backgroundcolor || ""} size={'text-lg'}></Label>
                <Label text={`Busco: ${searchFor || "SearchFor not found"}`} width={'col-span-3'} height={'row-span-1'} font={'normal'} textposition={'text-left'} backgroundcolor={backgroundcolor || ""} size={'text-lg'}></Label>
                <Button width='lg:w-[180px] md:w-[140px] sm:w-[100px] lg:col-start-3 md:col-start-3 sm:col-start-2 flex justify-center items-center' height={'lg:h-[45px] md:h-[50px] sm:h-[55px] mt-8'} label='Editar' onClick={onClickEdit || ''} textcolor='text-white'/>
                <Button width='lg:w-[180px] md:w-[140px] sm:w-[100px] lg:col-start-4 md:col-start-4 sm:col-start-4 flex justify-center items-center ml-1 mt-8' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Eliminar' onClick={onClickDelete || ''} backgroundcolor='bg-[#8C8D8D]' textcolor='text-white'/>
            </div>
            <div className={`flex justify-end ${backgroundcolor || ""}`}></div>
        </div>
    )
}
