import Button from "../Button";
import Label from "../Label";

export default function MyItem ({
    image, title, state, address, acquisition, searchFor, backgroundcolor, onClickEdit, onClickDelete
}) {
    return (
        <div className={`${backgroundcolor || ""}`}>
            <div className={`flex justify-end ${backgroundcolor || ""}`}></div>
            <div className="grid grid-rows-6 grid-cols-5 gap-1 mt-8 mb-8">
                <div className={`row-span-6 col-span-2 ${backgroundcolor || ""} flex justify-center`}>
                    { image ? <img className={`lg:w-[30%] md:w-[70%] sm:w-[80%] `} src={image} alt={"Foto del artículo a intercambiar"}/> : <p className="row-span-6 text-center">Foto no encontrada</p>}
                </div>
                <Label text={title || "Title not found"} width={'col-span-3'} height={'row-span-2'} font={'font-bold'} textposition={'text-left'} backgroundcolor={backgroundcolor || ""} size={'text-4xl'}></Label>
                <Label text={`Estado: ${state || "State not found"}`} width={'col-span-3'} height={'row-span-1'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor || ""}></Label>
                <Label text={`Ubicación: ${address || "Address not found"}`} width={'col-span-3'} height={'row-span-1'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor || ""}></Label>
                <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} height={'row-span-1'} width={'col-span-3'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor || ""}></Label>
                <Label text={`Busco: ${searchFor || "SearchFor not found"}`} width={'col-span-3'} height={'row-span-1'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor || ""}></Label>
                <Button width='lg:w-[180px] md:w-[180px] sm:w-[75px] col-start-3 flex justify-center items-center' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Editar' onClick={onClickEdit || ''}/>
                <Button width='lg:w-[180px] md:w-[180px] sm:w-[75px] col-start-4 flex justify-center items-center ml-1' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Eliminar' onClick={onClickDelete || ''} backgroundcolor='bg-[#8C8D8D]' textcolor='text-white'/>
            </div>
            <div className={`flex justify-end ${backgroundcolor || ""}`}></div>
        </div>
    )
}

//width='w-[360px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'}
