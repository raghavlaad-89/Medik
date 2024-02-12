import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationTop from '../components/navigationTop/NavigationTop';
import CollectionItems from '../components/collectionItems/CollectionItems';
import ArrowButton from '../components/arrowButton/ArrowButton';

export default function CollectionPage() {
    return (
        <>
            <Header />
            <NavigationTop path="Collection" />
            <CollectionItems />
            <ArrowButton />
            <Footer />
        </>
    )
}