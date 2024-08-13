import { useEffect, useState } from "react";

export default function useCategoryData(id) {
    
    const [categoryData, setCategoryData] = useState({name: "Cargando", url: "Cargando"})
    
    const getCategoryData = () => {

        fetch("/src/components/JSON/CategoryList.json")

        .then (function(response) {
            return response.json()
        } )

        .then (function(myJson) {

                // Buscar la categoría que coincide con {id}

                const foundCategory = myJson.categories.find(
                    category => category.name.toLowerCase() === id.toLowerCase()
                )
                if (foundCategory) {
                    setCategoryData(foundCategory);
                } else {
                    // Si no se encuentra la categoría, establecer un estado de error
                    console.error(`La categoría '${id}' no se encontró.`);
                }
        } )
    }

    useEffect(
        () => {
            getCategoryData()
    },[id] )

    return categoryData;
}