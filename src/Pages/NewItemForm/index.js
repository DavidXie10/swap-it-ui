import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import DragAndDrop from '../../Components/DragAndDrop'
import CloseButton from '../../Components/CloseButton'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSuccess } from '../../Slices/item/itemSlice'
import { Link } from 'react-router-dom'

export default function NewArticleForm() {
    const [item, setItem] = useState({
        name: '',
        location: '',
        desiredSwapItems: '',
        acquisitionDate: '',
        itemState: -1,
        category: -1,
        photosUrl: [],
    });

    const [fileList, setFileList] = useState({
        length: 0
    });
    
    const [fileId, setFileId] = useState(0);
    const [fileErrorMessage, setFileErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [acquisitionDateErrorMessage, setAcquisitionDateErrorMessage] = useState('');
    const [itemStateErrorMessage, setItemStateErrorMessage] = useState('');
    const [locationErrorMessage, setLocationErrorMessage] = useState('');
    const [categoryErrorMessage, setCategoryErrorMessage] = useState('');
    const [swapItemsErrorMessage, setSwapItemsErrorMessage] = useState('');

    const handleUploadedFile = (inputFiles) => {
        if (inputFiles.length + fileList.length <= 3){
            let updateFileList = {
                ...fileList
            };
    
            let inputFilesCounter = 0;
            
            for(let counter = updateFileList.length; inputFilesCounter < inputFiles.length; ++inputFilesCounter, ++counter){
                inputFiles[inputFilesCounter].id = fileId;
                updateFileList[counter] = inputFiles[inputFilesCounter];
            }
    
            updateFileList.length += inputFiles.length;
            setFileErrorMessage('');
            setFileId(fileId + 1);
            setFileList(updateFileList);
        }else{
            setFileErrorMessage('Solo puede subir un máximo de 3 imágenes');
        }
    };

    const removeFile = (file) => {
        let updateFileList = {
            ...fileList
        };
        
        for(let next = file + 1; next < updateFileList.length; ++next){
            updateFileList[file] = updateFileList[next];
        }

        updateFileList.length -= 1;
        setFileList(updateFileList);
    }

    const handleChange = (key, value) => {
        console.log(value);
        console.log(typeof(value));
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

        for(let file = 0; file < fileList.length; ++file){
            images.push(
                <div className='mr-3 mt-2 w-fit relative inline-block' key={file}> 
                    <img src={URL.createObjectURL(fileList[file])} alt={`Foto del nuevo artículo`} width={'200px'} height={'80px'}/>
                    <div className="absolute top-0 right-0" onClick={() => {removeFile(file)}} >
                        <CloseButton width="w-8" height="h-8" textColor={'text-[#51e5ff]'}/> 
                    </div>
                </div>
            );
        }
        return images;
    }

    const validateInputs = () => {
        return item.name.trim() === '' || item.acquisitionDate.trim() === '' || item.location.trim() === '' || item.desiredSwapItems.trim() === '' || item.itemState === -1 || item.category === -1 || fileList.length === 0;
    }

    const isValidForm = () => {
        if(item.name.trim() === ''){
            setNameErrorMessage('Por favor ingrese el nombre del artículo');
        }else{
            setNameErrorMessage('');
        }
        if(item.acquisitionDate.trim() === ''){
            setAcquisitionDateErrorMessage('Por favor ingrese la fecha de adquisición');
        }else{
            setAcquisitionDateErrorMessage('');
        }
        if(item.location.trim() === ''){
            setLocationErrorMessage('Por favor ingrese la ubicación');
        }else{
            setLocationErrorMessage('');
        }
        if(item.desiredSwapItems.trim() === ''){
            setSwapItemsErrorMessage('Por favor ingrese los artículos por los que quiere intercambiar');
        }else{
            setSwapItemsErrorMessage('');
        }
        if(item.itemState === -1){
            setItemStateErrorMessage('Por favor seleccione el estado del artículo');
        }else{
            setItemStateErrorMessage('');
        }
        if(item.category === -1){
            setCategoryErrorMessage('Por favor seleccione una categoría');
        }else{
            setCategoryErrorMessage('');
        }
        if(fileList.length === 0){
            setFileErrorMessage('Por favor suba al menos una imagen');
        }else{
            setFileErrorMessage('');
        }

        return validateInputs();
    }

    const success = useSelector(
        (state) => state.item.success
    );

    const dispatch = useDispatch();

    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            {success ? (
                <>
                    <div className='p-8 w-full sm:px-6 md:px-8 lg:px-16'>
                        <div className="sm:px-6 md:px-8 lg:px-16 flex p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                            <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <div>
                                <span className="font-medium">Artículo creado exitosamente.</span> 
                            </div>
                        </div>
                        
                    </div>
                    <div className='sm:px-6 md:px-8 lg:px-16 flex p-4'>
                        <button className={`flex bg-[#51e5ff] text-white w-80 h-12 rounded-md font-bold text-lg`}> 
                            <Link to='/catalog' className='flex w-full h-full flex-col justify-center'>
                                Regresar al catálogo
                            </Link>
                        </button>
                    </div>
                </>
        ) : (
            <form className='p-8 w-full sm:px-6 md:px-8 lg:px-16 mb-2'>
                <div className='flex w-full'>
                    <Label text='Agregar un artículo' width='w-full' height='h-full' size='lg:text-4xl md:text-4xl sm:text-2xl' />
                </div>
                <div className='mt-8 mb-5 w-full'>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <Input id={'articleName'} placeholder='Título del artículo' width='w-full' marginBottom={'mb-0'} onChange={(evt) => handleChange('name', evt.target.value)}/>             
                            </div>
                            <div className='pt-2'>
                                {nameErrorMessage && <p className="text-red-500 font-bold">{nameErrorMessage}</p>}
                            </div>
                        </div>
                        <div className='px-4'></div>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <input id='acquisitionDate' type='date' min='1997-01-01' max={getCurrentDate()} className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid mb-0 border-gray-600' onChange={(evt) => handleChange('acquisitionDate', evt.target.value)} />
                            </div>
                            <div className='pt-2'>
                                {acquisitionDateErrorMessage && <p className="text-red-500 font-bold">{acquisitionDateErrorMessage}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <Input id={'location'} placeholder='Ubicación' width='w-full' marginBottom={'mb-0'} onChange={(evt) => handleChange('location', evt.target.value)}/>         
                            </div>    
                            <div className='pt-2'>
                                {locationErrorMessage && <p className="text-red-500 font-bold">{locationErrorMessage}</p>}
                            </div>    
                        </div>
                        <div className='px-4'></div>
                        <div className='lg:flex md:flex w-full sm:flex-wrap mb-4'>
                            <div className='flex w-full'>
                                <select 
                                    className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' 
                                    onChange={(evt) => handleChange('itemState', parseInt(evt.target.value))}
                                >
                                    <option disabled selected className='w-full' label='Seleccione un estado' value={-1}></option>
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
                                className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' 
                                onChange={(evt) => handleChange('category', parseInt(evt.target.value))}
                            >
                                <option disabled selected className='w-full' label='Seleccione una categoría' value={-1}></option>
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
                            <textarea rows={3} id={'swapItems'} className='w-full px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 pt-2' placeholder='¿Qué buscas para intercambiar?' onChange={(evt) => handleChange('desiredSwapItems', evt.target.value)} />
                        </div>
                    </div>
                    <div className='pt-2 mb-4'>
                            {swapItemsErrorMessage && <p className="text-red-500 font-bold">{swapItemsErrorMessage}</p>}
                        </div>
                    <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <DragAndDrop handleChange={handleUploadedFile} fileList={fileList} />
                        </div>
                        
                    </div>
                    
                    {fileErrorMessage && <span className="text-red-500 sm:mt-4 font-bold">{fileErrorMessage}</span>}
                    { 
                        <p className='text-[#2e2f2f] font-bold pt-4'> 
                            { fileList.length > 0 ? `Archivos cargados:` : 'Aún no se han subido archivos'}
                        </p> 
                    }
                    {fileList.length > 0 && <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap mb-2'>
                        {showUploadedImages()}
                    </div>}
                    <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap justify-end mt-4'>

                        <Button type={'button'} label='Agregar' textcolor='text-white' width='w-56' height='h-12' onClick={() => {
                            if(isValidForm()){
                                console.log('Todo bien');
                            }else{
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
