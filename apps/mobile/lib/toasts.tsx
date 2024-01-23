import {ApolloError} from "@apollo/client";
import {Toast, ToastDescription, ToastTitle, VStack} from "@gluestack-ui/themed";
import React from "react";

interface ToastProps {
    toast: { show: (props: {}) => void }
    placement?: "top" | "bottom" | "top right" | "top left" | "bottom right" | "bottom left"
}

interface ErrorToastProps extends ToastProps {
    error?: ApolloError
    message?: string
}

interface SuccessToastProps extends ToastProps {
    message: string
}


export function showErrorToast({error,message, toast, placement = "top right"}: ErrorToastProps) {
    return toast.show({
        placement: placement,
        render: ({id}: { id: string }) => {
            return (
                <Toast
                    nativeID={"toast-" + id}
                    action="error"
                    variant="outline"
                >
                    <VStack space="xs">
                        <ToastTitle>Error</ToastTitle>
                        <ToastDescription>
                            {error?.message ?? message}
                        </ToastDescription>
                    </VStack>
                </Toast>
            )
        },
    })
}

export const showSuccessToast = ({message, toast, placement = "top right"}: SuccessToastProps) => {
    return toast.show({
        placement: placement,
        render: ({id}: { id: string }) => {
            return (
                <Toast
                    nativeID={"toast-" + id}
                    action="success"
                    variant="solid"
                >
                    <VStack space="xs">
                        <ToastTitle>Success</ToastTitle>
                        <ToastDescription>
                            {message}
                        </ToastDescription>
                    </VStack>
                </Toast>
            )
        },
    })
}
