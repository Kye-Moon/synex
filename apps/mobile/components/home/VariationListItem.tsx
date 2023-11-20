import React from 'react';
import {Box, Button, ButtonText, Divider, Heading, HStack, Text, VStack} from "@gluestack-ui/themed";
import {VariationsCellQuery} from "gql-types";
import {truncate} from "../../lib/utils";
import {StyleSheet} from "react-native";

interface VariationListItemProps {
    variation: VariationsCellQuery['variations'][0]
}

export default function VariationListItem({variation}: VariationListItemProps) {
    return (
        <Box
            p={2}
            rounded="$lg"
            overflow="hidden"
            m={2}
        >
            <HStack style={styles.row}>
                <VStack>
                    <Text size="md">{variation.title}</Text>
                    <Text size={'2xs'}>{truncate(variation.description, 25)}</Text>
                    <Text size={'2xs'}>{`Job - ${variation.job.title}`}</Text>
                    <Text size={'2xs'}>{`Submitted by - ${variation.submittedBy.name}`}</Text>
                </VStack>
                <Button size={'xs'} width={'$20'}>
                    <ButtonText>JHI</ButtonText>
                </Button>
            </HStack>
            <Divider my={'$2'}/>
        </Box>
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

