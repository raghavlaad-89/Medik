import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import  HomePage from '../src/pages/HomePage'
import AboutPage from '../src/pages/AboutPage'
import "./index.css";
import CollectionPage from '../src/pages/CollectionPage';
import ContactUsPage from './pages/ContactUsPage';
import ShopPage from './pages/ShopPage';
import MyAccount from './pages/MyAccount';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/collection" element={<CollectionPage />}/>
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/contact" element={<ContactUsPage />}/>
          <Route path="/myaccount" element={<MyAccount />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;