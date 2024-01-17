import React from 'react';
import {Input, InputField, Textarea, TextareaInput, VStack} from "@gluestack-ui/themed";
import {Controller, UseFormReturn} from "react-hook-form";
import FormInputWrapper from "../../../components/FormInputWrapper";

interface VariationAdditionalFormFieldsProps {
    form: UseFormReturn<any>
}

export default function VariationAdditionalFormFields({form}: VariationAdditionalFormFieldsProps) {
    return (
        <VStack space="md" my={'$4'}>
            <Controller
                control={form.control}
                name="hours"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Estimated time (hrs)'} formState={formState} field={field}>
                        <Input>
                            <InputField
                                keyboardType="numeric"
                                value={field.value}
                                onChange={value => {
                                    form.setValue('hours', value.nativeEvent.text)
                                }}
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
                                value={field.value}
                                onChange={value => form.setValue('numPeople', value.nativeEvent.text)}
                            />
                        </Input>
                    </FormInputWrapper>
                )}
            />
            <Controller
                control={form.control}
                name="who"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Who'} formState={formState} field={field}>
                        <Textarea height={75}>
                            <TextareaInput

                                role="summary"
                                value={field.value}
                                onChange={value => form.setValue('who', value.nativeEvent.text)}
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
                                value={field.value}
                                onChange={value => form.setValue('materials', value.nativeEvent.text)}
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
                                value={field.value}
                                onChange={value => form.setValue('equipment', value.nativeEvent.text)}
                            />
                        </Textarea>
                    </FormInputWrapper>
                )}
            />
        </VStack>
    );
}
