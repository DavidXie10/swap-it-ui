import 'tw-elements';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { exchange } from '../../Slices/exchangeItem/requests/exchange';
import { clearState, setSucess } from '../../Slices/exchangeItem/exchangeItemSlice';
import AlertMessage from '../../Components/AlertMessage';
import Spinner from '../../Components/Spinner';
import BackButton from '../../Components/BackButton';
import Button from '../../Components/Button';
import Label from '../../Components/Label';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Mixpanel from '../../services/mixpanel';

export default function Confirmation () {
    const itemsToGive = useSelector((state) => state.exchangeItem.itemsToGive);
    const itemToReceive = useSelector((state) => state.exchangeItem.itemToReceive);
    const success = useSelector( (state) => state.exchangeItem.success );
    const loading = useSelector( (state) => state.app.loading );
    const errorMessage = useSelector ( (state) => state.exchangeItem.errorMessage);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setSucess({success: false}));
    }, [dispatch]);

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            {errorMessage ? <AlertMessage message={errorMessage} success={false} buttonType='back'/> : <></>}
            {success ? (
                <AlertMessage success={true} message={`¡Su propuesta de intercambio ha sido enviada exitosamente!`} buttonType='back' buttonMessage={'Regresar al catálogo'} />) : (
            <div className='sm:px-6 md:px-8 lg:px-16'>
                <div className='flex flex-row items-center w-full mb-16 pt-6 justify-between'>
                    <Label text='Propuesta de Intercambio' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                    <BackButton onClick={() => navigate(`/item/${itemToReceive.itemId}/chooseExchangeProduct`) }></BackButton>
                </div>
                <div className={`grid grid-rows-[${itemsToGive.length + 1}] grid-cols-5`}>
                    <div className={`bg-[#f5f5f5] sm:col-span-5 md:col-span-2 lg:col-span-2 pb-4 pt-4 p-5`}>
                        <Label font={'font-bold'} text={'Ofrecer:'} backgroundcolor={'bg-[#f5f5f5]'} textposition={'ml-8 mt-4'} width={'w-auto'} height={'h-auto'} size='text-lg'></Label>
                        <ul className='ml-16 mr-8 list-disc'>
                            {
                                itemsToGive.map(item => <li key={item.itemId}>{item.name}</li> )
                            }
                        </ul>
                    </div>
                    <div className={`sm:col-span-5 md:col-span-1 lg:col-span-1 flex justify-center items-center sm:rotate-90 md:rotate-0 lg:rotate-0`}>
                        <img 
                            src={'https://ci0137.s3.amazonaws.com/swap-it/uploads/twoWayArrows.png'}
                            alt='Page logo' 
                            className='scale-50'
                        />
                    </div>
                    <div className={`bg-[#f5f5f5] sm:col-span-5 md:col-span-2 lg:col-span-2 pb-4 pt-4 p-7`}>
                        <Label font={'font-bold'} text={'Por:'} backgroundcolor={'bg-[#f5f5f5]'} textposition={'ml-8 mt-4'} width={'w-auto'} height={'h-auto'} size='text-lg'></Label>
                        <ul className='ml-16 list-disc'>
                            <li>{itemToReceive.name}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-end gap-4 mt-8 mb-16'>
                    <Button textcolor='text-white' width='lg:w-[180px] md:w-[180px] sm:w-[100%]' height='lg:h-[45px] md:h-[50px] sm:h-[55px]' label='Cancelar' onClick={() => {
                        Mixpanel.track(Mixpanel.TYPES.CANCEL_EXCHANGE);
                        dispatch(clearState());
                        navigate('/');
                    }} backgroundcolor='bg-[#8C8D8D]'/>
                    <Button textcolor='text-white' width='lg:w-[180px] md:w-[180px] sm:w-[100%]' height='lg:h-[45px] md:h-[50px] sm:h-[55px]' label='Confirmar' onClick={() => {
                        Mixpanel.track(Mixpanel.TYPES.CONFIRMATION_EXCHANGE);
                        dispatch(exchange());}}/>
                </div>
            </div>)}
            <Footer />
        </div>)
    )
}