import Header from "@/Components/Header";
import Hero1 from "@/Components/Hero1";
import ProductsGrid from "@/Components/ProductsGrid";
import VarifyProductContent from "@/Components/VarifyProductContent";
import Footer from "@/Components/Footer";

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
