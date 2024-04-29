import ArrowButton from "../components/arrowButton/ArrowButton";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavigationTop from "../components/navigationTop/NavigationTop";
import Registeration from "../components/register/Registeration";

export default function MyAccount() {
    return(
        <>
            <Header />
            <NavigationTop path="Register" />
            <Registeration />
            <ArrowButton />
            <Footer />
        </>
    )
}