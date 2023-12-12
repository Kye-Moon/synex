import Header from "../components/Header.tsx";
import Hero1 from "../components/Hero1.tsx";
import ProductsGrid from "../components/ProductsGrid.tsx";
import VarifyProductContent from "../components/VarifyProductContent.tsx";
import Footer from "../components/Footer.tsx";

export default function HomePage() {

    return (
        <>
            <Header/>
            <Hero1/>
            <ProductsGrid/>
            <VarifyProductContent/>
            {/*<EstiQProductContent/>*/}
            <Footer/>
        </>
    )
}
