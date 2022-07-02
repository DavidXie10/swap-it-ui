import ImageCheckbox from "../../Components/ImageCheckbox";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Spinner from "../../Components/Spinner";
import { useSelector, useDispatch } from 'react-redux'
import { toggleItemToGive, clearGiveState } from '../../Slices/exchangeItem/exchangeItemSlice';
import 'tw-elements';
import { useEffect } from "react";
import { setLoading, unsetLoading } from "../../Slices/app/appSlice";
import { getMyItems } from "../../Slices/myItems/requests/getMyItems";
import { clearMyItemsState } from "../../Slices/myItems/myItemsSlice";
import { useParams } from "react-router-dom";
import AlertMessage from "../../Components/AlertMessage";
export default function ChooseExchangeProduct () {
    const { idUser } = useParams();
    const loading = useSelector( (state) => state.app.loading );
    const myItems = useSelector((state) => state.myItems.myItems);
    const success = useSelector( (state) => state.myItems.success );
    const errorMessage = useSelector ( (state) => state.myItems.errorMessage);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoading());
        dispatch(clearGiveState());
        dispatch(clearMyItemsState());
        dispatch(getMyItems({id:idUser}));
        dispatch(unsetLoading());
    }, [dispatch])

    const listMyProducts = () => myItems.map((item) => 
        <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 flex justify-center items-center">
            <ImageCheckbox fileURL={item.photoUrls[0]} onClick={() => dispatch(toggleItemToGive(item))}></ImageCheckbox>
        </div>
    );

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            {console.log(errorMessage)}
            {!success ? (<AlertMessage message={errorMessage} success={false} />) : 
            (<>
                <div className="sm:px-6 md:px-8 lg:px-16">
                    <div className="flex flex-row items-center w-full mb-16">
                        <Label text='Mis Artículos a Intercambiar' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                    </div>
                    <div className="grid grid-flow-row grid-cols-3 overflow-scroll gap-5 lg:max-h-[42rem] md:max-h-[38rem] sm:max-h-[30rem]">
                        { myItems && listMyProducts() }
                    </div>
                </div>
                <div className="flex justify-center mt-8 mb-8">
                    <Button textcolor='text-white' width='lg:w-[24rem] md:w-[24rem] sm:w-[20rem]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Proponer Intercambio' onClick=''/>
                </div>
            </>)}
            <Footer />
        </div>
        )
    )
}