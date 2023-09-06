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
import { Link } from "expo-router";

export default function TabOneScreen() {
	return (
		<View style={styles.page}>
			<FlatList
				data={tweets}
				renderItem={({ item }) => <Tweet tweet={item} />}
			/>
			<View style={styles.container}>
				<Entypo name="squared-plus" size={30} color="#BFC3BA" />
				<Link href="/new-SOTD" asChild style={styles.floatingButton}>
					<Text style={styles.sotdText}>Post your SOTD</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
	floatingButton: {
		backgroundColor: `#7B2D26`,
		height: 50,
		justifyContent: "space-around",
	},
	container: {
		backgroundColor: `#7B2D26`,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		height: 50,
	},
	sotdText: {
		color: `#BFC3BA`,
		padding: 10,
		textAlign: "center",
		fontSize: 25,
	},
});
