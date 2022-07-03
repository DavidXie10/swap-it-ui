
import { Link } from "react-router-dom";

export default function ArticleCard({id, imageSource, cardWidth, cardHeight, name, direction, description, imageWidth, imageHeight}) {
    return (
        <div className={`${cardWidth || 'w-60'} ${cardHeight || 'h-[24rem]'} border border-neutral-400`}>
            <div className='h-3/4 w-full'>
                <Link className="w-full h-full" to={`/items/${id}`}>
                    <img className='w-fit max-w-full h-fit max-h-full p-2' src={imageSource} alt={description || 'Artículo de catálogo'} />
                </Link>
            </div>
            <div className='p-4 items-center w-full h-1/4 border-t border-neutral-400'>
                <p className="font-bold text-sm">Nombre: <span className="font-normal ">{name}</span></p>
                <p className="font-bold text-sm">Ubicación: <span className="font-normal">{direction}</span></p>
            </div>
        </div>
    )
}
