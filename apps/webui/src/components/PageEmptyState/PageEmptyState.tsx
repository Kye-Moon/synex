import {Box, Center, Text} from "@gluestack-ui/themed";
import React from "react";
import {StyleSheet} from "react-native";

interface PageEmptyStateProps {
	message: string;
}
export default function PageEmptyState({message}: PageEmptyStateProps){
	return (
		<Box height={'88%'}>
			<Center style={styles.container} >
				<Text>{message}</Text>
			</Center>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: '50%',
	},
});
