import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Spinner from '../../Components/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToReceive, clearExchange } from '../../Slices/exchangeItem/exchangeItemSlice';
import 'tw-elements';
import { getItem } from "../../Slices/exchangeItem/requests/getItem";

export default function ItemSelected ({
    idItem
}) {
    const dispatch = useDispatch();
    const loading = useSelector( (state) => state.app.loading );
    useDispatch(getItem({id:idItem}));

    //const currentItemToRecive = useSelector((state) => state.exchangeItem.itemToReceive);

    let imagesSource=['https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg', 'https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/cherries-250g-small.jpg', 'https://www.tresorsdegrece.gr/wp-content/uploads/2022/03/carob-crackers.jpg']
    let title='Bicicleta con rodines';
    let owner='Juani';
    let state='usado';
    let address='San José';
    let acquisition='20/05/2021';
    let description='La bici esta como nueva, tiene conos, aros nuevos, recién pintada de rojo, si no me va a dar su alma no me ofrezca nada';

    let first = true;
    const listImages = imagesSource.map((image) =>
        {if (first){
            first = false;
            return  <div className="carousel-item active relative float-left lg:w-[47%] md:w-[50%] sm:w-[61%]">
                        <img src={image} alt={'Imagen artículo de catálogo'}/>
                    </div>;
        } else {
            return  <div className="carousel-item relative float-left lg:w-[47%] md:w-[50%] sm:w-[61%]">
                        <img src={image} alt={'Imagen artículo de catálogo'}/>
                    </div>

        } }
    );

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row justify-between items-center w-full mb-16 p-8 sm:px-6 md:px-8 lg:px-16">
                    <Label text='Artículo seleccionado' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                    <BackButton onClick={() => dispatch(clearExchange())}></BackButton>
                </div>
                <div className="grid lg:grid-rows-[8] md:grid-rows-[8] sm:grid-rows-[16] grid-cols-7 gap-2 mb-16">
                    <div className="border row-[span_8_/_span_8] lg:col-span-3 md:col-span-3 sm:col-span-7 border-b-neutral-400 w-full">
                        <div id="carouselExampleControls" className="carousel slide relative flex w-full h-full" data-bs-ride="carousel">
                            <button
                                class="carousel-control-prev flex items-center justify-center text-center border-2 bg-black"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <div class="carousel-inner relative overflow-shown container">
                                { listImages }
                            </div>
                            <button
                                class="carousel-control-next flex items-center justify-center text-center border-2 bg-black"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    

                    <Label text={title || "Title not found"} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={'font-bold'} textposition={'text-left'} size={'lg:text-4xl md:text-4xl sm:text-3xl'}></Label>
                    <Label text={`Propietario: ${owner || "Owner not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Estado: ${state || "State not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Ubicación: ${address || "Address not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Fecha de adquisición: ${acquisition || "Acquisition not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Descripción: ${description || "Desciption not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Button textcolor='text-white' width='lg:col-span-3 md:col-span-3 sm:col-span-5 lg:w-[180px] md:w-[180px] sm:w-[100%]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Intercambiar' onClick={() => dispatch(addItemToReceive(Number(idItem)))}/>
                </div>
            </div>
            <Footer />
        </div>)
    )
}
//<span>{count}</span>
//{dispatch(addItemToReceive(itemId));}
//onClick={() => setShowMobileCategories(false) }