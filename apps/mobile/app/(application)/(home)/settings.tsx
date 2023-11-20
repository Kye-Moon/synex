import {Button, ButtonText, Text, View} from "@gluestack-ui/themed";
import {useSetRecoilState} from "recoil";
import {accessTokenState} from "../../../state/atoms";


export default function Settings() {
    const setToken = useSetRecoilState(accessTokenState)
    return (
        <View>
            <Button onPress={()=>setToken('')}>
                <ButtonText>Logout</ButtonText>
            </Button>
        </View>
    );
}
