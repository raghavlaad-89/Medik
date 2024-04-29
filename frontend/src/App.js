import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import "./index.css";
import CollectionPage from "../src/pages/CollectionPage";
import ContactUsPage from "./pages/ContactUsPage";
import ShopPage from "./pages/ShopPage";
import MyAccount from "./pages/MyAccount";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogPage from "./pages/BlogPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PrivateRoute from "./components/PrivateRoute";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrder from "./pages/PlaceOrderPage";
import AdminRoute from "./components/AdminRoute";
import OrderListPage from "./pages/admin/OrderListPage";
import ProductListPage from "./pages/admin/ProductListPage";
import ProductEditPage from "./pages/admin/ProductEditPage";
import UserListPage from "./pages/admin/UserListPage";
import UserEditPage from "./pages/admin/UserEditPage";
import OrderPage from "./pages/OrderPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<MyAccount />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path='/page/:pageNumber' element={<ShopPage />} />

          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/order/:id" element={<OrderPage />} />
          </Route>


          {/* Admin Routes */}
          <Route path="" element={<AdminRoute />}>
            <Route path="/admin/orderlist" element={<OrderListPage />} />
            <Route path="/admin/productlist" element={<ProductListPage />} />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListPage />}
            />
            <Route path="/admin/userlist" element={<UserListPage />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditPage />}
            />
            <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
