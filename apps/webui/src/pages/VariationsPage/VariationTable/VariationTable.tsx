import DataTable from "@/Components/DataTable/DataTable";
import {VariationTableColumn, variationTableColumns} from "@/Pages/VariationsPage/VariationTable/VariationTableColumns";
import {Variation} from "server/dist/src/drizzle/schema";

interface VariationTableProps {
    variations: VariationTableColumn[];
}

export default function VariationTable({variations}: VariationTableProps) {
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
