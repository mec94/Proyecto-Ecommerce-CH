import { useEffect, useState } from "react";

export default function useProductData(id) {
    
    const [productData, setProductData] = useState({title: "Cargando", category: "Cargando"})
    
    const getProductData = () => {

        fetch("/src/components/JSON/ItemListContainer.json")

        .then (function(response) {
            return response.json()
        } )

        .then (function(myJson) {
            setProductData(myJson.products[id - 1])
        } )
    }

    useEffect(
        () => {
            getProductData()
    },[] )

    return productData;
}