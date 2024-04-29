import ArrowButton from "../components/arrowButton/ArrowButton";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavigationTop from "../components/navigationTop/NavigationTop";
import ShopCategoryList from "../components/shopCategoryList/ShopCategoryList";
import "../components/shopProducts/ShopPage.css";
import ProductDetails from "../components/productDetails/ProductDetails";
import Review from "../components/giveReview/Review";

export default function ProductDetailPage() {
    return(
        <>
            <Header />
            <NavigationTop path="Product Details" />
            <div className='shopPageContent'>
                <div className='shopPageContent_left'>
                    <ShopCategoryList />
                </div>
                <div className='shopPageContent_right'>
                    <ProductDetails />
                </div>
            </div>
            <Review />
            <ArrowButton />
            <Footer />
        </>
    )
}