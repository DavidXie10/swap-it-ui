
import { Link } from "react-router-dom";

export default function ArticleCard({id, imageSource, cardWidth, cardHeight, name, direction, description, imageWidth, imageHeight}) {
    return (
        <div className={`${cardWidth || 'w-50'} ${cardHeight || 'h-50'} border border-neutral-400`}>
            <div>
                <Link to={`/article/${id}`}>
                    <img className={`${imageWidth || 'w-full'} ${imageHeight || "h-full min-h-36 max-h-40"} border border-b-neutral-400` } src={imageSource} alt={description || 'Artículo de catálogo'} />
                </Link>
            </div>
            <div className="p-4 pt-4">
                <p className="font-bold text-sm">Nombre: <span className="font-normal">{name}.</span></p>
                <p className="font-bold text-sm">Dirección: <span className="font-normal">{direction}.</span></p>
            </div>
        </div>
    )
}
