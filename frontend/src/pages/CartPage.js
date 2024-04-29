import React from 'react';
import Header from '../components/header/Header';
import NavigationTop from '../components/navigationTop/NavigationTop';
import ArrowButton from '../components/arrowButton/ArrowButton';
import Footer from '../components/footer/Footer';
import Cart from '../components/cart/Cart';


export default function CartPage() {
    return (
        <>
            <Header />
            <NavigationTop path="Cart" />
            <Cart />
            <ArrowButton />
            <Footer />
        </>
    )
}