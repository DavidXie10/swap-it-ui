import {iconCategoryClasses} from '../../utils/constants'
import { 
    IoGrid, 
    IoAmericanFootball, 
    IoPhonePortraitOutline, 
    IoHome, 
    IoBookSharp, 
    IoPrint,
    IoFilmSharp, 
    IoShirt, 
    IoGameController, 
    IoCar, 
    IoEllipsisHorizontalSharp 
} from 'react-icons/io5';
import { useState } from "react";

export default function Categories() 
{
    const categories = [
        { id:0, name:'Todas', icon: <IoGrid className={`${iconCategoryClasses}`}/> },
        { id:1, name:'Deportes', icon: <IoAmericanFootball className={`${iconCategoryClasses}`}/> },
        { id:2, name:'Electrónica', icon: <IoPhonePortraitOutline className={`${iconCategoryClasses}`}/> },
        { id:3, name:'Hogar', icon: <IoHome className={`${iconCategoryClasses}`}/> },
        { id:4, name:'Libros', icon: <IoBookSharp className={`${iconCategoryClasses}`}/> },
        { id:5, name:'Oficina', icon: <IoPrint className={`${iconCategoryClasses}`}/> },
        { id:6, name:'Películas', icon: <IoFilmSharp  className={`${iconCategoryClasses}`}/> },
        { id:7, name:'Ropa', icon: <IoShirt className={`${iconCategoryClasses}`}/> },
        { id:8, name:'Videojuegos', icon: <IoGameController className={`${iconCategoryClasses}`}/> },
        { id:9, name:'Vehículos', icon: <IoCar className={`${iconCategoryClasses}`}/> },
        { id:10, name:'Otros', icon: <IoEllipsisHorizontalSharp className={`${iconCategoryClasses}`}/> }
    ]
    
    const [selectedCategory, setSelectedCategory] = useState(0);
    return (
        <div className={'bg-[#2E2F2F] w-full h-full min-h-fit py-4 px-10 lg:text-xl md:text-lg sm:text-2xl'}>
            <p className='text-white font-semibold py-2'>
                Categorías
            </p>
            {categories.map(category => 
                <div 
                key={category.id}
                id={category.id} 
                className={`flex py-0.5 px-2 hover:bg-[#7E868F] border-black rounded-lg cursor-pointer ${selectedCategory === category.id?'bg-[#7E868F]':'bg-[#2E2F2F]'}`}
                onClick={() => {
                    console.log(selectedCategory);
                    setSelectedCategory(category.id);
                    //TODO: REQUEST
                }}
                >   
                    {category.icon} 
                    <p className='text-white'> 
                        {category.name}
                    </p>
                </div>
            )}
        </div>
    
    )
}