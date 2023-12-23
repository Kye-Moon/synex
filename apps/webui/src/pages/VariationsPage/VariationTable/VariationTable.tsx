import DataTable from "@/Components/DataTable/DataTable";
import {
	VariationTableColumn,
	variationTableColumns
} from "@/Pages/VariationsPage/VariationTable/VariationTableColumns";
import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import {variationsTableQuery} from "@/Services/variationService";
import React, {useMemo} from "react";
import {da} from "date-fns/locale";
import TableEmptyState from "@/Components/TableEmptyState";

interface VariationTableProps {
	filterType?: 'ACTION' | 'CONFIRMED' | 'ARCHIVED';
}

export default function VariationTable({}: VariationTableProps) {
	const {data} = useSuspenseQuery(variationsTableQuery, {variables: {input: {}}})
	const variationRows:VariationTableColumn[] = useMemo(() => {
		return data.searchVariations.map((variation) => {
			return {
				id: variation.id,
				jobName: variation.job.title,
				title: variation.title,
				description: variation.description,
				submittedBy: variation.submittedBy.name,
				estimatedTime: variation.initialData?.hours,
				estimatedPeople: variation.initialData?.numPeople,
				material: variation.initialData?.materials,
				status: variation.status,
				equipment: variation.initialData?.equipment,
				createdAt: variation.createdAt,
			}
		})
	},[])


	//Empty state
	if (variationRows.length === 0) {
		return (<TableEmptyState mainText={"No variations found"} subText={"Variations will appear here when submitted by a crew member or supervisor"}/>)
	}
	return (
		<div>
			<DataTable
				searchColumn={"title"}
				searchPlaceholder={"Search Variation"}
				secondarySearchColumn={'jobName'}
				secondarySearchPlaceholder={'Search by job'}
				columns={variationTableColumns}
				data={variationRows}
			/>
		</div>
	);
}
