import React from 'react';
import {Box, Button, Input, InputField, Text, Textarea, TextareaInput, VStack} from "@gluestack-ui/themed";
import {StyleSheet} from 'react-native';
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {variationDetailsSchema} from "./variationDetailsFormSchema";
import FormInputWrapper from "../../../components/FormInputWrapper";
import {useMutation} from "@apollo/client";
import {graphql} from "gql-types";

const mutation = graphql(`
    mutation SaveVariationDetails($input: CreateVariationInput!) {
        createVariation(createVariationInput: $input) {
            id
        }
    }
`)

export default function NewVariationDetails() {
    const form = useForm({mode: 'onBlur', resolver: zodResolver(variationDetailsSchema)})
    const [saveDetails, {loading}] = useMutation(mutation)
    const onSubmit = async (data: any) => {
        console.log(data);
        await saveDetails({
            variables: {
                input: {
                    jobId: "data.jobID",
                    title: data.title,
                    description: data.description,
                    customer: data.customer,
                }
            }
        })
    };

    return (
        <Box justifyContent={'space-between'} bg={'white'} w={'100%'} h={'100%'}>
            <VStack space="md" my={'$4'} mx={'$4'} h={'80%'}>
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
                                    onBlur={field.onBlur}
                                    value={field.value}
                                    onChange={value => field.onChange(value.nativeEvent.text)}
                                />
                            </Textarea>
                        </FormInputWrapper>
                    )}
                />
                <Box>
                    <Text>Images</Text>
                    <Box height={"$56"} rounded={"$lg"}>
                        {/*<Image*/}
                        {/*    alt={"alt"}*/}
                        {/*    size="md"*/}
                        {/*    rounded="$md"*/}
                        {/*    source={{*/}
                        {/*        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </Box>
                </Box>
            </VStack>
            <Box mb={"$8"} mx={'$12'}>
                <Button onPress={form.handleSubmit(onSubmit)}>
                    <Text>Save</Text>
                </Button>
            </Box>

        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
