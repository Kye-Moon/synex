import React from 'react';
import {Box, Button, ButtonIcon, ButtonText, Divider, HStack, Text, VStack} from "@gluestack-ui/themed";
import {VariationsCellQuery} from "gql-types";
import {truncate} from "../../../lib/utils";
import {StyleSheet} from "react-native";
import {EyeIcon} from "lucide-react-native";
import {Link} from "expo-router";

interface VariationListItemProps {
    variation: VariationsCellQuery['searchVariations'][0]
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
                <Link asChild={true}
                      href={{pathname: "/(app)/variation/[id]", params: {id: variation.id, variationTitle: variation.title}}}>
                    <Button size={'xs'} width={'$20'}>
                        <ButtonText>View </ButtonText>
                        <ButtonIcon as={EyeIcon}/>
                    </Button>
                </Link>
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

