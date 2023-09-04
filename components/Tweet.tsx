import { View, Text, Image, StyleSheet } from "react-native";
import tweets from "../app/tweets";
const tweet = tweets[1];

const Tweet = ({ tweet }) => {
	return (
		<View style={styles.container}>
			<Image src={tweet.user.image} style={styles.userImage} />
			<View style={styles.mainContainer}>
				<Text style={styles.name}>{tweet.user.name}</Text>
				<Text style={styles.content}>{tweet.content}</Text>
			</View>
			<View>
				<Image src={tweet.image} style={styles.fragranceImage} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: "lightgrey",
		backgroundColor: "white",
		height: 75,
	},
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	fragranceImage: {
		padding: 1,
		marginHorizontal: -10,
		width: 50,
		height: 50,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	mainContainer: {
		marginLeft: 10,
		flex: 0.9,
	},
	name: {
		fontWeight: "600",
	},
	content: {
		lineHeight: 20,
		marginTop: 2,
		width: 220,
	},
});

export default Tweet;
