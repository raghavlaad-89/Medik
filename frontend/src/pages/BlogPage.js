import React from 'react';
import Header from '../components/header/Header';
import NavigationTop from '../components/navigationTop/NavigationTop';
import ArrowButton from '../components/arrowButton/ArrowButton';
import Footer from '../components/footer/Footer';
import BlogCategoryList from '../components/blogCategoryList/BlogCategoryList';
import BlogPageBlogs from '../components/blogPageBlogs/BlogPageBlogs';
import HotDeals from '../components/hotDeals/HotDeals';
import "../components/blogPageBlogs/blogPage.css";


export default function BlogPage() {
    return (
        <>
            <Header />
            <NavigationTop path="Blog" />
            <div className='blogPageContent'>
                <div className='blogPageContent_left'>
                    <BlogCategoryList />
                    <HotDeals />
                </div>
                <div className='blogPageContent_right'>
                    <BlogPageBlogs />
                </div>
            </div>
            <ArrowButton />
            <Footer />
        </>
    )
}