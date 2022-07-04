
import { setLoading, unsetLoading } from '../../Slices/app/appSlice';
import { RiEqualizerLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import AlertMessage from '../../Components/AlertMessage';
import ArticleCard from '../../Components/ArticleCard';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import Label from '../../Components/Label';
import Spinner from '../../Components/Spinner';
import { clearState, updateCurrentPage, updateSelectedCategory } from '../../Slices/item/itemSlice';
import { getLocationById } from '../../utils/constants';

export default function Catalog() {
    const [items, setItems] = useState(null);
    const [localErrorMessage, setLocalErrorMessage] = useState('');
    const [showMobileCategories, setShowMobileCategories] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [searchedWord, setSearchedWord] = useState(''); 
        
    const loading = useSelector( (state) => state.app.loading );
    const currentPage = useSelector( (state) => state.item.currentPage );
    const selectedCategory = useSelector( (state) => state.item.selectedCategory );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearState());
        const fetchItems = async () => {
            dispatch(setLoading());
            const itemsFetch = await fetch(`http://localhost:8000/items/${selectedCategory}/items?page=${currentPage}${searchedWord?'&keyword='+searchedWord:''}`);
            const itemsJSON = await itemsFetch.json();

            if(itemsFetch.status !== 200){
                setLocalErrorMessage(itemsJSON.message);
            } else {
                setItems(itemsJSON.items);
                setPageCount(itemsJSON.pagesCount);
                setLocalErrorMessage('');
            }
            dispatch(unsetLoading());
        } 
        fetchItems();

    }, [dispatch, selectedCategory, currentPage, searchedWord]);

    const handlePageChange = ({ selected }) => {
        dispatch(updateCurrentPage({nextPage: selected}));
    };

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between items-'>
            <Header/>
            {localErrorMessage ? <AlertMessage message={localErrorMessage} success={false} /> : <></>}
            <div className={`lg:hidden md:hidden z-20 ${showMobileCategories?'sm:block':'sm:hidden'}`}>
                <div onClick={() => setShowMobileCategories(false) } className='fixed top-0 left-0 h-full w-full cursor-pointer' ></div>
                <div className='fixed top-0 pt-12 h-full w-2/3 bg-[#2E2F2F]'>
                    <Categories defaultCategory={selectedCategory} onClick= {(idCategory) => {
                        dispatch(updateSelectedCategory({nextCategory: idCategory}));
                        dispatch(updateCurrentPage({nextPage: 0}));
                        setSearchedWord('');
                        setShowMobileCategories(false)
                    }}/>
                </div>
            </div>
            <div className='p-8 w-full sm:px-6 md:px-8 lg:px-16'>
                <Label text='Catálogo' width='w-full' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                
                <div className='flex mt-5 text'>
                    <div className='mr-10 lg:block md:block sm:hidden'>
                        <Categories defaultCategory={selectedCategory} onClick= {(idCategory) => {
                            dispatch(updateSelectedCategory({nextCategory: idCategory}));
                            dispatch(updateCurrentPage({nextPage: 0}));
                            setSearchedWord('');
                        }}/>
                    </div>
                    
                    <div className='w-full'>
                        <div className='flex items-center w-full'>
                            <RiEqualizerLine className='text-3xl top-[10px] mr-2 lg:hidden md:hidden cursor-pointer' onClick={() => setShowMobileCategories(true) }/>
                            <Input 
                                type='search' 
                                marginBottom='mb-0' 
                                value={searchedWord}
                                placeholder='Buscar...' 
                                onKeyUp={(evnt) => {
                                    if(evnt.key === 'Enter')
                                        setSearchedWord(evnt.target.value);
                                }}
                            />
                        </div>
                            {
                                items && items.length ? 
                                (
                                <>
                                    <div className='w-full flex flex-wrap gap-y-8 gap-x-6 py-4 justify-between'>
                                        {
                                            items.map(item => <ArticleCard imageSource={item.photoUrls[0]} id={item.itemId} name={item.name} direction={getLocationById(item.location)} key={`article_${item.itemId}`} cardWidth='lg:w-[30%] md:w-[47%] sm:w-full'/> )
                                        }
                                    </div>
                                    <div>
                                        <ReactPaginate
                                            previousLabel={<IoChevronBack/>}
                                            nextLabel={<IoChevronForward/>}
                                            pageCount={pageCount}
                                            initialPage={currentPage}
                                            onPageChange={handlePageChange}
                                            containerClassName={'flex w-3/5 h-10 px-4 justify-between m-auto bg-[#F1F1F1] items-center rounded-sm'}
                                            pageLinkClassName={'p-2 font-bold cursor-pointer rounded-full '}
                                            disabledClassName={'text-gray-400'}
                                            activeClassName={'text-[#51E5FF] bg-white border rounded-md p-[3px]'}
                                        />
                                    </div>
                                </>
                                )
                                :
                                (
                                    <div className='my-4 '>
                                        <Label text='En este momento no hay productos para mostrar.' width='w-full' height='h-full' textposition='text-left' size='lg:text-2xl md:text-2xl sm:text-lg' font='font-bold'/>          
                                    </div>
                                )
                            }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        )
    )
}