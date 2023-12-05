import OrganisationMemberTable from "@/Components/OrganisationMemberTable/OrganisationMemberTable";

export default function JobCrew(){
    return (
        <div className={'col-span-1 '}>
            <OrganisationMemberTable showSelect={false}/>
        </div>
    )
}
