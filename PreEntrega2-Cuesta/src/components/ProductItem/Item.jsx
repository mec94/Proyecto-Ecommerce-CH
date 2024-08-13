import { Link } from 'react-router-dom'

export default function Item ({details}) {
 
    return (
        
            <div className="block border-solid border-2 border-slate-500">
                <p>
                    Nombre: {details.title}
                </p>

                <p>
                    Precio: {details.price}
                </p>
                <Link to={`/product/${details.id}/about`}>
                    Saber más
                </Link>
            </div>
    ) 
}