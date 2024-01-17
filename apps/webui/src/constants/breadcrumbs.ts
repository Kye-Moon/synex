export const getJobPageBreadCrumb = (jobId: string) => {
    return [
        {name: 'Jobs', href: '/jobs', current: false},
        {name: "Job", href: `/jobs/${jobId}`, current: false},
        {name: "Job Record", href: `/job-records/${jobId}/edit`, current: true},
    ]
}


export const getJobPageBreadCrumbWithJobName = (jobId?: string, jobName?: string) => {
    return [
        {name: 'Jobs', href: '/job-records', current: false},
        {name: jobName, href: `/job-records/${jobId}/edit`, current: true},
    ]
}
