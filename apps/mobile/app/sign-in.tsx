import React from 'react';
import {
    Box,
    Button,
    ButtonSpinner,
    ButtonText,
    Center,
    Image,
    Input,
    InputField,
    KeyboardAvoidingView
} from "@gluestack-ui/themed";
import {Platform, StyleSheet} from "react-native";
import {useMutation} from "@apollo/client";
import {graphql} from "gql-types";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../state/atoms";
import {useRouter} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signInSchema} from "./signinSchema";
import FormInputWrapper from "../components/FormInputWrapper";
// @ts-ignore
import Logo from "../assets/images/Logo.png";

export const loginMutationMobile = graphql(`
    mutation LoginMutationMobile($input: LoginInput!) {
        login(loginUserInput: $input) {
            access_token
            refresh_token
            user {
                id
            }
        }
    }
`);

export default function SignIn() {
    const [accessToken, setAccess] = useRecoilState(accessTokenState)

    const router = useRouter();
    const form = useForm({
        mode: 'onBlur',
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const [login] = useMutation(loginMutationMobile, {
        onError: (error) => {
            console.log(error);
        },
        onCompleted: async (data) => {
            setAccess(data.login.access_token)
        }
    })

    const onSubmit = async (data: any) => {
        await login({
            variables: {
                input: {
                    email: data.email.toLowerCase(),
                    password: data.password,
                },
            }
        })
        router.push('/(application)/(home)/variations')
    }

    return (
        <Box style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "height" : "height"}
                style={{flex: 1}}
            >
                <Center style={styles.content}>
                    <Image alt={'logo'} source={Logo} style={styles.logo}/>
                    <Controller
                        control={form.control}
                        name="email"
                        render={({field, formState, fieldState}) => (
                            <FormInputWrapper title={'Email'} formState={formState} field={field}>
                                <Input w={'100%'}>
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
                        name="password"
                        render={({field, formState, fieldState}) => (
                            <FormInputWrapper title={'Password'} formState={formState} field={field}>
                                <Input w={'100%'}>
                                    <InputField
                                        type={'password'}
                                        onBlur={field.onBlur}
                                        value={field.value}
                                        onChange={value => field.onChange(value.nativeEvent.text)}
                                    />
                                </Input>
                            </FormInputWrapper>
                        )}
                    />
                    <Button w={'100%'} mx={'$8'} mb={"$8"} onPress={form.handleSubmit(onSubmit)}>
                        {form.formState.isSubmitting ? <ButtonSpinner/> : <ButtonText>Sign in</ButtonText>}
                    </Button>
                </Center>
            </KeyboardAvoidingView>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
        gap: 40
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    }
});
