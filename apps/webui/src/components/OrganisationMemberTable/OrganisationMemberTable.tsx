import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/Primitives/Table";
import {Checkbox} from "@/Primitives/Checkbox";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase, getUserTypeBadgeVariant} from "@/Lib/utils";

export interface OrgMemberTableRowsProps {
    id: string;
    name: string;
    phone?: string | null;
    role: string;
}

interface CrewTableProps {
    showSelect?: boolean;
    members?: OrgMemberTableRowsProps[];
    initialSelected?: string[];
    tableCaption?: string;
}

export default function OrganisationMemberTable({
                                                    members,
                                                    showSelect = true,
                                                    initialSelected = [],
                                                    tableCaption = "Available Members",
                                                }: CrewTableProps) {
    const [selectedRows, setSelectedRows] = useState<string[]>(initialSelected || [])
    const [memberRows, setMembers] = useState<OrgMemberTableRowsProps[]>(members || [])
    const context = useFormContext()


    if (context !== null) {
        useEffect(() => {
            context.setValue('crew', selectedRows)
        }, [selectedRows])
    }

    useEffect(() => {
        setMembers(members || [])
    }, [members])

    return (
        <Table>
            <TableCaption>{tableCaption}</TableCaption>
            <TableHeader>
                <TableRow>
                    {showSelect && (
                        <TableHead className="w-1/6">
                            <Checkbox
                                checked={selectedRows.length === memberRows.length}
                                onCheckedChange={(value) => {
                                    if (value) {
                                        setSelectedRows(memberRows.map((member) => member.id))
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
                    <TableHead>Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {memberRows.map((crewMember) => (
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
                        <TableCell className={'pl-4'}>
                            <Badge
                                size={'sm'}
                                text={enumToSentenceCase(crewMember.role)}
                                variant={getUserTypeBadgeVariant(crewMember.role) ?? "default"}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
}
