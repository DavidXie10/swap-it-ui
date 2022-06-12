import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import DragAndDrop from '../../Components/DragAndDrop'
import CloseButton from '../../Components/CloseButton'

export default function NewArticleForm() {
    const [item, setItem] = useState({
        name: '',
        location: '',
        desiredSwapItems: '',
        acquisitionDate: -1,
        itemState: -1,
        category: -1,
        photosUrl: [],
    });

    const [fileList, setFileList] = useState({
        length: 0
    });
    
    const [fileId, setFileId] = useState(0);

    const [fileErrorMessage, setFileErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('Debe ingresar campo');
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
        let articleName = document.getElementById('articleName').value.trim();
        let acquisitionDate = document.getElementById('acquisitionDate').value;
        let location = document.getElementById('location').value.trim();
        let swapItems = document.getElementById('swapItems').value.trim();

        if(articleName === ''){
            setNameErrorMessage('Debe ingresar el nombre del artículo')
        }else{
            setNameErrorMessage('');
        }
        if(acquisitionDate === ''){
            setAcquisitionDateErrorMessage('Debe ingresar el la fecha de adquisición')
        }else{
            setAcquisitionDateErrorMessage('')
        }
    }

    return (
        <>
            <Header />
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
                                    onChange={(evt) => handleChange('itemState', evt.target.value)}
                                >
                                    <option disabled className='w-full' label='Estado' value={-1}></option>
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
                                onChange={(evt) => handleChange('category', evt.target.value)}
                            >
                                <option disabled className='w-full' label='Categoría' value={-1}></option>
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
                        <Button label='Agregar' textcolor='text-white' width='w-56' height='h-12' onClick={validateInputs} />
                    </div>
                </div>  
            </form>
            <Footer />
        </>
    )
}
