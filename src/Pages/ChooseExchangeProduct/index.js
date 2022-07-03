import { useSelector, useDispatch } from 'react-redux'
import 'tw-elements';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageCheckbox from "../../Components/ImageCheckbox";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Spinner from "../../Components/Spinner";
import { toggleItemToGive, clearGiveState } from '../../Slices/exchangeItem/exchangeItemSlice';
import { setLoading, unsetLoading } from "../../Slices/app/appSlice";
import { getMyItems } from "../../Slices/myItems/requests/getMyItems";
import { clearMyItemsState } from "../../Slices/myItems/myItemsSlice";
import AlertMessage from "../../Components/AlertMessage";

export default function ChooseExchangeProduct () {
    const loading = useSelector( (state) => state.app.loading );
    const user = useSelector( (state) => state.user.user);
    const myItems = useSelector((state) => state.myItems.myItems);
    const success = useSelector( (state) => state.myItems.success );
    const errorMessage = useSelector ( (state) => state.myItems.errorMessage);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const idUser = user.id;

    useEffect(() => {
        dispatch(setLoading());
        dispatch(clearGiveState());
        dispatch(clearMyItemsState());
        dispatch(getMyItems({id: idUser}));
        dispatch(unsetLoading());
    }, [dispatch, idUser, user.id])

    const listMyProducts = () => myItems.map((item) => 
        <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 flex justify-center items-center" key={item.itemId}>
            <ImageCheckbox fileURL={item.photoUrls[0]} onClick={() => dispatch(toggleItemToGive(item))}></ImageCheckbox>
        </div>
    );

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            {!success ? (<AlertMessage message={errorMessage} success={false} />) : 
            (<>
                <div className="sm:px-6 md:px-8 lg:px-16">
                    <div className="flex flex-row items-center w-full mb-16 pt-6">
                        <Label text='Mis Artículos a Intercambiar' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                    </div>
                    <div className="grid grid-flow-row grid-cols-3 overflow-scroll gap-5 lg:max-h-[42rem] md:max-h-[38rem] sm:max-h-[30rem]">
                        { myItems && listMyProducts() }
                    </div>
                </div>
                <div className="flex justify-center mt-12 mb-12">
                    <Button textcolor='text-white' width='lg:w-[24rem] md:w-[24rem] sm:w-[20rem]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Proponer Intercambio' onClick={() => {
                        navigate('/confirmation')
                    }}/>
                </div>
            </>)}
            <Footer />
        </div>
        )
    )
}