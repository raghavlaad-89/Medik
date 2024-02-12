import ArrowButton from "../components/arrowButton/ArrowButton";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavigationTop from "../components/navigationTop/NavigationTop";
import MyAccForm  from "../components/myAccForm/MyAccForm";

export default function MyAccount() {
    return(
        <>
            <Header />
            <NavigationTop />
            <MyAccForm />
            <ArrowButton />
            <Footer />
        </>
    )
}