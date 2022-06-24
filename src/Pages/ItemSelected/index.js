import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

//sm:px-6 md:px-8 lg:px-16

//Estoy haceindo responsive para que se haga pequeño. Falta que las imagenes en la versión pequeña tomen sus 8 filas y que en la verisón grande el botón de Intercambiar este ubicado correctamente y que este centrado el back boton en la versión pequeña y la grande. Probando push ecci.
export default function MyItem ({
    images, title, owner, state, address, acquisition, description, onClickExchange
}) {
    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row justify-between w-full mb-16">
                    <Label text={"Artículo seleccionado"} width={'basis-3/4'} textposition={'text-left'} font={'font-bold'} size={'lg:text-4xl md:text-4xl sm:text-2xl'}></Label>
                    <BackButton></BackButton>
                </div>
                <div className="grid lg:grid-rows-[8] md:grid-rows-[8] sm:grid-rows-[16] grid-cols-5 gap-2 mb-16">
                    {/* Image carousel */}
                    { images ? <img className="row-[span_8_/_span_8] lg:col-span-2 md:col-span-2 sm:col-span-5" src={images} alt={"Foto del artículo a intercambiar"}/> : <p className="row-[span_8_/_span_8] lg:col-span-2 md:col-span-2 sm:col-span-5">Fotos no encontradas</p>}
                    <Label text={title || "Title not found"} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={'font-bold'} textposition={'text-left'} size={'lg:text-4xl md:text-4xl sm:text-3xl'}></Label>
                    <Label text={`Propietario: ${owner || "Owner not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Estado: ${state || "State not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Ubicación: ${address || "Address not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Descripción: ${description || "Desciption not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Button textcolor='text-white' width='lg:w-[180px] md:w-[180px] sm:col-span-5' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Intercambiar' onClick={onClickExchange || ''}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}