import DataTable from "@/Components/DataTable/DataTable";
import { variationTableColumns } from "@/Pages/VariationsPage/VariationTable/VariationTableColumns";

export default function VariationTable() {
	return (
		<div>
			<DataTable
				searchColumn={"title"}
				searchPlaceholder={"Search Variation"}
				columns={variationTableColumns}
				data={[]}
			/>
		</div>
	);
}
