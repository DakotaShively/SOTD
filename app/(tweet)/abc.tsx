import tweets from "../tweets";
import Tweet from "../../components/Tweet";

export default function TweetScreen() {
	return <Tweet tweet={tweets[0]} />;
}
