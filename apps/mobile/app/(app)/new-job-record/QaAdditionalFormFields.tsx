import React from 'react';
import {Input, InputField, VStack} from "@gluestack-ui/themed";
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
                name="risk"
                render={({field, formState, fieldState}) => (
                    <FormInputWrapper title={'Risk Level'} formState={formState} field={field}>
                        <Input>
                            <InputField
                                keyboardType="numeric"
                                value={field.value}
                                onChange={value => {
                                    form.setValue('estimatedHours', value.nativeEvent.text)
                                }}
                            />
                        </Input>
                    </FormInputWrapper>
                )}
            />

        </VStack>
    );
}
