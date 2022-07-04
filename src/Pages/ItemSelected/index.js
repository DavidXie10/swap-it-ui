import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Spinner from '../../Components/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToReceive, clearState } from '../../Slices/exchangeItem/exchangeItemSlice';
import 'tw-elements';
import { useEffect, useState } from "react";
import { setLoading, unsetLoading } from "../../Slices/app/appSlice";
import { useNavigate, useParams } from "react-router-dom";
import AlertMessage from "../../Components/AlertMessage";

export default function ItemSelected () {
    const { id } = useParams();
    const [item, setItem] = useState({ name: '', wishlist: '', acquisitionDate: '', description: '', itemState: -1, category: -1, location: -1, photoUrls: []});
    const loading = useSelector( (state) => state.app.loading );
    const [localSuccess, setLocalSuccess] = useState(true);
    const [localErrorMessage, setLocalErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearState());
        const fetchItem = async (id) => {
            const itemFetch = await fetch(`http://localhost:8000/items/${id}`);
            const itemJSON = await itemFetch.json();
            if (itemFetch.status !== 200){
                setLocalSuccess(false);
                setLocalErrorMessage(itemJSON.message);
            } else {
                setLocalSuccess(true);
                if(itemJSON.itemState === 1) {
                    itemJSON.itemState = "Nuevo";
                } else {
                    itemJSON.itemState = "Usado";
                }
                switch(itemJSON.location){
                    case 1:
                        itemJSON.location = "San José";
                        break;
                    case 2:
                        itemJSON.location = "Alajuela";
                        break;
                    case 3:
                        itemJSON.location = "Cartago";
                        break;
                    case 4:
                        itemJSON.location = "Heredia";
                        break;
                    case 5:
                        itemJSON.location = "Guanacaste";
                        break;
                    case 6:
                        itemJSON.location = "Puntarenas";
                        break;
                    case 7:
                        itemJSON.location = "Limón";
                        break;
                    default:
                        itemJSON.location = "No es de Costa Rica";
                        break;
                }
                setItem(itemJSON);
            }
        } 
        dispatch(setLoading());
        fetchItem(id);
        dispatch(unsetLoading());
    }, [dispatch, id]);

    let first = true;
    const listItems = () => item.photoUrls.map((image) =>
        {if (first){
            first = false;
            return  <div className="carousel-item active relative float-left lg:w-[47%] md:w-[50%] sm:w-[61%]" key={image}>
                        <img src={image} alt={'Imagen artículo de catálogo'}/>
                    </div>;
        } else {
            return  <div className="carousel-item relative float-left lg:w-[47%] md:w-[50%] sm:w-[61%]" key={image}>
                        <img src={image} alt={'Imagen artículo de catálogo'}/>
                    </div>

        } }
    ) 

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            {!localSuccess ? (<AlertMessage message={localErrorMessage} success={false} />) : 
            (
                <div className="sm:px-6 md:px-8 lg:px-16">
                    <div className="flex flex-row justify-between items-center w-full mb-16 pt-6">
                        <Label text='Artículo seleccionado' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                        <BackButton onClick={() => navigate('/catalog') }></BackButton>
                    </div>
                    <div className="grid lg:grid-rows-[7] md:grid-rows-[8] sm:grid-rows-[16] grid-cols-7 lg:gap-y-2 sm:gap-y-0 md:gap-y-0 gap-x-4 mb-16">
                        <div className="border row-[span_7_/_span_7] lg:col-span-3 md:col-span-3 sm:col-span-7 border-b-neutral-400 w-full">
                            <div id="carouselExampleControls" className="carousel slide relative flex w-full h-full" data-bs-ride="carousel">
                                <button
                                    className="carousel-control-prev flex items-center justify-center text-center border-2 bg-black"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <div className="carousel-inner relative overflow-shown container">
                                    { 
                                        listItems()
                                    }
                                </div>
                                <button
                                    className="carousel-control-next flex items-center justify-center text-center border-2 bg-black"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        

                        <Label text={item.name || "Title not found"} width={'lg:col-span-3 md:col-span-3 sm:col-span-7'} height={'row-span-1'} font={'font-bold'} textposition={'text-left'} size={'lg:text-4xl md:text-4xl sm:text-3xl'}></Label>
                        <Label text={`Propietario: ${item.ownerFullName || "Owner not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-7'} height={'row-span-1'} font={'normal'} textposition={'text-left'} size={'text-md'}></Label>
                        <Label text={`Estado: ${item.itemState || "State not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-7'} height={'row-span-1'} font={'normal'} textposition={'text-left'} size={'text-md'}></Label>
                        <Label text={`Ubicación: ${item.location || "Address not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-7'} height={'row-span-1'} font={'normal'} textposition={'text-left'} size={'text-md'}></Label>
                        <Label text={`Fecha de adquisición: ${item.acquisitionDate || "Acquisition not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-7'} height={'row-span-1'} font={'normal'} textposition={'text-left'} size={'text-md'}></Label>
                        <Label text={`Descripción: ${item.description || "Desciption not found"}`} width={'lg:col-span-3 md:col-span-3 sm:col-span-7'} height={'row-span-1'} font={'normal'} textposition={'text-left'} size={'text-md'}></Label>
                        <Button textcolor='text-white' width='lg:col-span-3 md:col-span-3 sm:col-span-7 lg:w-[180px] md:w-[180px] sm:w-[100%]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px] lg:mt-2 md:mt-0 sm:mt-0'} label='Intercambiar' onClick={() => {
                                dispatch(addItemToReceive(item));
                                navigate('/chooseExchangeProduct')
                            }
                        }/>
                    </div>
                </div>
            )}
            <Footer />
        </div>)
    )
}