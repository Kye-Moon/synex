import EnquiryForm from "@/Components/EnquiryForm/EnquiryForm";
import PageContentSection from "@/Components/PageContentSection";
import VarifyProductContent from "@/Components/VarifyProductContent";

export default function VarifyMoreInfo() {
    return (
        <div>
            <PageContentSection>
                <EnquiryForm appName={"Varify"}/>
            </PageContentSection>
            <PageContentSection>
                <VarifyProductContent/>
            </PageContentSection>
        </div>
    )
}