import Category from "../Category";
import { 
    IoAmericanFootball,  IoPhonePortraitOutline, 
    IoHome, 
    IoBookSharp, 
    IoPrint,
    IoFilmSharp, 
    IoShirt, 
    IoGameController, 
    IoCar, 
    IoEllipsisHorizontalSharp 
} from 'react-icons/io5';

export default function Categories() 
{
    const categories = [
        { id:1, name:'Deportes', icon: <IoAmericanFootball id={'icon-1'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:2, name:'Electrónica', icon: <IoPhonePortraitOutline  id={'icon-2'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:3, name:'Hogar', icon: <IoHome  id={'icon-3'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:4, name:'Libros', icon: <IoBookSharp  id={'icon-4'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:5, name:'Oficina', icon: <IoPrint  id={'icon-5'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:6, name:'Películas', icon: <IoFilmSharp  id={'icon-6'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:7, name:'Ropa', icon: <IoShirt  id={'icon-7'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:8, name:'Videojuegos', icon: <IoGameController  id={'icon-8'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:9, name:'Vehículos', icon: <IoCar  id={'icon-9'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> },
        { id:10, name:'Otros', icon: <IoEllipsisHorizontalSharp  id={'icon-10'} className='mr-4 text-lg bg-[#C4C4C4] text-black border border-black rounded-xl'/> }
    ]
    return (
        <div className={'bg-[#2E2F2F] lg:w-1/4 md:w-1/4 h-full py-2 px-5'}>
            <p className='text-white font-semibold py-2'>
                Categorías
            </p>
            
            {categories.map(category => 
                <Category key={category.id} id={category.id} name={category.name} icon={category.icon}/>
            )}
        </div>
    
    )
}