import {JobsCellQuery} from "gql-types";
import {Box, Button, ButtonIcon, ButtonText, Divider, FlatList, HStack, Text, VStack} from "@gluestack-ui/themed";
import React from "react";
import {truncate} from "../../../lib/utils";
import {StyleSheet} from "react-native";
import {EyeIcon} from "lucide-react-native";
import {Link} from "expo-router";

/**
 * @name JobsList Props
 */
interface JobListProps {
    jobs: JobsCellQuery['searchJobs']
}

export default function JobsList({jobs}: JobListProps) {
    return (
        <FlatList
            height={'90%'}
            marginHorizontal={'$4'}
            data={jobs}
            keyExtractor={(item: any) => item.id}
            renderItem={({item}: any) => (
                <Box
                    p={2}
                    rounded="$lg"
                    overflow="hidden"
                    m={2}
                >
                    <HStack style={styles.row}>
                        <VStack>
                            <Text size="md">{item.title}</Text>
                            <Text size={'2xs'}>{truncate(item.description, 25)}</Text>
                        </VStack>
                        <Link asChild={true}  href={{pathname: "/(app)/job/[id]", params: {id: item.id, jobTitle: item.title}}}>
                            <Button size={'xs'} width={'$20'}>
                                <ButtonText>View </ButtonText>
                                <ButtonIcon as={EyeIcon}/>
                            </Button>
                        </Link>
                    </HStack>
                    <Divider my={'$2'}/>
                </Box>
            )}
        />
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
