import DataTable from "@/Components/DataTable/DataTable";
import {
	VariationTableColumn,
	variationTableColumns
} from "@/Pages/VariationsPage/VariationTable/VariationTableColumns";
import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import {variationsTableQuery} from "@/Services/variationService";

interface VariationTableProps {
	variations: VariationTableColumn[];
	filterType?: 'ACTION' | 'CONFIRMED' | 'ARCHIVED';
}

export default function VariationTable({variations}: VariationTableProps) {
	const {data} = useSuspenseQuery(variationsTableQuery, {variables: {input: {}}})
	console.log(data.searchVariations)
	return (
		<div>
			<DataTable
				searchColumn={"title"}
				searchPlaceholder={"Search Variation"}
				secondarySearchColumn={'jobName'}
				secondarySearchPlaceholder={'Search by job'}
				columns={variationTableColumns}
				data={variations}
			/>
		</div>
	);
}
