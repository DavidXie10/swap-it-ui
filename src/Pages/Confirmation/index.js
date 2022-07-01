import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import 'tw-elements';
import { useDispatch, useSelector } from "react-redux";
import { getItem } from '../../Slices/exchangeItem/requests/getItem';
import { addItemToReceive } from "../../Slices/exchangeItem/exchangeItemSlice";
import { useEffect } from "react";

export default function Confirmation () {
    // let itemsToGive = [
    //     {id:1,name:"pan"},
    //     {id:2,name:"alma"},
    //     {id:3,name:"lkajsdfljasdf"},
    //     {id:4,name:"alasdfasdfma"},
    //     {id:5,name:"un iem de nombre muuuuuuuuuuuy largo"},
    //     {id:6,name:"un iem de nombre muuuuuuuuuuuy largo"},
    //     {id:7,name:"un iem de nombre muuuuuuuuuuuy largo"},
    //     {id:8,name:"help"},
    //     {id:8,name:"help2"}
    // ];
    const dispatch = useDispatch();
    const idItemsToGive = useSelector((state) => state.exchangeItem.itemsToGive);
    const idItemToReceive = useSelector((state) => state.exchangeItem.itemsToGive);

    const itemsToGive = [];
    

    // useEffect(() => {
    //     dispatch(addItemToReceive(Number(1)));
    // }, [dispatch]);
    
    const itemToReceive = dispatch(getItem({id:idItemToReceive}));
    console.log(itemToReceive);

    //console.log(dispatch(getItem({id:1})));
    //consulta backend
    //consutla backend
    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row justify-between items-center w-full mb-16">
                    <Label text='Propuesta de Intercambio' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                    <BackButton></BackButton>
                </div>
                <div className={`grid grid-rows-[${itemsToGive.length + 1}] grid-cols-5`}>
                    <div className={`bg-[#f5f5f5] sm:col-span-5 md:col-span-2 lg:col-span-2 pb-4`}>
                        <Label font={'font-bold'} text={'Ofrecer:'} backgroundcolor={'bg-[#f5f5f5]'} textposition={'ml-8 mt-4'} width={'w-auto'} height={'h-auto'}></Label>
                        <ul className="ml-16 mr-8 list-disc">
                            {
                                itemsToGive.map(item => <li>{item.name}</li> )
                            }
                        </ul>
                    </div>
                    <div className={`sm:col-span-5 md:col-span-1 lg:col-span-1 flex justify-center items-center sm:rotate-90 md:rotate-0 lg:rotate-0`}>
                        <img 
                            src={require("../../Assets/twoWayArrows.png")}
                            alt='Page logo' 
                            className="scale-50"
                        />
                    </div>
                    <div className={`bg-[#f5f5f5] sm:col-span-5 md:col-span-2 lg:col-span-2 pb-4`}>
                        <Label font={'font-bold'} text={'Por:'} backgroundcolor={'bg-[#f5f5f5]'} textposition={'ml-8 mt-4'} width={'w-auto'} height={'h-auto'}></Label>
                        <ul className="ml-16 list-disc">
                            <li>{itemToReceive.name}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-8 mb-16">
                    <Button textcolor='text-white' width='lg:w-[180px] md:w-[180px] sm:w-[100%]' height='lg:h-[45px] md:h-[50px] sm:h-[55px]' label='Cancelar' onClick='' backgroundcolor='bg-[#8C8D8D]'/>
                    <Button textcolor='text-white' width='lg:w-[180px] md:w-[180px] sm:w-[100%]' height='lg:h-[45px] md:h-[50px] sm:h-[55px]' label='Confirmar' onClick=''/>
                </div>
            </div>
            <Footer />
        </div>
    )
}