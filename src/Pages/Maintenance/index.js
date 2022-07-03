import 'tw-elements';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearMyItemsState, deleteSelectedItem } from "../../Slices/myItems/myItemsSlice";
import { getMyItems } from "../../Slices/myItems/requests/getMyItems";
import { setLoading, unsetLoading } from "../../Slices/app/appSlice";
import { deleteItem } from "../../Slices/myItems/requests/deleteItem";
import AlertMessage from "../../Components/AlertMessage";
import MyItem from "../../Components/MyItem";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Spinner from "../../Components/Spinner";
import { useNavigate } from 'react-router-dom';

export default function Maintenance () {
    const loading = useSelector( (state) => state.app.loading );
    const myItems = useSelector((state) => state.myItems.myItems);
    const success = useSelector( (state) => state.myItems.success );
    const errorMessage = useSelector ( (state) => state.myItems.errorMessage);
    const user = useSelector( (state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const idUser = user.id;
 
    useEffect(() => {
        dispatch(setLoading());
        dispatch(clearMyItemsState());
        dispatch(getMyItems({id:idUser}));
        dispatch(unsetLoading());
    }, [dispatch, idUser]);

    let alternate = true;
    const listMyProducts = () => myItems.map((item) => 
        {if (alternate){
            alternate = false;
            return  <div>
                        <MyItem image={item.photoUrls[0]} title={item.name} state={item.itemState} address={item.location} acquisition={item.acquisitionDate} onClickEdit={() => {
                            navigate(`/item/${item.itemId}`)
                        }} searchFor={item.wishlist} onClickDelete={() => {
                            dispatch(deleteItem({param:item.itemId}));
                            dispatch(deleteSelectedItem(item));
                        }}></MyItem>
                        <hr className="border-2"></hr>
                    </div>;
        } else {
            alternate = true;
            return  <div>
                        <MyItem image={item.photoUrls[0]} title={item.name} state={item.itemState} address={item.location} onClickEdit={() => {
                            navigate(`/item/${item.itemId}`)
                        }} acquisition={item.acquisitionDate} searchFor={item.wishlist} backgroundcolor={'bg-[#f5f5f5]'} onClickDelete={() => {
                            dispatch(deleteItem({param:item.itemId}));
                            dispatch(deleteSelectedItem(item));
                        }}></MyItem>
                        <hr className="border-2"></hr>
                    </div>;
        }}
    );

    return (
        loading ? (<Spinner />) : (
            <div className='flex min-h-screen flex-col justify-between'>
                <Header />
                {!success ? (<AlertMessage message={errorMessage} success={false} />) :
                (<>
                    <div className="sm:px-6 md:px-8 lg:px-16">
                        <div className="flex flex-row items-center w-full mb-16 pt-6">
                            <Label text='Mis Artículos' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                        </div>
                        <div className="lg:max-h-[42rem] md:max-h-[38rem] sm:max-h-[30rem] overflow-scroll">
                            { myItems && listMyProducts() }
                        </div>
                    </div>
                    <div className="flex justify-center mt-12 mb-12">
                        <Button textcolor='text-white' backgroundcolor={'bg-[#7AF067]'} width='rounded-full lg:w-[180px] md:w-[180px] sm:w-[75px]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='+' textSize={'lg:text-4xl md:text-4xl sm:text-2xl'}  onClick={() => {
                            navigate('/item/new')
                        }}/>
                    </div>
                </>)}
                <Footer />
            </div>
        )
    )
}