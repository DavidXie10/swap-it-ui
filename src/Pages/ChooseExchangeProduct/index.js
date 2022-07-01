import ImageCheckbox from "../../Components/ImageCheckbox";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useSelector, useDispatch } from 'react-redux'
import { toggleItemToGive, clearExchange } from '../../Slices/exchangeItem/exchangeItemSlice';
import 'tw-elements';
export default function ChooseExchangeProduct () {

    const myProducts = [
        {
            id: 1,
            name: "Café rarísimo",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 2,
            name: "Cerezas",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/cherries-250g-small.jpg",
            direction: 'Heredia',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 3,
            name: "Crab Crackers",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2022/03/carob-crackers.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 4,
            name: "Cerezas agrías",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/sour-cherries-250g-small.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 5,
            name: "Mantequilla de sésamo",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/sesame-butter-wholegrain-200g-small.jpg",
            direction: 'Heredia',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 6,
            name: "Cerezas",
            image:
            "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/cherries-250g-small.jpg",
            direction: 'Heredia',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 7,
            name: "Mantequilla de sésamo",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/sesame-butter-wholegrain-200g-small.jpg",
            direction: 'Heredia',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 8,
            name: "Anise Croutons",
            image:
            "https://www.tresorsdegrece.gr/wp-content/uploads/2021/10/intro-anise-croutons.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 9,
            name: "Café rarísimo",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 10,
            name: "Café rarísimo",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 11,
            name: "Cerezas",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/cherries-250g-small.jpg",
            direction: 'Heredia',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 12,
            name: "Crab Crackers",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2022/03/carob-crackers.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
        {
            id: 13,
            name: "Cerezas agrías",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/sour-cherries-250g-small.jpg",
            direction: 'San José',
            state: 'usado',
            boughtDate: '20/05/2021',
            inSearchOf: 'bicicleta sin rodines'
        },
    ];
    const dispatch = useDispatch();
    const currentItemsToGive = useSelector((state) => state.exchangeItem.itemsToGive);

    const listMyProducts = myProducts.map((item) => 
        <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 flex justify-center items-center">
            <ImageCheckbox fileURL={item.image} onClick={() => {dispatch(toggleItemToGive(Number(item.id)));}} isChecked={currentItemsToGive.find((element) => element === item.id)} ></ImageCheckbox>
        </div>
    );

    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row items-center w-full mb-16">
                    <Label text='Mis Artículos a Intercambiar' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                </div>
                <div className="grid grid-flow-row grid-cols-3 overflow-scroll gap-5 lg:max-h-[42rem] md:max-h-[38rem] sm:max-h-[30rem]">
                    { listMyProducts }
                </div>
            </div>
            <div className="flex justify-center mt-8 mb-8">
                <Button textcolor='text-white' width='lg:w-[24rem] md:w-[24rem] sm:w-[20rem]' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='Proponer Intercambio' onClick={() => dispatch(clearExchange())}/>
            </div>
            <Footer />
        </div>
    )
}