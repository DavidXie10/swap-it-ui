import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import DragAndDrop from '../../Components/DragAndDrop'
import CloseButton from '../../Components/CloseButton'
import Success from '../../Components/Success'
import { toggleSuccess } from '../../Slices/item/itemSlice'

export default function ItemForm() {
    let { id } = useParams();

    const [item, setItem] = useState({
        name: '',
        wishlist: '',
        acquisitionDate: '',
        description: '',
        itemState: -1,
        category: -1,
        location: -1,
        photosUrl: [],
    });

    const [fileList, setFileList] = useState({
        fileIdCount: 0
    });
    
    // const [fileId, setFileId] = useState(0);
    const [fileErrorMessage, setFileErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [acquisitionDateErrorMessage, setAcquisitionDateErrorMessage] = useState('');
    const [itemStateErrorMessage, setItemStateErrorMessage] = useState('');
    const [locationErrorMessage, setLocationErrorMessage] = useState('');
    const [categoryErrorMessage, setCategoryErrorMessage] = useState('');
    const [wishlistErrorMessage, setWishlistErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');

    useEffect(() => {
        // TODO: change code section when backend endpoint is implemented
        const fetchItem = async (itemId) => {
            //const itemFetch = await fetch(`http://localhost/items/${itemId}`);
            //const itemJSON = await itemFetch.json();
            //setItem(itemJSON);
            //return itemJSON.photosUrl.length;
        } 

        if(id !== 'new'){
            console.log('Ohhhhhh');
            // const count = fetchItem(id);
            
            setFileList({
                // fileIdCount: count,
                fileIdCount: 3,
            });

            setItem({
                name: 'Hola',
                wishlist: 'Hola',
                acquisitionDate: '2022-02-06',
                description: 'Hola',
                itemState: 1,
                category: 2,
                location: 2,
                photosUrl: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', 'https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1581333100576-b73befd79a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'],
            });
        }
    }, [id]);

    const success = useSelector(
        (state) => state.item.success
    );

    const dispatch = useDispatch();

    const getUrlPhotosLength = () => item.photosUrl.filter((photo) => photo !== '').length;

    const handleUploadedFile = (inputFiles) => {
        if ((getUrlPhotosLength() + inputFiles.length + (Object.keys(fileList).length - 1)) <= 5){
            let updateFileList = {
                ...fileList
            };
    
            let inputFilesCounter = 0;
            
            for(let counter = updateFileList.fileIdCount; inputFilesCounter < inputFiles.length; ++inputFilesCounter, ++counter){
                // inputFiles[inputFilesCounter].id = fileId;
                updateFileList[counter] = inputFiles[inputFilesCounter];
            }
    
            updateFileList.fileIdCount += inputFiles.length;
            setFileErrorMessage('');
            // setFileId(fileId + 1);
            setFileList(updateFileList);
        }else{
            setFileErrorMessage('Solo puede subir un máximo de 5 imágenes por artículo.');
        }
    };

    const removeFile = (file) => {
        if(fileList[file]){
            let updateFileList = {
                ...fileList
            };

            delete updateFileList[file];            
            setFileList(updateFileList);
        }else{
            let updatedPhotosUrl = [...item.photosUrl];
            updatedPhotosUrl[file] = '';
            setItem({
                ...item,
                photosUrl: updatedPhotosUrl,
            });
        }        
    }

    const handleChange = (key, value) => {
        setItem({
            ...item, 
            [key]: value,
        });
    }

    const getCurrentDate = () => {
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let month = currentMonth / 10 >= 1 ? '' : '0';
        month +=  currentMonth + 1;
        let currentDay = currentDate.getDate();
        let day = currentDay / 10 >= 1 ? '' : '0';
        day += currentDay;

        return currentDate.getFullYear() + '-' + month + '-' + day; 
    }

    const showUploadedImages = () => {
        let images = [];
        if(id !== 'new'){
            for(let file = 0; file < item.photosUrl.length; ++file){
                if(item.photosUrl[file]){
                    images.push(
                        <div className='mr-3 mt-2 w-fit relative inline-block' key={file}> 
                            <img src={item.photosUrl[file]} alt={`Foto del nuevo artículo`} width={'200px'} height={'80px'}/>    
                            <div className="absolute top-0 right-0" onClick={() => {removeFile(file)}} >
                                <CloseButton width="w-8" height="h-8" textColor={'text-[#51e5ff]'}/> 
                            </div>
                        </div>
                    );
                }
            }    
        }

        for(let file = 0; file < fileList.fileIdCount; ++file){
            if(fileList[file]){
                images.push(
                    <div className='mr-3 mt-2 w-fit relative inline-block' key={file}> 
                        <img src={URL.createObjectURL(fileList[file])} alt={`Foto del nuevo artículo`} width={'200px'} height={'80px'}/>    
                        <div className="absolute top-0 right-0" onClick={() => {removeFile(file)}} >
                            <CloseButton width="w-8" height="h-8" textColor={'text-[#51e5ff]'}/> 
                        </div>
                    </div>
                );
            }
        }

        return images;
    }

    const isValidForm = () => {
        let isValid = true;
        if(item.name.trim() === ''){
            isValid &&= false;
            setNameErrorMessage('Por favor ingrese el nombre del artículo');
        }else{
            setNameErrorMessage('');
        }
        if(item.acquisitionDate.trim() === ''){
            isValid &&= false;
            setAcquisitionDateErrorMessage('Por favor ingrese la fecha de adquisición');
        }else{
            setAcquisitionDateErrorMessage('');
        }
        if(item.location === -1){
            isValid &&= false;
            setLocationErrorMessage('Por favor seleccione la provincia de residencia');
        }else{
            setLocationErrorMessage('');
        }
        if(item.wishlist.trim() === ''){
            isValid &&= false;
            setWishlistErrorMessage('Por favor ingrese los artículos por los que quiere intercambiar');
        }else{
            setWishlistErrorMessage('');
        }
        if(item.itemState === -1){
            isValid &&= false;
            setItemStateErrorMessage('Por favor seleccione el estado del artículo');
        }else{
            setItemStateErrorMessage('');
        }
        if(item.category === -1){
            isValid &&= false;
            setCategoryErrorMessage('Por favor seleccione una categoría');
        }else{
            setCategoryErrorMessage('');
        }
        if(Object.keys(fileList).length === 1){
            isValid &&= false;
            setFileErrorMessage('Por favor suba al menos una imagen');
        }else{
            setFileErrorMessage('');
        }
        if(item.description.trim() === ''){
            isValid &&= false;
            setDescriptionErrorMessage('Por favor ingrese la descripción del artículo');
        }else{
            setDescriptionErrorMessage('');
        }

        return isValid;
    }


    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            {success ? (
                <Success message={'Artículo creado exitosamente'} buttonMessage={'Regresar al catálogo'}/>
        ) : (
            <form className='p-8 w-full sm:px-6 md:px-8 lg:px-16 mb-2'>
                <div className='flex w-full'>
                    <Label text='Agregar un artículo' width='w-full' height='h-full' size='lg:text-4xl md:text-4xl sm:text-2xl' />
                </div>
                <div className='mt-8 mb-5 w-full'>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <Input id={'name'} placeholder='Ingrese el nombre del artículo' width='w-full' marginBottom={'mb-0'} onChange={(evt) => handleChange('name', evt.target.value)} value={item.name}/>             
                            </div>
                            <div className='pt-2'>
                                {nameErrorMessage && <p className="text-red-500 font-bold">{nameErrorMessage}</p>}
                            </div>
                        </div>
                        <div className='px-4'></div>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <input id='acquisitionDate' type='date' min='1997-01-01' max={getCurrentDate()} className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid mb-0 border-gray-600' onChange={(evt) => handleChange('acquisitionDate', evt.target.value)} value={item.acquisitionDate}/>
                            </div>
                            <div className='pt-2'>
                                {acquisitionDateErrorMessage && <p className="text-red-500 font-bold">{acquisitionDateErrorMessage}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <select
                                    id={'location'}
                                    value={item.location}
                                    className="w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none"
                                    onChange={(evt) => {
                                        handleChange("location", parseInt(evt.target.value));
                                    }}
                                >
                                    <option disabled className="w-full" label="Seleccione la provincia donde se encuentra" value={-1} ></option>
                                    <option className="w-full" label="San José" value={1}></option>
                                    <option className="w-full" label="Alajuela" value={2}></option>
                                    <option className="w-full" label="Cartago" value={3}></option>
                                    <option className="w-full" label="Heredia" value={4}></option>
                                    <option className="w-full" label="Guanacaste" value={5}></option>
                                    <option className="w-full" label="Puntarenas" value={6}></option>
                                    <option className="w-full" label="Limón" value={7}></option>
                                </select>     
                            </div>    

                            <div className='pt-2'>
                                {locationErrorMessage && <p className="text-red-500 font-bold">{locationErrorMessage}</p>}
                            </div>    
                        </div>
                        <div className='px-4'></div>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <select 
                                    value={item.itemState}
                                    className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' 
                                    onChange={(evt) => handleChange('itemState', parseInt(evt.target.value))}
                                >
                                    <option disabled className='w-full' label='Seleccione el estado de su artículo' value={-1}></option>
                                    <option className='w-full' label='Nuevo' value={1}></option>
                                    <option className='w-full' label='Usado' value={2}></option>
                                </select>
                            </div>
                            <div className='pt-2'>
                                {itemStateErrorMessage && <p className="text-red-500 font-bold">{itemStateErrorMessage}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <select
                                value={item.category}
                                className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' 
                                onChange={(evt) => handleChange('category', parseInt(evt.target.value))}
                            >
                                <option disabled className='w-full' label='Seleccione una categoría' value={-1}></option>
                                <option className='w-full' label='Deportes' value={1}></option>
                                <option className='w-full' label='Electrónica' value={2}></option>
                                <option className='w-full' label='Hogar' value={3}></option>
                                <option className='w-full' label='Libros' value={4}></option>
                                <option className='w-full' label='Oficina' value={5}></option>
                                <option className='w-full' label='Películas' value={6}></option>
                                <option className='w-full' label='Ropa' value={7}></option>
                                <option className='w-full' label='Videojuegos' value={8}></option>
                                <option className='w-full' label='Vehículos' value={9}></option>
                                <option className='w-full' label='Otros' value={10}></option>
                            </select>
                            <div className='pt-2'>
                                {categoryErrorMessage && <p className="text-red-500 font-bold">{categoryErrorMessage}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex w-full sm:flex-wrap'>
                            <textarea rows={3} id={'description'} className='w-full px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 pt-2' placeholder='Ingrese la descripción del artículo' onChange={(evt) => handleChange('description', evt.target.value)} value={item.description} />
                        </div>
                    </div>
                    <div className='pt-2 mb-4'>
                        {descriptionErrorMessage && <p className="text-red-500 font-bold">{descriptionErrorMessage}</p>}
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex w-full sm:flex-wrap'>
                            <textarea rows={3} id={'wishlist'} className='w-full px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 pt-2' placeholder='Ingrese lo que busca para intercambiar' onChange={(evt) => handleChange('wishlist', evt.target.value)} value={item.wishlist} />
                        </div>
                    </div>
                    <div className='pt-2 mb-4'>
                        {wishlistErrorMessage && <p className="text-red-500 font-bold">{wishlistErrorMessage}</p>}
                    </div>
                    <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <DragAndDrop handleChange={handleUploadedFile} fileList={fileList} />
                        </div>
                        
                    </div>
                    
                    {fileErrorMessage && <span className="text-red-500 sm:mt-4 font-bold">{fileErrorMessage}</span>}
                    { 
                        <p className='text-[#2e2f2f] font-bold pt-4'> 
                            { Object.keys(fileList).length > 1 || getUrlPhotosLength() > 0 ? `Archivos cargados:` : 'Aún no se han subido archivos'}
                        </p> 
                    }
                    {(Object.keys(fileList).length > 1 || getUrlPhotosLength() > 0) && <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap mb-2'>
                        {showUploadedImages()}
                    </div>}
                    <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap justify-end mt-4'>
                        <Button type={'button'} label='Agregar' textcolor='text-white' width='w-56' height='h-12' onClick={() => {
                            if(isValidForm()){

                                dispatch(toggleSuccess());
                            }                            
                        }} />
                    </div>
                </div>  
            </form>
            )}

            <div className='p-8 w-full sm:px-6 md:px-8 lg:px-16'>
                <Button label='Toggle Success' textcolor='text-white' width='w-56' height='h-12' onClick={() => {
                    dispatch(toggleSuccess());
                }} />
            </div>
            <Footer />
        </div>
    )
}
