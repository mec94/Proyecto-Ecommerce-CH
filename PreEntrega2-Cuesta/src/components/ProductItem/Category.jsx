import ItemListContainer from '../JSON/ItemListContainer.json'
import Item from './Item'

function Category({details}) {

    const productMatch = ItemListContainer.products.filter(
        product => product.category.toLowerCase() == details.name.toLowerCase()
    )

    return (
        <>
            <p>
                Categoría: {details.name}
            </p>

            <div>
                {
                    productMatch.map(
                        product => <Item key={product.title} details={product}/>
                    )
                }
            </div>
        </>
    )

}

export default Category