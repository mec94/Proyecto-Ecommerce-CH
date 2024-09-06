
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Los 'id' los borramos, ya que Firebase los crea
const products = 
[
    {
        name: "Módulo Pantalla Samsung Galaxy J5",
        price: 50159,
        category: "pantallas",
        stock: 4,
        img: "Modulo Samsung Galaxy J5",
        description: "Módulo de pantalla completo original para reemplazo en Samsung Galaxy J5"
    },
    {
        name: "Módulo Pantalla Xiaomi MI A2",
        price: 83999,
        stock: 3,
        category: "pantallas",
        img: "Modulo Xiaomi MI A2",
        description: "Módulo de pantalla original para reemplazo en Xiaomi MI A2"
    },
    {
        name: "Bateria iPhone 12",
        price: 72799,
        stock: 4,
        category: "baterias",
        img: "Bateria iPhone 12",
        description: "Bateria de reemplazo para iPhone 12"
    },
    {
        name: "Cable Flex Interconexion Main para Motorola Moto G9",
        price: 9499,
        stock: 7,
        category: "cables",
        img: "Cable Flex Moto G9",
        description: "Cable interconexión con placa main de reemplazo para Moto G9"
    },
    {
        name: "Cable Flex OnePlus 11",
        price: 4199,
        stock: 3,
        category: "cables",
        img: "Cable Flex OnePlus 11",
        description: "Cable flex de reemplazo para OnePlus 11"
    },
    {
        name: "Sensor Huella OnePlus 11",
        price: 20199,
        stock: 5,
        category: "sensores",
        img: "Sensor Huella OnePlus 11",
        description: "Sensor huella dactilar reemplazo para modelo OnePlus 11"
    },
    {
        name: "Sensor Huella Galaxy A15",
        price: 29499,
        stock: 4,
        category: "sensores",
        img: "Sensor Huella Galaxy A15",
        description: "Sensor huella dactilar reemplazo para modelo Galaxy A15"
    },
    {
        name: "Cámara Sony Xperia 1V",
        price: 68549,
        stock: 6,
        category: "camaras",
        img: "Camara Sony Xperia 1V",
        description: "Cámara original de reemplazo para Sony Xperia 1V"
    },
    {
        name: "Cámara Oppo Find X6 Pro",
        price: 42949,
        stock: 8,
        category: "camaras",
        img: "Camara oppo Find X6 Pro",
        description: "Cámara original de reemplazo para Camara oppo Find X6 Pro"
    }
];

// La siguiente funcion, la ejecutamos en el archivo 'ItemListContainer.jsx'
// OBS se debe generar una sola vez para cargar los datos y despues se borra
/*
useEffect(() => {
    seedProducts()
  }, [category])
*/

export const seedProducts = () => {

    products.forEach(product => {
        // Agregamos el producto a nuestra base de datos
        addDoc(collection(db, "products"), product)
    })

}
