import {useEffect, useState} from "react";
import {Button} from "@/Primitives/Button/Button";
import {preSignedUrlQuery, uploadImages} from "@/Lib/s3";
import {graphql} from "gql-types";
import {useLazyQuery, useMutation, useSuspenseQuery} from "@apollo/client";
import toast from "react-hot-toast";


const query = graphql(`
	query UserOrgSettings{
		currentUser {
			id
			organisation {
				id
				name
				logoUrl
			}
		}
	}
`)

const mutation = graphql(`
	mutation UpdateOrganisation($input: UpdateOrganisationInput!) {
		updateOrganisation(updateOrganisationInput: $input) {
			id
			name
			logoUrl
		}
	}
`)

export default function OrganisationSettings() {
	const {data} = useSuspenseQuery(query)
	const [updateOrganisation] = useMutation(mutation, {
		onCompleted: (data) => {
			toast.success('Organisation updated')
		},
		onError: (e) => {
			toast.error("Couldn't update organisation")
		},
		refetchQueries: ['UserOrgSettings'],
		awaitRefetchQueries: true,
	})
	const [imageUrl, setImageUrl] = useState<string | null>(null)
	const [getPresignedUrl] = useLazyQuery(preSignedUrlQuery)

	useEffect(() => {
		setImageUrl(data?.currentUser?.organisation?.logoUrl ?? null)
	}, [data])

	const updateOrgImage = async (url:string) => {
		await updateOrganisation({
			variables: {
				input: {
					id: data?.currentUser?.organisation?.id,
					logoUrl: url,
				}
			}
		})
	}

	return (
		<>
			<div className={'border-r-2 px-4'}>
				<h2 className="text-base font-semibold leading-7">Branding</h2>
				<p className="mt-1 text-sm leading-6 text-gray-400">
					Use a logo to be shown on your exported documents.
				</p>
			</div>
			<div className={'col-span-2 px-12 '}>
				{imageUrl && (
					<img className={'h-24 '} alt={''} src={imageUrl}/>
				)}
				<div className={'mt-4'}>
					<Button
						onClick={() => {
							// @ts-ignore
							document.getElementById('fileInput').click()
						}}
						variant={'outline'}
					>
						Upload or change Logo</Button>
				</div>
				<input id={'fileInput'} type={'file'} className={'hidden'} onChange={async (e) => {
					if (e.target.files && e.target.files.length > 0) {
						const file = e.target.files[0]
						const imageUrls = await uploadImages({
								files: [file],
								getPresignedUrl: getPresignedUrl,
								key: `org-logo/${data?.currentUser?.organisation?.id}/${file.name}`,
							}
						)
						setImageUrl(imageUrls[0])
						await updateOrgImage((imageUrls[0]))
					}
				}}/>
			</div>
		</>
	)
}
