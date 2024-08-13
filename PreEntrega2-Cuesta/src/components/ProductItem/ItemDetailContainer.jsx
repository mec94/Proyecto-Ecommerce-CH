export default function ItemDetailContainer({details}) {

    return (
        <div className="block border-solid border-2 border-slate-500">
            <p>
                Nombre: {details.title}
            </p>

            <p>
                Precio: {details.price}
            </p>
            <p>
                Descripción: {details.description}
            </p>
            <p>
                Categoría: {details.category}
            </p>
        </div>
    )
}