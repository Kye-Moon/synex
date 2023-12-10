import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import React, {Suspense} from "react";
import EditVariationPageCell from "@/Pages/EditVariationPage/EditVariationPageCell";
import {useParams} from "@tanstack/react-router";

export default function EditVariationPage() {
	const params = useParams({from: "/layout/variations/$variationId/edit"});
	return (
		<>
			<PageHeadingWithMetaAndActions pageHeading={""}/>
			<PageContentSection>
				<Suspense>
					<EditVariationPageCell variationId={params.variationId} />
				</Suspense>
			</PageContentSection>
		</>
	)
}
