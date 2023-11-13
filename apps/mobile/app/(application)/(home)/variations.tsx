import React from 'react';
import {StyleSheet} from 'react-native';

import {
    AddIcon,
    FlatList,
    Box,
    Button,
    ButtonIcon,
    ButtonText,
    Center,
    Heading,
    Text,
    View,
    VStack, Divider
} from "@gluestack-ui/themed";
import {Link} from "expo-router";

export default function VariationsScreen() {
    return (
        <View style={styles.container}>
            <Box m='$4'>
                <FlatList
                    height={'80%'}
                    data={variations}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({item}: any) => (
                        <Box
                            p={2}
                            rounded="$lg"
                            overflow="hidden"
                            m={2}
                        >
                            <VStack space={'sm'}>
                                <Heading size="md">{item.title}</Heading>
                                <Text>{item.description}</Text>
                            </VStack>
                            <Divider my="$0.5"/>
                        </Box>
                    )}
                />
            </Box>
            <Center h={'15%'} w={'100%'}>
                <Link asChild={true} href={{pathname: '/new-variation'}}>
                    <Button
                        width={'90%'}
                        size="lg"
                        variant="solid"
                        action="primary"
                        isDisabled={false}
                        isFocusVisible={false}
                    >
                        <ButtonText>New Variation </ButtonText>
                        <ButtonIcon as={AddIcon}/>
                    </Button>
                </Link>
            </Center>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

const variations = [
    {
        id: "1",
        jobId: "1",
        jobName: "Job 1",
        title: "Variation 1",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 10,
        estimatedCost: 100,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
    {
        id: "2",
        jobId: "2",
        jobName: "Job 2",
        title: "Variation 2",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 10,
        estimatedCost: 100,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
]
