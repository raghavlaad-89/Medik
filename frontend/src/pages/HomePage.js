import Header from '../components/header/Header';
import CoverPhoto from '../components/coverPhoto/CoverPhoto';
import OurProducts from '../components/ourProducts/OurProducts';
import MaskShopTimer from '../components/maskShopTimer/MaskShopTimer';
import NewsletterSub from '../components/newsletterSub/NewsletterSub';
import Footer from '../components/footer/Footer';
import SanitizerCard from '../components/sanitizeCard/SanitizerCard';
import SpecialProducts from '../components/specialProducts/SpecialProducts';

export default function HomePage() {
    return (
        <>
            <Header />
            <CoverPhoto />
            <SanitizerCard />
            <OurProducts />
            <MaskShopTimer />
            <SpecialProducts />
            <NewsletterSub />
            <Footer />
        </>
    )
}