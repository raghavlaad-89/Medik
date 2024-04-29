import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationTop from '../components/navigationTop/NavigationTop';
import ArrowButton from '../components/arrowButton/ArrowButton';
import ContactEnquire from '../components/contactEnquire/ContactEnquire';

export default function ContactUsPage() {
    return (
        <>
            <Header />
            <NavigationTop path="Contact" />
            <ContactEnquire />
            <ArrowButton />
            <Footer />
        </>
    )
}