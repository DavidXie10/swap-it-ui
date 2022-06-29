import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AlertMessage from '../../Components/AlertMessage'
import Button from '../../Components/Button'
import CloseButton from '../../Components/CloseButton'
import DragAndDrop from '../../Components/DragAndDrop'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Input from '../../Components/Input'
import Label from '../../Components/Label'
import Spinner from '../../Components/Spinner'
import { createItem } from '../../Slices/item/requests/createItem';
import { editItem } from '../../Slices/item/requests/editItem';
import { setLoading, unsetLoading } from '../../Slices/app/appSlice'
import {clearState} from '../../Slices/item/itemSlice'

export default function ItemForm() {
    const { id } = useParams();
    const [item, setItem] = useState({ name: '', wishlist: '', acquisitionDate: '', description: '', itemState: -1, category: -1, location: -1, photoUrls: []});
    const [fileList, setFileList] = useState({fileIdCount: 0});
    const [deletedImages, setDeletedImages] = useState([]);
    const [fileErrorMessage, setFileErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [acquisitionDateErrorMessage, setAcquisitionDateErrorMessage] = useState('');
    const [itemStateErrorMessage, setItemStateErrorMessage] = useState('');
    const [locationErrorMessage, setLocationErrorMessage] = useState('');
    const [categoryErrorMessage, setCategoryErrorMessage] = useState('');
    const [wishlistErrorMessage, setWishlistErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [localErrorMessage, setLocalErrorMessage] = useState('');
    const success = useSelector( (state) => state.item.success );
    const loading = useSelector( (state) => state.app.loading );
    const errorMessage = useSelector ( (state) => state.item.errorMessage);
    const user = useSelector( (state) => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearState());
        const fetchItem = async (itemId) => {
            const itemFetch = await fetch(`http://localhost:8000/items/${itemId}`);
            const itemJSON = await itemFetch.json();
            if(itemFetch.status !== 200){
                setLocalErrorMessage(itemJSON.message);
            } else if(itemJSON.ownerUserId === user.id){
                setItem(itemJSON);
                setFileList({ fileIdCount: itemJSON.photoUrls.length });
                setLocalErrorMessage('');
            }else{
                setLocalErrorMessage('No tiene los permisos para acceder al item solicitado');
            }
        } 

        if(id !== 'new'){
            dispatch(setLoading());
            fetchItem(id);
            dispatch(unsetLoading());
        }
    }, [id, dispatch, user.id]);

    const getUrlPhotosLength = () => item.photoUrls.filter((photo) => photo !== '').length;

    const handleUploadedFile = (inputFiles) => {
        if ((getUrlPhotosLength() + inputFiles.length + (Object.keys(fileList).length - 1)) <= 3){
            let updateFileList = { ...fileList };
            let inputFilesLength = inputFiles.length;
            let inputFilesCounter = 0;
            
            for(let counter = updateFileList.fileIdCount; inputFilesCounter < inputFilesLength; ++inputFilesCounter, ++counter){
                updateFileList[counter] = inputFiles[inputFilesCounter];
            }
    
            updateFileList.fileIdCount = updateFileList.fileIdCount + inputFilesLength;
            setFileErrorMessage('');
            setFileList(updateFileList);
        }else{
            setFileErrorMessage('Solo puede subir un máximo de 3 imágenes por artículo.');
        }
    };

    const removeFile = (file) => {
        if(fileList[file]){
            let updateFileList = { ...fileList};
            delete updateFileList[file];            
            setFileList(updateFileList);
        }else{
            let updatedPhotosUrl = [...item.photoUrls];
            setDeletedImages([...deletedImages, updatedPhotosUrl[file]]);
            updatedPhotosUrl[file] = '';
            setItem({ ...item, photoUrls: updatedPhotosUrl });
        }        
    }

    const handleChange = (key, value) => {
        setItem({ ...item, [key]: value });
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

    const getImagesHtml = (length, images, fileType) => {
        let htmlImages = [];

        for(let file = 0; file < length; ++file){
            if(images[file]){
                htmlImages.push(
                    <div className='mr-3 mt-2 w-fit relative inline-block' key={file}> 
                        <img src={fileType ? URL.createObjectURL(images[file]) : images[file]} alt={`Foto del nuevo artículo`} width={'200px'} height={'80px'}/>    
                        <div className="absolute top-0 right-0" onClick={() => {removeFile(file)}} >
                            <CloseButton width="w-8" height="h-8" textColor={'text-[#51e5ff]'}/> 
                        </div>
                    </div>
                );
            }
        }  
        
        return htmlImages;
    }

    const showUploadedImages = () => {
        let images = [];
        if(id !== 'new')
            images = getImagesHtml(item.photoUrls.length, item.photoUrls, false);
        images = images.concat(getImagesHtml(fileList.fileIdCount, fileList, true));
        return images;
    }

    const areFieldsValid = () => {
        return item.name.trim() !== '' && item.acquisitionDate.trim() !== '' && item.location !== -1 && item.wishlist.trim() !== '' && item.itemState !== -1 && item.category !== -1 && item.description.trim() !== '' && (Object.keys(fileList).length !== 1 || getUrlPhotosLength() !== 0);
    };

    const isValidForm = () => {
        item.name.trim() === '' ? setNameErrorMessage('Por favor ingrese el nombre del artículo') : setNameErrorMessage('');
        item.acquisitionDate.trim() === '' ? setAcquisitionDateErrorMessage('Por favor ingrese la fecha de adquisición') : setAcquisitionDateErrorMessage('');
        item.location === -1 ? setLocationErrorMessage('Por favor seleccione la provincia de residencia') : setLocationErrorMessage('');
        item.wishlist.trim() === ''? setWishlistErrorMessage('Por favor ingrese los artículos por los que quiere intercambiar') : setWishlistErrorMessage('');
        item.itemState === -1? setItemStateErrorMessage('Por favor seleccione el estado del artículo') : setItemStateErrorMessage('');
        item.category === -1? setCategoryErrorMessage('Por favor seleccione una categoría') : setCategoryErrorMessage('');
        item.description.trim() === ''? setDescriptionErrorMessage('Por favor ingrese la descripción del artículo') : setDescriptionErrorMessage('');
        Object.keys(fileList).length === 1 && getUrlPhotosLength() === 0 ? setFileErrorMessage('Por favor suba al menos una imagen') : setFileErrorMessage('');

        return areFieldsValid();
    }

    return (
        loading ? (<Spinner />) : (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            {errorMessage ? <AlertMessage message={errorMessage} success={false} /> : <></>}
            {success ? (
                <AlertMessage success={true} message={`${id === 'new' ? 'Artículo creado exitosamente' : 'Artículo editado exitosamente'}`} buttonMessage={'Regresar al catálogo'}/>) :  localErrorMessage ? <AlertMessage success={false} message={localErrorMessage} /> :   
            (<form className='p-8 w-full sm:px-6 md:px-8 lg:px-16 mb-2'>
                <div className='flex w-full'>
                    <Label text={`${id === 'new' ? 'Agregar artículo' : 'Editar artículo'}`} width='w-full' height='h-full' size='lg:text-4xl md:text-4xl sm:text-2xl' />
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
                                <select id={'location'} value={item.location} className="w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none" onChange={(evt) => handleChange("location", parseInt(evt.target.value)) } >
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
                                <select value={item.itemState} className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' onChange={(evt) => handleChange('itemState', parseInt(evt.target.value))} >
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
                            <select value={item.category} className='w-full h-10 px-4 rounded-md focus:outline-none text-lg font-semibold border border-solid border-gray-600 bg-white appearance-none' onChange={(evt) => handleChange('category', parseInt(evt.target.value))} >
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
                            <DragAndDrop handleChange={handleUploadedFile} />
                        </div>
                    </div>
                    {fileErrorMessage && <span className="text-red-500 sm:mt-4 font-bold">{fileErrorMessage}</span>}
                    { 
                        <p className='text-[#2e2f2f] font-bold pt-4'> 
                            { Object.keys(fileList).length > 1 || getUrlPhotosLength() > 0 ? `Archivos cargados:` : 'Aún no se han subido archivos'}
                        </p> 
                    }
                    {(Object.keys(fileList).length > 1 || getUrlPhotosLength() > 0) && 
                    <div className='lg:flex md:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap mb-2'>
                        {showUploadedImages()}
                    </div>}
                    <div className='lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap w-full sm:flex-wrap justify-end mt-4'>
                        <Button type={'button'} label={`${id === 'new' ? 'Agregar' : 'Guardar cambios'}`} textcolor='text-white' width='w-56' height='h-12' onClick={() => {
                            if(isValidForm()){
                                if(id === 'new'){
                                    dispatch(createItem({item, fileList}));
                                }else{
                                    dispatch(editItem({item, fileList, deletedImages, id}));
                                }
                            }                     
                        }} />
                    </div>
                </div>  
            </form>)}
            <Footer />
        </div>)
    )
}