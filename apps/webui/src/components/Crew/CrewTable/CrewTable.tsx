import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/Primitives/Table";
import {Checkbox} from "@/Primitives/Checkbox";
import {useSuspenseQuery} from "@apollo/client";
import {getUserCrew} from "@/Services/userCrewService";

export interface CrewTableRowsProps {
	id: string;
	name: string;
	phone: string;
}

interface CrewTableProps {
	showSelect?: boolean;
	crew?: CrewTableRowsProps[];
	initialSelected?: string[];
	tableCaption?: string;
}

export default function CrewTable({
									  crew,
									  showSelect = true,
									  initialSelected = [],
									  tableCaption = "Available Crew",
								  }: CrewTableProps) {
	const [selectedRows, setSelectedRows] = useState<string[]>(initialSelected || [])
	const [crewRows, setCrew] = useState<CrewTableRowsProps[]>(crew || [])
    const context = useFormContext()


	if (context !== null) {
		useEffect(() => {
			context.setValue('crew', selectedRows)
		}, [selectedRows])
	}

	useEffect(() => {
		setCrew(crew || [])
	}, [crew])

	return (
		<Table>
			<TableCaption>{tableCaption}</TableCaption>
			<TableHeader>
				<TableRow>
					{showSelect && (
						<TableHead className="w-1/6">
							<Checkbox
								checked={selectedRows.length === crewRows.length}
								onCheckedChange={(value) => {
									if (value) {
										setSelectedRows(crewRows.map((crew) => crew.id))
									} else {
										setSelectedRows([])
									}
								}}
								aria-label="Select all"
							/>
						</TableHead>
					)}
					<TableHead>Name</TableHead>
					<TableHead>Phone</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{crewRows.map((crewMember) => (
					<TableRow key={crewMember.id}>
						{showSelect && (
							<TableCell className="font-medium pl-4">
								<Checkbox
									checked={selectedRows.includes(crewMember.id)}
									onCheckedChange={(value) => setSelectedRows(value ? [...selectedRows, crewMember.id] : selectedRows.filter((id) => id !== crewMember.id))}
									aria-label="Select row"
								/>
							</TableCell>
						)}
						<TableCell className={'pl-4'}>{crewMember.name}</TableCell>
						<TableCell className={'pl-4'}>{crewMember.phone}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>

	);
}
