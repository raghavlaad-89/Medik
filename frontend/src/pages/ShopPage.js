import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationTop from '../components/navigationTop/NavigationTop';
import ArrowButton from '../components/arrowButton/ArrowButton';
import ShopCategoryList from '../components/shopCategoryList/ShopCategoryList';
import AllProducts from '../components/shopProducts/AllProducts';
import HotDeals from '../components/hotDeals/HotDeals';
import "../components/shopProducts/ShopPage.css";

export default function ShopPage() {
    return (
        <>
            <Header />
            <NavigationTop path="Shop" />
            <div className='shopPageContent'>
                <div className='shopPageContent_left'>
                    <ShopCategoryList />
                    <HotDeals />
                </div>
                <div className='shopPageContent_right'>
                    <AllProducts />
                </div>
            </div>
            <ArrowButton />
            <Footer />
        </>
    )
}