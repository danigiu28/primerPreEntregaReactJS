import cart from "../assets/images/minecart.svg";

const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn position-relative">
                <img src={cart} alt="Carrito" width={18} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black">0
                </span>
            </button>
        </>
    )
}

export default CartWidget;