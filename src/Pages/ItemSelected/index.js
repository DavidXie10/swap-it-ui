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
import { useEffect } from "react";
import { setLoading, unsetLoading } from "../../Slices/app/appSlice";

export default function ItemSelected () {
    let idItem = 5;
    const loading = useSelector( (state) => state.app.loading );
    const item = useSelector((state) => state.exchangeItem.itemToReceive);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoading());
        dispatch(getItem({id:idItem}));
        dispatch(unsetLoading());
    }, []);
   
    let first = true;
    const listImages = item ? item.photoUrls.map((image) =>
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
    ) : 0;

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row justify-between items-center w-full mb-16 p-8 sm:px-6 md:px-8 lg:px-16">
                    <Label text='Artículo seleccionado' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                    <BackButton onClick=''></BackButton>
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
                    

                    <Label text={item.name || "Title not found"} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={'font-bold'} textposition={'text-left'} size={'lg:text-4xl md:text-4xl sm:text-3xl'}></Label>
                    <Label text={`Propietario: ${item.ownerFullName || "Owner not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Estado: ${item.itemState || "State not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Ubicación: ${item.location || "Address not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Fecha de adquisición: ${item.acquisitionDate || "Acquisition not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Label text={`Descripción: ${item.description || "Desciption not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-5'} height={'row-span-1'} font={''} textposition={'text-left'} size={'text-md'}></Label>
                    <Button textcolor='text-white' width='lg:col-span-3 md:col-span-3 sm:col-span-5 lg:w-[180px] md:w-[180px] sm:w-[100%]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Intercambiar' onClick=''/>
                </div>
            </div>
            <Footer />
        </div>)
    )
}