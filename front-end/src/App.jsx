import React, { useContext } from "react";
import HomePage from "./Components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AddtoCart from "./Components/AddToCart/AddtoCart";
import ProductFilters from "./Components/ProductPage/ProductFilters";
import ProductOverView from "./Components/ProductOverView/ProductOverView";
import Stepper_bar from "./Components/Stepper_Form/Stepper_bar";
import OrderMainpage from "./Components/ProfileOrderPage/OrderMainPage";
import AccountOrderMainPage from "./Components/AccountOrderPage/AccountOrderMainPage";
import PageNotFound from "./Components/PageNotFount/PageNotFound";
import Register from "./Components/Login Register/Register";
import Login from "./Components/Login Register/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./Components/PaymentPages/Success";
import Cancel from "./Components/PaymentPages/Cancel";
import AppContext from "../context/AppContext";
import Admin from "./Components/Admin/Admin";
import Spiners from "./Components/Spiner/Spiners";
import ProductAdd from "./Components/Admin/ProductAdd";
import AllProductList from "./Components/Admin/AllProductList";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import AllUser from "./Components/Admin/AllUser";
function App() {
  const { isAuthenticate, user, role } = useContext(AppContext);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<AddtoCart />} />
        <Route
          path="/:levelOne/:levelTwo/:levelThre"
          element={<ProductFilters />}
        />
        <Route path="/product/:productId" element={<ProductOverView />} />
        <Route path="/checkout" element={<Stepper_bar />} />
        <Route path="/account/orders" element={<OrderMainpage />} />
        <Route
          path="/account/order/:orderId"
          element={<AccountOrderMainPage />}
        />
        {isAuthenticate && role == "admin" ? (
          <Route path="/">
            <Route path="/admin-dashboard" element={<Admin />} />
            <Route path="/add-product" element={<ProductAdd />} />
            <Route path="/all-product" element={<AllProductList />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/all-users" element={<AllUser />} />
          </Route>
        ) : (
          <Route path="/admin-dashboard" element={<Spiners />} />
        )}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </>
  );
}

export default App;
