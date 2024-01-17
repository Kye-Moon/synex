import React, {JSX} from 'react';
import {
    AlertCircleIcon,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabel,
    FormControlLabelText, Text
} from "@gluestack-ui/themed";
import {ControllerRenderProps, FieldValues, UseFormStateReturn} from "react-hook-form";

interface FormInputWrapperProps {
    children: JSX.Element
    formState: UseFormStateReturn<FieldValues>
    field: ControllerRenderProps<any, any>
    helperText?: string
    title?: string
    isRequired?: boolean
}

export default function FormInputWrapper({children, formState, field, helperText, title, isRequired = false}: FormInputWrapperProps): JSX.Element {
    return (
        <>
            <FormControl
                size="md"
                isInvalid={formState.errors[`${field.name}`] !== undefined}
            >
                {title && (
                    <FormControlLabel mb="$1">
                        <FormControlLabelText>{title}</FormControlLabelText>
                        {isRequired && <Text ml={2} color={'red'}>*</Text>}
                    </FormControlLabel>
                )}
                {children}
                {helperText && (
                    <FormControlHelper>
                        <FormControlHelperText>
                            {helperText}
                        </FormControlHelperText>
                    </FormControlHelper>
                )}
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon}/>
                    <FormControlErrorText>
                        {formState.errors[`${field.name}`] !== undefined ? formState.errors[`${field.name}`]?.message as any : ''}
                    </FormControlErrorText>
                </FormControlError>
            </FormControl>
        </>

    )
}
