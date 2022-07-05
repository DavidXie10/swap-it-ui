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

import {iconCategoryClasses} from '../../utils/constants'

export default function Categories({defaultCategory, onClick}) {
    const selectedCategory = defaultCategory;
    const iconColor = (id) => selectedCategory === id?'bg-[#51E5FF]':'bg-[#C4C4C4]';

    const categories = [
        { id:0, name:'Todas', icon: <IoGrid className={`${iconCategoryClasses} ${iconColor(0)}`}/> },
        { id:1, name:'Deportes', icon: <IoAmericanFootball className={`${iconCategoryClasses} ${iconColor(1)}`}/> },
        { id:2, name:'Electrónica', icon: <IoPhonePortraitOutline className={`${iconCategoryClasses} ${iconColor(2)}`}/> },
        { id:3, name:'Hogar', icon: <IoHome className={`${iconCategoryClasses} ${iconColor(3)}`}/> },
        { id:4, name:'Libros', icon: <IoBookSharp className={`${iconCategoryClasses} ${iconColor(4)}`}/> },
        { id:5, name:'Oficina', icon: <IoPrint className={`${iconCategoryClasses} ${iconColor(5)}`}/> },
        { id:6, name:'Películas', icon: <IoFilmSharp  className={`${iconCategoryClasses} ${iconColor(6)}`}/> },
        { id:7, name:'Ropa', icon: <IoShirt className={`${iconCategoryClasses} ${iconColor(7)}`}/> },
        { id:8, name:'Videojuegos', icon: <IoGameController className={`${iconCategoryClasses} ${iconColor(8)}`}/> },
        { id:9, name:'Vehículos', icon: <IoCar className={`${iconCategoryClasses} ${iconColor(9)}`}/> },
        { id:10, name:'Otros', icon: <IoEllipsisHorizontalSharp className={`${iconCategoryClasses} ${iconColor(10)}`}/> }
    ]
    
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
                    onClick(category.id);
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