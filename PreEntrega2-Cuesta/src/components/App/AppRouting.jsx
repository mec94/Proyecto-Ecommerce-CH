import { Routes, Route, useParams } from 'react-router-dom'
import Item from '../ProductItem/Item'
import Category from "../ProductItem/Category";
import useProductData from '../Hooks/useProductData'
import useCategoryData from "../Hooks/useCategoryData";
import ItemDetailContainer from "../ProductItem/ItemDetailContainer";

function ProductCatalog() {
    const categories = ['pantallas', 'cargadores', 'baterias', 'fundas']

    return (
        <>
            {
                categories.map( (category, index) => {
                        const catData = useCategoryData(category);
                        return <Category key={index} details={catData} />
                    }
                )
            }
        </>
    )
}

function ProductData() {

    const {productId} = useParams();
    const productData = useProductData(productId);

    return <Item details={productData}/>;
}

function ProductDetail() {
    const {productId} = useParams();
    const productData = useProductData(productId);
    return <ItemDetailContainer details={productData}/>;
}

function CategoryDetail() {
    const {categoryId} = useParams();
    const categoryData = useCategoryData(categoryId);

    return <Category details={categoryData} />;
}

function AppRouting() {

    return (
        <Routes>
            <Route
                path="/product/:productId"
                element={<ProductData />}
            />

            <Route
                path="/product/:productId/about"
                element={<ProductDetail />}
            />

            <Route
                path="/category/:categoryId"
                element={<CategoryDetail />}
            />

            <Route
                path="*" 
                element={<h1>404</h1>} 
            />

            <Route
                path="/"
                element={<ProductCatalog />}
            />
        </Routes>
    )
}

export default AppRouting
