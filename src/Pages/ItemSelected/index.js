import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import 'tw-elements';

//sm:px-6 md:px-8 lg:px-16

//Estoy haceindo responsive para que se haga pequeño. Falta que las imagenes en la versión pequeña tomen sus 8 filas y que en la verisón grande el botón de Intercambiar este ubicado correctamente y que este centrado el back boton en la versión pequeña y la grande.
export default function ItemSelected ({
    imagesSource, title, owner, state, address, acquisition, description, onClickExchange
}) {
    console.log(imagesSource);
    let first = true;
    const listImages = imagesSource.map((image) =>
        {if (first){
            first = false;
            return  <div className="carousel-item active relative float-left w-full">
                        <img src={image} alt={'Imagen artículo de catálogo'}/>
                    </div>;
        } else {
            return  <div className="carousel-item relative float-left w-full">
                        <img src={image} alt={'Imagen artículo de catálogo'}/>
                    </div>;
        } }
    );

    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row justify-between w-full mb-16">
                    <Label text={"Artículo seleccionado"} width={'basis-3/4'} textposition={'text-left'} font={'font-bold'} size={'lg:text-4xl md:text-4xl sm:text-2xl'}></Label>
                    <BackButton></BackButton>
                </div>
                <div className="grid lg:grid-rows-[8] md:grid-rows-[8] sm:grid-rows-[16] grid-cols-5 gap-2 mb-16">
                    <div id="carouselExampleControls" className="carousel slide relative row-[span_8_/_span_8] lg:col-span-2 md:col-span-2 sm:col-span-5  border border-b-neutral-400" data-bs-ride="carousel">
                        <div class="carousel-inner relative w-full overflow-hidden flex items-center justify-center text-center">
                            { listImages }
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <Label text={title || "Title not found"} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={'font-bold'} textposition={'text-left'} size={'lg:text-4xl md:text-4xl sm:text-3xl'}></Label>
                    <Label text={`Propietario: ${owner || "Owner not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Estado: ${state || "State not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Ubicación: ${address || "Address not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Descripción: ${description || "Desciption not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Button textcolor='text-white' width='lg:col-span-3 md:col-span-3 sm:col-span-5 w-[180px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Intercambiar' onClick={onClickExchange || ''}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

