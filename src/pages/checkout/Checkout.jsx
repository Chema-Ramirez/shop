import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import './checkout.css'

const Checkout = () => {
    const { state } = useCart();
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        cvv: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/order-summary");
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <h3>Products in your cart</h3>


            {state.cart.length > 0 && (
                <div>
                    <h3>Payment information</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="cardNumber">Card number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={paymentInfo.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cardHolder">Cardholder</label>
                            <input
                                type="text"
                                id="cardHolder"
                                name="cardHolder"
                                value={paymentInfo.cardHolder}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="expirationDate">Expiration date</label>
                            <input
                                type="month"
                                id="expirationDate"
                                name="expirationDate"
                                value={paymentInfo.expirationDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={paymentInfo.cvv}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Pay</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
