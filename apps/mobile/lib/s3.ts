import * as ImagePicker from "expo-image-picker";
import {LazyQueryExecFunction} from "@apollo/client";
import {Exact, PreSignedUrlQuery} from "gql-types"

interface UploadImagesProps {
    getPresignedUrl: LazyQueryExecFunction<PreSignedUrlQuery, Exact<{ key: string }>>;
    images: ImagePicker.ImagePickerAsset[];
    variationId: string;

}

export const uploadImages = async ({images, getPresignedUrl, variationId}: UploadImagesProps): Promise<string[]> => {
    const imageUrls: string[] = [];
    for (const result of images) {
        const preSignedUrl = await getPresignedUrl({variables: {key: `${variationId}-${result.fileName}`}})
        const picture = await (await fetch(result.uri)).blob();
        if (!!preSignedUrl.data?.presignedUrl) {
            const response = await fetch(preSignedUrl.data.presignedUrl, {
                method: 'PUT',
                body: picture,
                headers: {
                    'Content-Type': 'image/jpeg',
                }
            });
            const url = response.url.split('?')[0];
            imageUrls.push(url);
        }
    }
    return imageUrls;
}
