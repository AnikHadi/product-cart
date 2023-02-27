import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsDetails from "./Component/Cart/ProductDetails/ProductsDetails";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import FrontPageShop from "./Component/FrontPage/FrontPageShop/FrontPageShop";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div>
      <Header />
      {/* Date.now() */}
      <Routes>
        <Route path="/" element={<FrontPageShop />} />
        <Route path="/home" element={<FrontPageShop />} />
        <Route path="/details" element={<ProductsDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
