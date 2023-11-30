import PageHeadingWithMetaAndActions
	from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import StackedLabelAndValue from "@/Components/StackedLabelAndValue";
import {Label} from "@/Primitives/Label";
import React from "react";
import EditableLabourResourcesTable from "@/Pages/EditVariationPage/EditableLabourResourcesTable";
import EditableMaterialsResourcesTable
	from "@/Pages/EditVariationPage/EditableMaterialResourcesTable";
import EditableEquipmentResourcesTable
	from "@/Pages/EditVariationPage/EditableEquipmentResourcesTable";
import {Separator} from "@/Primitives/Seperator";

export default function EditVariationPage() {
	return (
		<>
			<PageHeadingWithMetaAndActions pageHeading={""}/>
			<PageContentSection>
				<div className={'grid grid-cols-1 xl:grid-cols-3 space-x-4'}>
					<div className={'col-span-2 border-r-2 '}>
						<div className={' pb-4'}>
							<h3 className={'text-xl font-semibold'}>Details</h3>
							<ViewDetails/>
						</div>
						<div className={'pt-4 pb-12'}>
							<h3 className={'text-xl font-semibold'}>Summary</h3>
							<ViewSummary/>
						</div>
						<Separator/>
						<div className={'pt-12'}>
							<h3 className={'text-lg font-semibold'}>Costs and Resources Break Down</h3>
							<ViewCostsAndResources/>
						</div>
					</div>
					<div className={'col-span-1'}>
						<h3 className={'text-lg font-semibold'}>Images</h3>
						<div className={'py-2 space-y-2 flex flex-col align-middle'}>
							<img src={'https://via.placeholder.com/400'}/>
							<img src={'https://via.placeholder.com/400'}/>
							<img src={'https://via.placeholder.com/400'}/>
						</div>
					</div>
				</div>
			</PageContentSection>
		</>
	)
}

export function ViewCostsAndResources() {
	return (
		<div className={'grid grid-cols-4 space-y-2 '}>
			<div className={'col-span-4 '}>
				<h3 className={'text-md '}>Labour</h3>
			</div>
			<div className={'col-span-4 mr-4'}>
				<EditableLabourResourcesTable/>
			</div>
			<div className={'col-span-4 pt-6 '}>
				<h3 className={'text-md font'}>Materials</h3>
			</div>
			<div className={'col-span-3 mr-4'}>
				<EditableMaterialsResourcesTable/>
			</div>

			<div className={'col-span-4 pt-6 '}>
				<h3 className={'text-md'}>Other Misc</h3>
			</div>
			<div className={'col-span-3 mr-4'}>
				<EditableEquipmentResourcesTable/>
			</div>
		</div>
	)
}

export function ViewDetails() {
	return (
		<div className={'grid grid-cols-3 space-y-2 '}>
			<div className={'col-span-1 space-y-2'}>
				<StackedLabelAndValue label={'Title'} value={variation.title}/>
			</div>
			<div className={'col-span-1 space-y-2'}>
				<StackedLabelAndValue label={'Customer'} value={variation.customer}/>
			</div>
			<div className={'col-span-1 space-y-2'}>
				<StackedLabelAndValue label={'Submitted By'} value={variation.submittedBy}/>
			</div>
			<div className={'col-span-3 space-y-2'}>
				<StackedLabelAndValue label={'Description'} value={variation.description}/>
			</div>
		</div>
	)
}

export const ViewSummary = () => {
	return (
		<div className={'grid grid-cols-3'}>
			<div className={'col-span-1 space-y-2'}>
				<StackedLabelAndValue label={'Labour Total'} value={'$397'}/>
			</div>
			<div className={'col-span-1 space-y-2'}>
				<StackedLabelAndValue label={'Material Total'} value={'$51'}/>
			</div>
			<div className={'col-span-1 space-y-2'}>
				<StackedLabelAndValue label={'Submitted By'} value={'$212'}/>
			</div>
			<div className={'col-span-3 text-lg font-bold space-y-2'}>
				<StackedLabelAndValue label={'Total'} value={'$732.60'}/>
			</div>
		</div>
	)
}


const variation = {
	id: "1",
	jobId: "1",
	jobName: "Job 1",
	title: "Variation 1",
	customer: "Customer 1",
	description: "This is a variation",
	submittedBy: "John Smith",
	flag: "POTENTIAL",
	estimatedTime: 10,
	estimatedCost: 100,
	createdAt: "2021-01-01",
	updatedAt: "2021-01-01",
}

const resources = [
	{
		id: "1",
		variationId: "1",
		type: "MATERIAL",
		description: "This is a resource",
		quantity: 1,
		unit: "EA",
		unitPrice: 100,
		hours: null,
		rate: null,
		numPeople: null,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
	},
	{
		id: "1",
		variationId: "1",
		type: "LABOUR",
		description: "This is a resource",
		quantity: 1,
		unit: "EA",
		unitPrice: 100,
		hours: null,
		rate: null,
		numPeople: null,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
	},
	{
		id: "1",
		variationId: "1",
		type: "MATERIAL",
		description: "This is a resource",
		quantity: 1,
		unit: "EA",
		unitPrice: 100,
		hours: null,
		rate: null,
		numPeople: null,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
	},
]
