import {Exact, graphql, PreSignedUrlQuery} from "gql-types";
import {LazyQueryExecFunction} from "@apollo/client";

interface UploadImagesProps {
	getPresignedUrl: LazyQueryExecFunction<PreSignedUrlQuery, Exact<{ key: string }>>;
	files: File[];
	key: string
}

export const uploadImages = async ({
									   files,
									   getPresignedUrl,
									   key,
								   }: UploadImagesProps): Promise<string[]> => {
	// Mapping each image upload to a promise
	const uploadPromises = files.map(async (file, index) => {
		const preSignedUrl = await getPresignedUrl({variables: {key: `/${key}/${file.name}`}});
		if (!!preSignedUrl.data?.presignedUrl) {
			const response = await fetch(preSignedUrl.data.presignedUrl, {
				method: 'PUT',
				body: file,
			});
			return response.url.split('?')[0];
		}

		// Handle the case where preSignedUrl is not available
		return null;
	});

	// Using Promise.all to run all promises concurrently
	const imageUrls = await Promise.all(uploadPromises);

	// Filter out null values (in case some uploads failed)
	return imageUrls.filter((url): url is string => url !== null);
};

export const preSignedUrlQuery = graphql(`
	query PreSignedUrlWeb($key: String!) {
		presignedUrl(key: $key)
	}
`)

export const uploadAttachments = async ({
											files,
											getPresignedUrl,
											key,
										}: UploadImagesProps): Promise<{
	name: string;
	type: string;
	url: string
}[]> => {
	// Mapping each image upload to a promise
	const uploadPromises = files.map(async (file, index) => {
		const preSignedUrl = await getPresignedUrl({variables: {key: `${key}/${file.name}`}});
		if (!!preSignedUrl.data?.presignedUrl) {
			const response = await fetch(preSignedUrl.data.presignedUrl, {
				method: 'PUT',
				body: file,
			});
			return {
				name: file.name,
				url: response.url.split('?')[0],
				type: file.type,
			}
		}

		// Handle the case where preSignedUrl is not available
		return null;
	});

	// Using Promise.all to run all promises concurrently
	const uploadedFiles = await Promise.all(uploadPromises);

	// Filter out null values (in case some uploads failed)
	return uploadedFiles.filter((file): file is {
		name: string;
		type: string;
		url: string
	} => file !== null);
}
