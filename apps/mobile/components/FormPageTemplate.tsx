import {
    Box,
    Button,
    ButtonSpinner,
    ButtonText,
    KeyboardAvoidingView,
    ScrollView,
    View,
    VStack
} from "@gluestack-ui/themed";
import React from "react";

interface FormPageTemplateProps {
    children: React.ReactNode
    buttonLabel?: string
    form: any
    onSubmit: (data: any) => void
}

export default function FormPageTemplate({form, children, buttonLabel, onSubmit}: FormPageTemplateProps) {
    return (
        <KeyboardAvoidingView>
            <View bg={'white'} w={'100%'} h={'100%'}>
                <ScrollView>
                    <VStack space="md" my={'$4'} mx={'$4'} h={'100%'}>
                        {children}
                    </VStack>
                </ScrollView>
                <Box bg={'transparent'}>
                    <Button mx={'$8'} mb={"$8"} onPress={form.handleSubmit(onSubmit)}>
                        <ButtonText>{buttonLabel}</ButtonText>
                        {form.formState.isSubmitting && <ButtonSpinner/>}
                    </Button>
                </Box>
            </View>
        </KeyboardAvoidingView>
    )
}
