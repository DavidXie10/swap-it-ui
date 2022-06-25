import Button from "../Button";
import Label from "../Label";

export default function MyItem ({
    image, title, state, address, acquisition, searchFor, backgroundcolor, onClickEdit, onClickDelete
}) {
    return (
        <div className={`${backgroundcolor} mt-8 mb-8`}>
            <div className="grid grid-rows-6 grid-flow-col gap-2 mb-4">
                { image ? <img className="row-span-6 text-center lg:w-[35%] md:w-[70%] sm:w-[61%]" src={image} alt={"Foto del artículo a intercambiar"}/> : <p className="row-span-6 text-center">Foto no encontrada</p>}
                <Label text={title || "Title not found"} width={'col-span-2'} height={'row-span-2'} font={'font-bold'} textposition={'text-left'} backgroundcolor={backgroundcolor} ></Label>
                <Label text={`Estado: ${state || "State not found"}`} width={'col-span-2'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor}></Label>
                <Label text={`Ubicación: ${address || "Address not found"}`} width={'col-span-2'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor}></Label>
                <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} width={'col-span-2'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor}></Label>
                <Label text={`Busco: ${searchFor || "SearchFor not found"}`} width={'col-span-2'} font={''} textposition={'text-left'} backgroundcolor={backgroundcolor}></Label>
            </div>
            <div className={`flex justify-around ${backgroundcolor}`}>
                <div></div>
                <div>
                    <Button width='w-[180px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Editar' onClick={onClickEdit || ''}/>
                </div>
                <div>
                    <Button width='w-[180px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Eliminar' onClick={onClickDelete || ''} backgroundcolor='bg-[#8C8D8D]' textcolor='text-white'/>
                </div>
            </div>
        </div>
    )
}
