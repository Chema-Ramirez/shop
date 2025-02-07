import { useCart } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import "./ordersummary.css"

const OrderSummary = () => {
    const { state } = useCart()
    const navigate = useNavigate()

    const totalPrice = state.cart.reduce((acc, product) => acc + product.price, 0)

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            {state.cart.length === 0 ? (
                <p>You have no products in your cart</p>
            ) : (
                <div>
                    <h3>Products</h3>
                    <ul>
                        {state.cart.map((product) => (
                            <li key={product.id}>
                                {product.name} - ${product.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice}</h3>
                    <button onClick={() => navigate("/")}>Back to the shop</button>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;
