import React from 'react';
import {
    Box, Divider,
    FlatList,
    Heading,
    Text,
    Toast,
    ToastDescription,
    ToastTitle,
    useToast,
    View,
    VStack,
    ScrollView
} from "@gluestack-ui/themed";
import {graphql} from "gql-types";
import {useQuery} from "@apollo/client";
import {showErrorToast} from "../../../lib/toasts";
import {StyleSheet} from "react-native";
import {job} from "server/dist/src/drizzle/schema";


export const dashboardSearchJobs = graphql(`
    query DashboardSearchJobsMobile($input: JobSearchInput!) {
        searchJobs(jobSearchInput: $input) {
            id
            title
            customerName
            status
            dueDate
            description
        }
    }
`);

export default function Jobs() {
    const toast = useToast()
    const {data, loading, error} = useQuery(dashboardSearchJobs, {
        variables: {input: {}},
        onError: (error) => showErrorToast({error, toast}),
        onCompleted: (data) => console.log(data)
    });

    return (
        <View style={styles.container}>
            {/*<ScrollView height={'100%'} >*/}
                <Box m='$4'>
                    <FlatList
                        height={'80%'}
                        data={data?.searchJobs}
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
            {/*</ScrollView>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'space-between',
    },
});
