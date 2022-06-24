
import { Link } from "react-router-dom";

export default function ArticleCard({id, imageSource, cardWidth, cardHeight, name, direction, description, imageWidth, imageHeight}) {
    return (
        <div className={`${cardWidth || 'w-60 '} ${cardHeight || 'h-full '} border border-neutral-400`}>
            <div className='h-full '>
                <Link to={`/article/${id}`}>
                    <img className={`${imageWidth || 'w-full'} ${imageHeight || "h-full"} border border-b-neutral-400` } src={imageSource} alt={description || 'Artículo de catálogo'} />
                </Link>
            </div>
            <div className='p-4 items-center w-full min-h-[6rem]'>
                <p className="font-bold text-sm">Nombre: <span className="font-normal ">{name}.</span></p>
                <p className="font-bold text-sm">Ubicación: <span className="font-normal">{direction}.</span></p>
            </div>
        </div>
    )
}
