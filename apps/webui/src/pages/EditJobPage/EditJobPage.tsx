import {useParams} from "@tanstack/react-router";
import {useQuery} from "@apollo/client";
import {jobWithCrewQuery} from "@/Services/jobService";
import PageHeadingWithMetaAndActions
    from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import EditJobForm from "@/Pages/EditJobPage/EditJobForm";

export default function EditJobPage() {
    const params = useParams({from: "/layout/jobs/$jobId"});
    const {data, loading} = useQuery(jobWithCrewQuery, {variables: {jobId: params.jobId}});
    const jobCrew = data?.jobCrew.map((jobCrew) => jobCrew.id)
    return (
        <>
            <PageHeadingWithMetaAndActions pageHeading={'Edit ' + data?.job.title || ""}/>
            <PageContentSection>
                {loading ? (<></>) : (<EditJobForm jobDetails={data?.job} jobCrew={jobCrew}/>)}
            </PageContentSection>
        </>
    );
}
