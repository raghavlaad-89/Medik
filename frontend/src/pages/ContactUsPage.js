import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationTop from '../components/navigationTop/NavigationTop';
import ArrowButton from '../components/arrowButton/ArrowButton';

export default function ContactUsPage() {
    return (
        <>
            <Header />
            <NavigationTop path="Contact" />
            <ArrowButton />
            <Footer />
        </>
    )
}