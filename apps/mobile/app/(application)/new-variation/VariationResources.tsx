import React from 'react';
import {Input, InputField, Text, Textarea, TextareaInput, useToast} from "@gluestack-ui/themed";
import {useLocalSearchParams, useRouter} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    variationDetailsSchema,
    VariationResourcesFormType,
    variationResourcesSchema
} from "./variationDetailsFormSchema";
import {useMutation} from "@apollo/client";
import {showErrorToast, showSuccessToast} from "../../../lib/toasts";
import {createMutation, updateMutation} from "../../../lib/variationService";
import * as z from "zod";
import {uploadImages} from "../../../lib/s3";
import FormPageTemplate from "../../../components/FormPageTemplate";
import FormInputWrapper from "../../../components/FormInputWrapper";

export default function VariationResources() {
    const router = useRouter();
    const {id} = useLocalSearchParams<{ id: string }>();
    const form = useForm<VariationResourcesFormType>({
        mode: 'onBlur', resolver: zodResolver(variationResourcesSchema),
        defaultValues: {
            estimatedHours: '',
            numPeople: '',
            who: '',
            materials: '',
            equipment: ''
        }
    })
    const toast = useToast()
    const [saveDetails, {loading}] = useMutation(createMutation, {
        onError: (error) => showErrorToast({error, toast}),
        onCompleted: (data) => console.log(data)
    })
    const [updateDetails, {loading: updateLoading}] = useMutation(updateMutation, {
        onError: (error) => console.log(error),
        onCompleted: (data) => console.log(data)
    })

    const onSubmit = async (data: any) => {
        console.log(data);
        // await updateDetails({
        //     variables: {
        //         input: {
        //             id: id,
        //         }
        //     }
        // })
        showSuccessToast({message: 'Variation details saved', toast})
        router.replace(`/(application)/(home)/variations`)
    };

    return (
        <FormPageTemplate form={form} buttonLabel={'Save'} onSubmit={onSubmit}>
            <Controller
                control={form.control}
                name="estimatedHours"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Estimated time (hrs)'} formState={formState} field={field}>
                        <Input>
                            <InputField
                                keyboardType="numeric"
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
                name="numPeople"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Number of people'} formState={formState} field={field}>
                        <Input>
                            <InputField
                                keyboardType="numeric"
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
                name="who"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Who?'} formState={formState} field={field}>
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
            <Controller
                control={form.control}
                name="materials"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Materials'} formState={formState} field={field}>
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
            <Controller
                control={form.control}
                name="equipment"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Equipment'} formState={formState} field={field}>
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
        </FormPageTemplate>
    );
}
