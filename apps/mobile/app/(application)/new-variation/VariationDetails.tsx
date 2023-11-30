import React, {useState} from 'react';
import {
    Box,
    Button,
    ButtonText,
    Input,
    InputField,
    Text,
    Textarea,
    TextareaInput,
    useToast,
    VStack,
    Image, HStack, FlatList, ButtonGroup, ButtonIcon, AddIcon, ScrollView, Spinner, ButtonSpinner, View
} from "@gluestack-ui/themed";
import {SafeAreaView, StyleSheet} from 'react-native';
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {variationDetailsSchema} from "./variationDetailsFormSchema";
import FormInputWrapper from "../../../components/FormInputWrapper";
import {useLazyQuery, useMutation} from "@apollo/client";
import {graphql} from "gql-types";
import {showErrorToast} from "../../../lib/toasts";
import * as ImagePicker from 'expo-image-picker';
import {Camera, ImagePlus} from 'lucide-react-native';
import FormPageTemplate from "../../../components/FormPageTemplate";
import {uploadImages} from "../../../lib/s3";
import {User} from "server/dist/src/modules/user/entities/user.entity";
import {useRouter} from "expo-router";
import {createMutation, updateMutation} from "../../../lib/variationService";


const preSignedUrlQuery = graphql(`
    query PreSignedUrl($key: String!) {
        presignedUrl(key: $key)
    }
`)

export default function NewVariationDetails() {
    const router = useRouter();
    const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    const [getPresignedUrl] = useLazyQuery(preSignedUrlQuery)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 0.5,
            allowsMultipleSelection: true,
            selectionLimit: 8,
        });
        if (!result.canceled) {
            handleAddImage(result.assets)
        }
    };

    const takePhoto = async () => {
        if (!status?.granted) {
            await requestPermission();
        }
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });
        if (!result.canceled) {
            handleAddImage(result.assets)
        }
    }

    const handleAddImage = (result: ImagePicker.ImagePickerAsset[]) => {
        setImages([...images, ...result])
    }

    const form = useForm({
        mode: 'onBlur', resolver: zodResolver(variationDetailsSchema),
        defaultValues: {
            job: "",
            title: "",
            description: "",
            customer: "",
        }
    })
    const toast = useToast()
    const [saveDetails, {loading}] = useMutation(createMutation, {
        onError: (error) => showErrorToast({error, toast}),
        onCompleted: (data) => console.log(data)
    })
    const [updateDetails, {loading: updateLoading}] = useMutation(updateMutation, {
        onError: (error) => console.log(error),
        onCompleted: (data) => console.log(data),
        refetchQueries: ['VariationsCell'],
        awaitRefetchQueries: true
    })

    const onSubmit = async (data: any) => {
        const variation = await saveDetails({
            variables: {
                input: {
                    jobId: "9337ebcf-7235-4e45-99e6-6052689da859",
                    title: data.title,
                    description: data.description,
                    customer: data.customer,
                }
            }
        })
        if (!variation.data?.createVariation) {
            console.log(variation);
            return;
        }
        const imageUrls = await uploadImages({
            images: images,
            getPresignedUrl: getPresignedUrl,
            variationId: variation.data.createVariation.id
        })

        await updateDetails({
            variables: {
                input: {
                    id: variation.data.createVariation.id,
                    imageUrls: imageUrls
                }
            }
        })
        router.replace(`/new-variation/VariationResources?id=${variation.data.createVariation.id}`)
    };

    return (
        <FormPageTemplate form={form} buttonLabel={'Save'} onSubmit={onSubmit}>
            <Controller
                control={form.control}
                name="job"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Job'} formState={formState} field={field}>
                        <Input>
                            <InputField
                                onBlur={field.onBlur}
                                value={field.value}
                                onChange={value => field.onChange(value.nativeEvent.text)}
                            />
                        </Input>
                    </FormInputWrapper>
                )}
            />
            <Controller
                control={form.control}
                name="title"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Title'} formState={formState} field={field}>
                        <Input>
                            <InputField
                                onBlur={field.onBlur}
                                value={field.value}
                                onChange={value => field.onChange(value.nativeEvent.text)}
                            />
                        </Input>
                    </FormInputWrapper>
                )}
            />
            <Controller
                control={form.control}
                name="customer"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Customer'} formState={formState} field={field}>
                        <Input>
                            <InputField
                                onBlur={field.onBlur}
                                value={field.value}
                                onChange={value => field.onChange(value.nativeEvent.text)}
                            />
                        </Input>
                    </FormInputWrapper>
                )}
            />
            <Controller
                control={form.control}
                name="description"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Notes / Description'} formState={formState} field={field}>
                        <Textarea>
                            <TextareaInput
                                role="summary"
                                onBlur={field.onBlur}
                                value={field.value}
                                onChange={value => field.onChange(value.nativeEvent.text)}
                            />
                        </Textarea>
                    </FormInputWrapper>
                )}
            />
            <Box>
                <HStack width={'$full'} gap={'$4'} justifyContent='space-between' alignItems={'center'}>
                    <Text size={'lg'} bold>Images</Text>
                    <ButtonGroup space="md">
                        <Button size={'sm'} w={'$24'} onPress={takePhoto}>
                            <ButtonIcon as={Camera}/>
                        </Button>
                        <Button size={'sm'} w={'$24'} onPress={pickImage}>
                            <ButtonIcon as={ImagePlus}/>
                        </Button>
                    </ButtonGroup>
                </HStack>
                <Text size={'xs'}>Choose or take up to 8 images</Text>
                <Box>
                    <FlatList
                        data={images}
                        numColumns={4}
                        renderItem={({item}: { item: any }) => (
                            <Box key={item.uri} p={'$1'}>
                                <Image alt={'img'} size={'md'} rounded={'$md'} source={{uri: item.uri}}/>
                            </Box>
                        )}
                    />
                </Box>
            </Box>
        </FormPageTemplate>
    );
}

