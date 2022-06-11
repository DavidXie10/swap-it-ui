import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import DragAndDrop from '../../Components/DragAndDrop'

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

    const handleUploadedFile = (inputFiles) => {
        let updateFileList = {
            ...fileList
        };

        let inputFilesCounter = 0;
        
        for(let counter = updateFileList.length; inputFilesCounter < inputFiles.length; ++inputFilesCounter, ++counter){
            inputFiles[inputFilesCounter].id = fileId;
            updateFileList[counter] = inputFiles[inputFilesCounter];
        }

        updateFileList.length += inputFiles.length;
        setFileId(fileId + 1);
        setFileList(updateFileList);
    };

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
            images.push(<img src={URL.createObjectURL(fileList[file])} alt="test" width={'70px'} height={'70px'}/>);
        }
        return images;
    }

    return (
        <>
            <Header />
            <div className='p-8 w-full sm:px-6 md:px-8 lg:px-16 mb-8'>
                {
                    
                }
                <div className='flex w-full'>
                    <Label text='Agregar un artículo' width='w-full' height='h-full' size='lg:text-4xl md:text-4xl sm:text-2xl' />
                </div>
                <div className='mt-8 mb-5 w-full'>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <Input placeholder='Título del artículo' width='w-full' onChange={(evt) => handleChange('name', evt.target.value)}/>             
                        </div>
                        <div className='px-4'></div>
                        <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <input id='acquisitionDate' type='date' min='1997-01-01' max={getCurrentDate()} className='w-full h-10 px-4 mb-5 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600' onChange={(evt) => handleChange('acquisitionDate', evt.target.value)} />
                        </div>
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <Input placeholder='Ubicación' width='w-full' onChange={(evt) => handleChange('location', evt.target.value)}/>             
                        </div>
                        <div className='px-4'></div>
                        <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <select 
                                className='w-full h-10 px-4 mb-5 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' 
                                onChange={(evt) => handleChange('itemState', evt.target.value)}
                            >
                                <option disabled className='w-full' label='Estado' value={-1}></option>
                                <option className='w-full' label='Nuevo' value={1}></option>
                                <option className='w-full' label='Usado' value={2}></option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <select
                                className='w-full h-10 px-4 mb-5 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' 
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
                        </div>
                    </div>
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <textarea rows={3} className='w-full px-4 mb-5 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 pt-2' placeholder='¿Qué buscas para intercambiar?' onChange={(evt) => handleChange('desiredSwapItems', evt.target.value)} />
                        </div>
                    </div>
                    <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                            <DragAndDrop handleChange={handleUploadedFile} fileList={fileList} />
                        </div>
                    </div>
                    {fileList.length > 0 && <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap'>
                        {showUploadedImages()}
                    </div>}
                    <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap justify-end'>
                        <Button label='Agregar' textcolor='text-white' width='w-56' height='h-12' />
                    </div>
                </div>  

            </div>

            <Footer />
        </>
    )
}
