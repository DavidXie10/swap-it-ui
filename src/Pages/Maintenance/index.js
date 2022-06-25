import MyItem from "../../Components/MyItem";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import 'tw-elements';
import { Component } from "react";

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

    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row items-center w-full mb-16">
                    <Label text='Mis Artículos' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                </div>
                <div>
                    { myProducts.map(item => <MyItem image={item.image} title={item.title} state={item.state} address={item.direction} acquisition={item.boughtDate} searchFor={item.inSearchOf} ></MyItem>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}
// image, title, state, address, acquisition, searchFor, backgroundcolor, onClickEdit, onClickDelete
// itemsToGive.map(item => <li>{item.name}</li> )