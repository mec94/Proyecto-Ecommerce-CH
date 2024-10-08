import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

import './ItemDetail.css';

import { CartContext } from "../../context/CartContext";

import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {

        const item = {
            id,
            price,
            name
        }

        addItem(item, quantity)

        Swal.fire({
            icon: "success",
            title: "Se añadió el producto al carrito"
        })

    }

    return (
        <>



            <div className="custom-container">
                <div className="image-container">
                    <img src={img} alt={name} />
                </div>
                <div className="info">
                    <h5><b>{name} </b> </h5>
                    <p> {description} </p>
                    <p>Precio: ARS {price}</p>
                     <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>


        </>

    );
};