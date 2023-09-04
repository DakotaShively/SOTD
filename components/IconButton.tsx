import { View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
	icon: React.ComponentProps<typeof EvilIcons>["name"];
	text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			{/* ICON */}
			<EvilIcons name={icon} size={20} color="grey" />
			{/* NUMBER */}
			<Text style={{ fontSize: 10, color: "grey" }}>{text}</Text>
		</View>
	);
};
export default IconButton;
