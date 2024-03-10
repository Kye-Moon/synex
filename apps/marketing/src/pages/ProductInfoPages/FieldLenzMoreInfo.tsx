import EnquiryForm from "@/Components/EnquiryForm/EnquiryForm";
import PageContentSection from "@/Components/PageContentSection";
import FieldLenzProductContent from "@/Components/ProductInfoContent/FieldLenzProductContent";

export default function FieldLenzMoreInfo() {
    return (
        <div>
            <PageContentSection>
                <EnquiryForm appName={"FieldLenz"}/>
            </PageContentSection>
            <PageContentSection>
                <FieldLenzProductContent/>
            </PageContentSection>
        </div>
    )
}