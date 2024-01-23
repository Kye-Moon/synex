import {Button, ButtonText, View, Text} from "@gluestack-ui/themed";
import {useSetRecoilState} from "recoil";
import {accessTokenState} from "../../../state/atoms";
import React, {Suspense} from "react";
import {StyleSheet} from "react-native";
import ScreenSection from "../../../components/ScreenSection";
import AccountDetailsCell from "../../../components/AccountDetailsCell";
import LoadingSkeletonRows from "../../../components/Loading/SkeletonRows";

export default function Settings() {
    const setToken = useSetRecoilState(accessTokenState)
    return (
        <ScreenSection>
            <View style={styles.content}>
                <Suspense fallback={<LoadingSkeletonRows rows={2}/>}>
                    <AccountDetailsCell/>
                </Suspense>
                <View style={styles.bottom}>
                    <Button variant={'outline'} onPress={() => setToken('')}>
                        <ButtonText>Logout</ButtonText>
                    </Button>
                </View>
            </View>
        </ScreenSection>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        gap: 16,
        margin: 16,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    accountDetailsSection: {
        flex: 1,
        justifyContent: 'flex-start',
    }
})