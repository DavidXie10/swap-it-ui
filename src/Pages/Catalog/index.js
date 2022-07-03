import AlertMessage from '../../Components/AlertMessage';
import ArticleCard from '../../Components/ArticleCard';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import Label from '../../Components/Label';
import Spinner from '../../Components/Spinner';
import {clearState} from '../../Slices/item/itemSlice';
import { setLoading, unsetLoading } from '../../Slices/app/appSlice';
import { RiEqualizerLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';


export default function Catalog() {
    const [items, setItems] = useState(null);
    const [localErrorMessage, setLocalErrorMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(0);
    const loading = useSelector( (state) => state.app.loading );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearState());
        const fetchItems = async () => {
            dispatch(setLoading());
            const itemFetch = await fetch(`http://localhost:8000/items/`);
            const itemJSON = await itemFetch.json();
            if(itemFetch.status !== 200){
                setLocalErrorMessage(itemJSON.message);
            } else {
                setItems(itemJSON);
                setPageCount(Math.ceil(itemJSON.length / itemsPerPage));
                setLocalErrorMessage('');
            }
            dispatch(unsetLoading());
        } 
        fetchItems();
    }, [dispatch]);

    useEffect(() => {
        dispatch(clearState());
        const fetchItems = async () => {
            dispatch(setLoading());
            const itemsFetch = await fetch(`http://localhost:8000/items/${selectedCategory}/items`);
            const itemsJSON = await itemsFetch.json();
            if(itemsFetch.status !== 200){
                setLocalErrorMessage(itemsJSON.message);
            } else {
                setItems(itemsJSON);
                //setPageCount(Math.ceil(itemsJSON.length / itemsPerPage)); 
                setSearchedItems(null);
                setSearchedWord('');
                setLocalErrorMessage('');
            }
            dispatch(unsetLoading());
        } 
        fetchItems();

    }, [dispatch, selectedCategory]);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(2);
    const [pageCount, setPageCount] = useState(0);
    // const numberOfItemsVistited = currentPage * itemsPerPage;
    // const displayItems = items
    //     .slice(
    //         numberOfItemsVistited, 
    //         numberOfItemsVistited + itemsPerPage
    //     )
    //     .map((item) => item);
        
    // console.log(displayItems);
    const totalPages = 5/*Math.ceil(items.length / itemsPerPage)*/;
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const [searchedWord, setSearchedWord] = useState(''); 
    const [searchedItems, setSearchedItems] = useState(null); 

    const handleClick = () => {
        if(searchedWord){
            let itemsBySearch = [];
            items.map((item) => {
                if(item.name.toLowerCase().includes(searchedWord.toLowerCase()))
                    itemsBySearch.push(item);
            })
            setSearchedItems(itemsBySearch);
            setPageCount(Math.ceil(itemsBySearch.length / itemsPerPage)); 
        } else {
            setSearchedItems(null);
        }
    }

    const [showMobileCategories, setShowMobileCategories] = useState(false);

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header/>
            {localErrorMessage ? <AlertMessage message={localErrorMessage} success={false} /> : <></>}
            <div className={`lg:hidden md:hidden z-20 ${showMobileCategories?'sm:block':'sm:hidden'}`}>
                <div onClick={() => setShowMobileCategories(false) } className='fixed top-0 left-0 h-full w-full cursor-pointer' ></div>
                <div className='fixed top-16 h-full w-2/3 bg-slate-800'>
                    <Categories defaultCategory={selectedCategory} onClick= {(idCategory) => {
                        setSelectedCategory(idCategory);
                    }}/>
                </div>
            </div>
            <div className='p-8 w-full sm:px-6 md:px-8 lg:px-16'>
                <Label text='Catálogo' width='w-full' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                
                <div className='flex mt-5 text'>
                    <div className='mr-10 lg:block md:block sm:hidden'>
                        <Categories defaultCategory={selectedCategory} onClick= {(idCategory) => {
                            setSelectedCategory(idCategory);
                        }}/>
                    </div>
                    
                    <div className='w-full'>
                        <div className='flex items-center w-full'>
                            <RiEqualizerLine className='text-3xl top-[10px] mr-2 lg:hidden md:hidden cursor-pointer' onClick={() => setShowMobileCategories(true) }/>
                            <Input 
                            type='search' 
                            marginBottom='mb-0' 
                            placeholder='Buscar...' 
                            onChange={(evnt) => {setSearchedWord(evnt.target.value); console.log("search: "+searchedWord);}}
                            onClick={handleClick}/>
                        </div>
                        <div className='w-full flex flex-wrap gap-y-8 gap-x-6 py-4 justify-between'>
                            {
                                searchedItems?
                                (
                                  searchedItems.map(item => <ArticleCard imageSource={item.photoUrls[0]} id={item.itemId} name={item.name} direction={item.location} key={`article_${item.itemId}`} cardWidth='lg:w-[30%] md:w-[47%] sm:w-full'/> )
                                )
                                : items ? 
                                (
                                    items.map(item => <ArticleCard imageSource={item.photoUrls[0]} id={item.itemId} name={item.name} direction={item.location} key={`article_${item.itemId}`} cardWidth='lg:w-[30%] md:w-[47%] sm:w-full'/> )
                                )
                                :
                                (
                                    <div className='my-4 '>
                                        <Label text='En este momento no hay productos para mostrar.' width='w-full' height='h-full' textposition='text-left' size='lg:text-2xl md:text-2xl sm:text-lg' font='font-bold'/>          
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <ReactPaginate
                            previousLabel={<IoChevronBack/>}
                            nextLabel={<IoChevronForward/>}
                            pageCount={totalPages}
                            onPageChange={handlePageChange}
                            containerClassName={"flex w-full h-10 px-4 justify-between m-auto bg-[#FAFAFA] items-center"}
                            pageLinkClassName={"p-2 font-bold cursor-pointer rounded-full "}
                            disabledClassName={"text-gray-400"}
                            activeClassName={"text-[#51E5FF] bg-white border rounded-md p-[3px]"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        )
    )
}