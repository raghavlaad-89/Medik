import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationTop from '../components/navigationTop/NavigationTop';
import BestInfra from '../components/bestInfra/BestInfra';
import ArrowButton  from '../components/arrowButton/ArrowButton'

export default function AboutPage() {
    return (
        <>
            <Header />
            <NavigationTop path="About" />
            <BestInfra />
            <ArrowButton />
            <Footer />
        </>
    )
}