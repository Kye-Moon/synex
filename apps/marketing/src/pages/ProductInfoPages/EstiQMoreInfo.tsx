import EnquiryForm from "@/Components/EnquiryForm/EnquiryForm";
import PageContentSection from "@/Components/PageContentSection";
import EstiQProductContent from "@/Components/ProductInfoContent/EstiQProductContent";

export default function EstiQMoreInfo() {
    return (
        <div>
            <PageContentSection>
                <EnquiryForm appName={"EstiQ"}/>
            </PageContentSection>
            <PageContentSection>
                <EstiQProductContent/>
            </PageContentSection>
        </div>
    )
}