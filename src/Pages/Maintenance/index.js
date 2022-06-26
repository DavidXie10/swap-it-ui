import MyItem from "../../Components/MyItem";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import 'tw-elements';
//Hacer responsive y freeze pane con el +
export default function Maintenance () {

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
        }
    ];
    let alternate = true;
    const listMyProducts = myProducts.map((item) => 
        {if (alternate){
            alternate = false;
            return  <div>
                        <MyItem image={item.image} title={item.name} state={item.state} address={item.direction} acquisition={item.boughtDate} searchFor={item.inSearchOf} ></MyItem>
                        <hr className="border-2"></hr>
                    </div>;
        } else {
            alternate = true;
            return  <div>
                        <MyItem image={item.image} title={item.name} state={item.state} address={item.direction} acquisition={item.boughtDate} searchFor={item.inSearchOf} backgroundcolor={'bg-[#f5f5f5]'}></MyItem>
                        <hr className="border-2"></hr>
                    </div>;
        }}
    );

    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row items-center w-full mb-16">
                    <Label text='Mis Artículos' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                </div>
                <div className="lg:max-h-[42rem] md:max-h-[21rem] sm:max-h-[40rem] overflow-scroll">
                    { listMyProducts }
                </div>
            </div>
            <div className="flex justify-center mt-8 mb-8">
                <Button textcolor='text-white' backgroundcolor={'bg-[#7AF067]'} width='rounded-full' height={'lg:h-[45px] md:h-[50px] sm:h-[55px]'} label='+' textSize={'lg:text-4xl md:text-4xl sm:text-2xl'} onClick={''}/>
            </div>
            <Footer />
        </div>
    )
}