import ArticleCard from '../../Components/ArticleCard';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import Label from '../../Components/Label';
import { RiEqualizerLine } from 'react-icons/ri';
import { useState } from 'react';
import { Pagination } from '@mui/material';

export default function Catalog() {
    const products = [
        {
          id: 1,
          name: "Café rarísimo",
          image:
            "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
          direction: 'San José',
        },
        {
          id: 2,
          name: "Cerezas",
          image:
            "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/cherries-250g-small.jpg",
          direction: 'Heredia',
        },
        {
          id: 3,
          name: "Crab Crackers",
          image:
            "https://www.tresorsdegrece.gr/wp-content/uploads/2022/03/carob-crackers.jpg",
          direction: 'San José'
        },
        {
          id: 4,
          name: "Cerezas agrías",
          image:
            "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/sour-cherries-250g-small.jpg",
          direction: 'San José',
        },
        {
            id: 5,
            name: "Mantequilla de sésamo",
            image:
                "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/sesame-butter-wholegrain-200g-small.jpg",
            direction: 'Heredia'
          },
          {
            id: 6,
            name: "Cerezas",
            image:
              "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/cherries-250g-small.jpg",
            direction: 'Heredia',
          },
          {
            id: 7,
            name: "Mantequilla de sésamo",
            image:
              "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/sesame-butter-wholegrain-200g-small.jpg",
            direction: 'Heredia',
          },
          {
            id: 8,
            name: "Anise Croutons",
            image:
              "https://www.tresorsdegrece.gr/wp-content/uploads/2021/10/intro-anise-croutons.jpg",
            direction: 'San José',
          },
          {
            id: 9,
            name: "Café rarísimo",
            image:
              "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
            direction: 'San José'
          }
      ];
      
    const [showMobileCategories, setShowMobileCategories] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    // useSelector, redux

    // const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    //     setCurrentPage(value);
    //   };

    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header/>
            
            <div className={`lg:hidden md:hidden z-20 ${showMobileCategories?'sm:block':'sm:hidden'}`}>
                <div onClick={() => setShowMobileCategories(false) } className='fixed top-0 left-0 h-full w-full cursor-pointer' ></div>
                <div className='fixed top-16 h-full w-2/3 bg-slate-800'>
                    <Categories/>
                </div>
            </div>
            <div className='p-8 w-full sm:px-6 md:px-8 lg:px-16 '>
                <Label text='Catálogo' width='w-full' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                
                <div className='flex mt-5 text'>
                    <div className='mr-10 lg:block md:block sm:hidden'>
                        <Categories />
                    </div>
                    
                    <div>
                        <div className='flex items-center'>
                            <RiEqualizerLine className='text-3xl top-[10px] mr-2 lg:hidden md:hidden cursor-pointer' onClick={() => setShowMobileCategories(true) }/>
                            <Input type='search' marginBottom='mb-0' placeholder='Buscar...' onClick={() => {}}/>
                        </div>
                        <div className='w-full flex flex-wrap gap-y-8 gap-x-2 py-4 justify-between'>
                            {
                                products.map(item => <ArticleCard imageSource={item.image} id={item.id} name={item.name} direction={item.direction} key={`article_${item.id}`} cardWidth='lg:w-[31%] md:w-[48%] sm:w-full'/> )
                            }
                        </div>
                        {/* <Pagination count={10} page={currentPage} onChange={(value) => { setCurrentPage(value.);
                        console.log(currentPage);}}/> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}