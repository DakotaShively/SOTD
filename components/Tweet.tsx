import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { TweetType } from "../types";
import IconButton from "./IconButton";
import { Link } from "expo-router";

type TweetProps = {
	tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
	return (
		<View>
			<Pressable style={styles.container}>
				<Image src={tweet.user.image} style={styles.userImage} />
				<View style={styles.mainContainer}>
					<Text style={styles.name}>{tweet.user.name}</Text>
					<Text style={styles.content}>{tweet.content}</Text>
				</View>
				<View>
					<Image src={tweet.image} style={styles.fragranceImage} />
				</View>
			</Pressable>
			<View style={styles.footer}>
				<IconButton icon="comment" text={tweet.numberOfComments} />
				<IconButton icon="retweet" text={tweet.numberOfRetweets} />
				<IconButton icon="heart" text={tweet.numberOfLikes} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		flexDirection: "row",
		backgroundColor: "white",
		height: 70,
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

	footer: {
		flexDirection: "row",
		marginVertical: 5,
		justifyContent: "space-evenly",
		height: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: "lightgrey",
	},
});

export default Tweet;
