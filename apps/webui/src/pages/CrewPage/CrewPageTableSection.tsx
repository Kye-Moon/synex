import CrewTable from "@/Components/Crew/CrewTable/CrewTable";
import {useQuery, useSuspenseQuery} from "@apollo/client";
import {getUserCrew} from "@/Services/userCrewService";

export default function CrewPageTableSection() {
	const {data} = useSuspenseQuery(getUserCrew)

	return (
		<>
			<CrewTable crew={data.userCrew} showSelect={false}/>
		</>

	)
}
