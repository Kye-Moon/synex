import { useParams } from "@tanstack/react-router";
import { graphql } from "gql-types";
import { useQuery } from "@apollo/client";
import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import { jobQuery } from "@/Services/jobService";

export default function JobPage() {
	const params = useParams({ from: "/layout/jobs/$jobId" });
	const { data } = useQuery(jobQuery, { variables: { jobId: params.jobId } });

	return (
		<>
			<PageHeadingWithMetaAndActions pageHeading={data?.job.title || ""} />
			<PageContentSection>
				<div>{JSON.stringify(data)}</div>
			</PageContentSection>
		</>
	);
}
