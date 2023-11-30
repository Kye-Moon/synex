import {useNavigate, useParams} from "@tanstack/react-router";
import {graphql} from "gql-types";
import {useQuery} from "@apollo/client";
import PageHeadingWithMetaAndActions, {
    PageHeadingActionButtonProps
} from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import {jobWithCrewAndVariationsQuery} from "@/Services/jobService";
import JobDetails from "@/Pages/JobPage/JobDetails";
import JobCrew from "@/Pages/JobPage/JobCrew";
import JobVariations from "@/Pages/JobPage/JobVariations";
import CrewTable, {CrewTableRowsProps} from "@/Components/Crew/CrewTable/CrewTable";
import React, {JSX} from "react";
import NewJobDialog from "@/Components/Jobs/NewJobDialog/NewJobDialog";
import {Button} from "@/Primitives/Button/Button";
import {EditIcon} from "lucide-react";


const jobPageActions: PageHeadingActionButtonProps[] = [
    {
        dialog: <JobPageActions/>,
    },
];
export default function JobPage(): JSX.Element {
    const params = useParams({from: "/layout/jobs/$jobId"});
    const {data} = useQuery(jobWithCrewAndVariationsQuery, {variables: {jobId: params.jobId}});
    const jobCrew: CrewTableRowsProps[] = data?.jobCrew.map((jobCrew) => ({name: jobCrew.name, id: jobCrew.id, phone: jobCrew.phone})) ?? []

    return (
        <div className={'overflow-auto'}>
            <PageHeadingWithMetaAndActions actions={jobPageActions} pageHeading={data?.job.title || ""}/>
            <PageContentSection>
                <div className={'grid grid-cols-1 xl:grid-cols-2'}>
                    <div className={'col-span-1 space-y-4 '}>
                        <h1 className={'text-xl font-semibold'}>Details</h1>
                        <JobDetails
                            title={data?.job.title ?? ''}
                            customerName={data?.job.customerName ?? ''}
                            dueDate={data?.job.dueDate ?? ''}
                            status={data?.job.status ?? '-'}
                            description={data?.job.description ?? ''}
                        />
                    </div>
                    <div className={'col-span-1 space-y-4 '}>
                        <h1 className={'text-xl font-semibold'}>Crew</h1>
                        <CrewTable crew={jobCrew} showSelect={false} tableCaption={"Current Job Crew"}/>
                    </div>
                </div>
            </PageContentSection>
            <PageContentSection>
                <div className={'grid grid-cols-1 xl:grid-cols-2'}>
                    <div className={'col-span-2 '}>
                        <h1 className={'text-xl font-semibold'}>Variations</h1>
                        <JobVariations variations={data?.variations}/>
                    </div>
                </div>
            </PageContentSection>
        </div>
    );
}

/**
 * This is a component that is used in the PageHeadingWithMetaAndActions component
 * It is a button that navigates to the edit job page
 * TODO: Should be able to navigate via a function surely? this should not be needed
 * @constructor
 */
export function JobPageActions() {
    const navigate = useNavigate();
    const params = useParams({from: "/layout/jobs/$jobId"});

    return (
        <Button onClick={() => navigate({to: '/jobs/$jobId/edit', params: {jobId: params.jobId}})} variant={'default'}
                size={'sm'}>
            <EditIcon className={'w-4 mr-2'}/>
            <span>Edit Job</span>
        </Button>
    )
}
