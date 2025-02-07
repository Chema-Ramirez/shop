import { List, Typography, Box, Button, IconButton } from "@mui/material"
import { useCart } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete'

const Cart = () => {
  const { state, addProduct, removeProduct } = useCart()
  const navigate = useNavigate()

  const handleAddProduct = (product) => {
    addProduct(product)
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId)
  };

  return (
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Shopping Cart
      </Typography>
      <List>
        {state.cart.length === 0 ? (
          <Typography variant="body1">Your cart is empty</Typography>
        ) : (
          state.cart.map((product) => (
            <Box key={product.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">
                {product.name} - ${product.price}
              </Typography>
              <IconButton onClick={() => handleRemoveProduct(product.id)} color="error">
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
      </List>

      {/* Botón de proceder al pago solo si hay productos en el carrito */}
      {state.cart.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate("/checkout")}
        >
          Proceed to Payment
        </Button>
      )}

      {/* Añadir productos (puedes colocar este código donde lo necesites, por ejemplo en un botón o sección de productos) */}
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => handleAddProduct({ id: 1, name: 'Sample Product', price: 20 })}
      >
        Add Sample Product
      </Button>
    </Box>
  );
};

export default Cart;
