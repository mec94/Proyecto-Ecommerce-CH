import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div className="cartWidget max-w-10">
            <img src={cart} alt="cart-widget"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget