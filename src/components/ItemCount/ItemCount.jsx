import { useState } from "react";

import './ItemCount.css';

// OBS: valor inicial setea en 1 ya que si pones 0 se cargaria producto null en carrito
export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };



  const decrement = () => {
    // se puso en 1 para que si pone 0, puede darle agregar cero producto a carrito
    if (count === 1) {
      return setCount(1);
    }
    setCount(count - 1);
  };


  return (
    <>
      <div className="button-container">
        <button className="action-button" onClick={decrement}>-</button>
        <p>{count}</p>
        <button className="action-button" onClick={increment}>+</button>
      </div>

      <br />
      <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
};