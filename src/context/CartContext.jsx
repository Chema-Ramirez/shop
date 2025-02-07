import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types';


const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload),
            };
        default:
            return state;
    }
};

const initialState = {
    cart: [],
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProduct = (product) => {
        dispatch({ type: ADD_PRODUCT, payload: product });
    };

    const removeProduct = (productId) => {
        dispatch({ type: REMOVE_PRODUCT, payload: productId });
    };

    const getTotal = () => {
        return state.cart.reduce((total, product) => total + product.price, 0);
    };

    return (
        <CartContext.Provider value={{ state, addProduct, removeProduct, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
