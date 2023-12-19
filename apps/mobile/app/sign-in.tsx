import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    ButtonSpinner,
    ButtonText,
    Center,
    Image,
    Input,
    InputField,
    KeyboardAvoidingView,
    Pressable
} from "@gluestack-ui/themed";
import {Alert, Platform, StyleSheet} from "react-native";
import {useMutation} from "@apollo/client";
import {graphql} from "gql-types";
import {useRouter} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signInSchema} from "./signinSchema";
import FormInputWrapper from "../components/FormInputWrapper";
import {accessTokenState, API_URLS, apiUrlState} from "../state/atoms";
import {useRecoilState, useRecoilStateLoadable} from "recoil";

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
    const router = useRouter();
    const [logoPressCount, setLogoPressCount] = useState(0);
    const [api,setApi] = useRecoilStateLoadable(apiUrlState);
    const  [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
        if (accessToken) {
            router.push('/(app)/(tabs)')
        }
    }, [accessToken]);
    const handlePressLogo = () => {
        if (logoPressCount === 4) {
            Alert.alert(
                'Select Server',
                'Select the server you’d like to use',
                Object.entries(API_URLS).map(([key, value]) => ({
                    text: key.toUpperCase(),
                    onPress: () => {
                        setApi(value);
                    },
                })),
            );
            setLogoPressCount(0);
        } else {
            setLogoPressCount(prev => prev + 1);
        }
    };


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
            setAccessToken(data.login.access_token);
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
        router.push('/(app)/(tabs)')
    }

    return (
        <Box style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "height" : "height"}
                style={{flex: 1}}
            >
                <Center style={styles.content}>
                    <Pressable onPress={handlePressLogo}>
                        <Image alt={'logo'} source={require('../assets/images/Logo.png')} style={styles.logo}/>
                    </Pressable>
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
