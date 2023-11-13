import React from 'react';
import {Box, Button, ButtonText, Center, KeyboardAvoidingView, Text} from "@gluestack-ui/themed";
import {Platform} from "react-native";
import {useMutation} from "@apollo/client";
import {graphql} from "gql-types";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../state/atoms";


export const loginMutationMobile = graphql(`
    mutation LoginMutationMobile($input: LoginInput!) {
        login(loginUserInput: $input) {
            access_token
            expires_at
            refresh_token
            user {
                id
            }
        }
    }
`);

export default function SignIn() {
    const [accessToken, setAccess] = useRecoilState(accessTokenState)
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
                        <ButtonText>S  ign  In</ButtonText>
                    </Button>
                    <Text>{accessToken}</Text>
                </Center>
            </KeyboardAvoidingView>
        </Box>
    );
}
