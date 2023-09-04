import {
	StyleSheet,
	Image,
	View,
	FlatList,
	Pressable,
	Text,
} from "react-native";
import tweets from "../tweets";
const tweet = tweets[1];
import Tweet from "../../components/Tweet";
import { Entypo } from "@expo/vector-icons";

export default function TabOneScreen() {
	return (
		<View style={styles.page}>
			<FlatList
				data={tweets}
				renderItem={({ item }) => <Tweet tweet={item} />}
			/>
			<Pressable style={styles.floatingButton}>
				<View style={styles.container}>
					<Entypo name="squared-plus" size={40} color="yellow" />
					<Text style={styles.sotdText}>Post your SOTD</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
	floatingButton: {
		backgroundColor: "grey",
		height: 50,
	},
	container: {
		flexDirection: "row",
	},
	sotdText: {
		padding: 5,
		alignSelf: "center",
		fontSize: 25,
	},
});
