import "./styles/App.css";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";


function App() {
  return (
    <div className="app">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/success"
          element={<OrderSuccess />}
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;