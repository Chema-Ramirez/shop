import { Routes, Route } from "react-router-dom";
import { Home } from "./home/index";
import Login from "./login/Login";
import Checkout from "./checkout/Checkout";
import OrderSummary from "./order-summary/OrderSummary";
import Cart from "../components/cart/index";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Pages() {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<Login />} />

      {/* Ruta del carrito, accesible sin protección */}
      <Route path="/cart" element={<Cart />} />  {/* Agregamos la ruta del carrito */}

      {/* Ruta protegida para checkout */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      {/* Ruta protegida para resumen del pedido */}
      <Route
        path="/order-summary"
        element={
          <ProtectedRoute>
            <OrderSummary />
          </ProtectedRoute>
        }
      />

      {/* Ruta de inicio */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
