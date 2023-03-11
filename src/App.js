import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddToCart from "./Pages/AddToCart";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import MyOrders from "./Pages/MyOrders";
import MyProfile from "./Pages/MyProfile";
import ProductListingPage from "./Pages/ProductListingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-products" element={<ProductListingPage />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
