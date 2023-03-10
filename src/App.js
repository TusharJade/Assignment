import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import ProductListingPage from "./Pages/ProductListingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-products" element={<ProductListingPage />} />
      </Routes>
    </>
  );
}

export default App;
