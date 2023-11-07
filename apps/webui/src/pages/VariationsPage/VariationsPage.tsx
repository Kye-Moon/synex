import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import VariationTable from "@/Pages/VariationsPage/VariationTable/VariationTable";
import VariationActionTypeFilterTabs from "@/Pages/VariationsPage/VariationActionTypeFilterTabs/VariationActionTypeFilterTabs";
import JobSelect from "@/Components/JobSelect/JobSelect";

export default function VariationsPage() {
	return (
		<>
			<PageHeadingWithMetaAndActions pageHeading={"Variations"} />
			<PageContentSection>
				<div className={"flex  space-x-8"}>
					<div className={"py-5 "}>
						<VariationActionTypeFilterTabs />
					</div>
					<div className={"py-2 "}>
						<JobSelect
							value={""}
							setValue={(value) => {
								console.log(value);
							}}
						/>
					</div>
				</div>

				<VariationTable />
			</PageContentSection>
		</>
	);
}
