import { StyleSheet, Image, View, FlatList } from "react-native";
import tweets from "../tweets";
const tweet = tweets[1];
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
	return (
		<View style={styles.page}>
			<FlatList
				data={tweets}
				renderItem={({ item }) => <Tweet tweet={item} />}
			/>
		</View>
		// <>
		// 	<Tweet tweet={tweets[0]} />
		// 	<Tweet tweet={tweets[1]} />
		// </>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
});
