import CrewTable from "@/Components/Crew/CrewTable/CrewTable";
import {useSuspenseQuery} from "@apollo/client";
import {getUserCrew} from "@/Services/userCrewService";

interface EditJobCrewTableSectionProps {
    initialCrew?: string[]
}

export default function EditJobCrewTableSection({initialCrew}: EditJobCrewTableSectionProps) {
    // get all the available crew for the current user
    const {data} = useSuspenseQuery(getUserCrew)
    return (
        <CrewTable initialSelected={initialCrew} crew={data.userCrew}/>
    )
}

