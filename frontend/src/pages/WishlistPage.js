import React from 'react';
import Header from '../components/header/Header';
import NavigationTop from '../components/navigationTop/NavigationTop';
import Footer from '../components/footer/Footer';
import ArrowButton from '../components/arrowButton/ArrowButton';
import Wishlist from '../components/wishlist/Wishlist';

export default function WishlistPage() {
    return (
        <>
            <Header />
            <NavigationTop path="Wishlist" />
            <Wishlist />
            <ArrowButton />
            <Footer />
        </>
    )
}