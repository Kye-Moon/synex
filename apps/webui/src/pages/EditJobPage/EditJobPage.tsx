import {useParams} from "@tanstack/react-router";
import {useQuery} from "@apollo/client";
import {jobWithCrewQuery} from "@/Services/jobService";
import PageHeadingWithMetaAndActions
	from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import EditJobForm from "@/Pages/EditJobPage/EditJobForm";
import {Suspense} from "react";
import EditJobScopeItems from "@/Pages/EditJobPage/EditJobFormComponents/EditJobScopeItems";
import AttachmentUpload from "@/Pages/EditJobPage/AttachmentUpload";
import AttachmentsView from "@/Pages/EditJobPage/Attachments/AttachmentsView";


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
			<PageContentSection>
				<div className={'col-span-2 '}>
					<Suspense fallback={<div>Loading...</div>}>
						<h1 className={'text-xl font-semibold'}>Scope Items</h1>
						<h3 className={'text-sm pb-4 text-gray-400'}>Add or remove scope items from
							this job</h3>
						<EditJobScopeItems jobId={params.jobId}/>
					</Suspense>
				</div>
			</PageContentSection>
			<PageContentSection >
				<div className={'space-y-12'}>
					<div className={'col-span-2 '}>
						<AttachmentUpload jobId={params.jobId}/>
					</div>
					<div >
						<Suspense>
							<AttachmentsView jobId={params.jobId}/>
						</Suspense>
					</div>
				</div>
			</PageContentSection>
		</>
	);
}
