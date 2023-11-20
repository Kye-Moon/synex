import React, {useEffect} from 'react';
import {Box, Button, ButtonText, Center, KeyboardAvoidingView, Text} from "@gluestack-ui/themed";
import {Platform} from "react-native";
import {useMutation} from "@apollo/client";
import {graphql} from "gql-types";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../state/atoms";
import {useNavigation, useRouter} from "expo-router";


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
    const [login] = useMutation(loginMutationMobile, {
        variables: {
            input: {
                phoneNumber: '0409988618',
                password: '123',
            },
        },
        onError: (error) => {
            console.log(error);
        },
        onCompleted: async (data) => {
            setAccess(data.login.access_token)
        }
    })

    return (
        <Box bg={"$primary100"} h={'100%'}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "height" : "height"}
                style={{flex: 1}}
            >
                <Center h="100%" bg={'$primary0'}>
                    <Button onPress={() => login()}>
                        <ButtonText>S ign In</ButtonText>
                    </Button>
                    <Text>{accessToken}</Text>
                    <Button onPress={() => router.replace('/(application)/(home)/variations')}>
                        <ButtonText>Home</ButtonText>
                    </Button>
                </Center>
            </KeyboardAvoidingView>
        </Box>
    );
}
