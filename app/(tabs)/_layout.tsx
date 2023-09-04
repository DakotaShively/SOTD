import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={12} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "SOTD",
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="spray-can" color={color} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="gear"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			{/* Here I would like a 2nd tab for explore and search */}
			{/* <Tabs.Screen
				name="three"
				options={{
					title: "Explore",
					tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
				}}
			/> */}
			<Tabs.Screen
				name="two"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
				}}
			/>
		</Tabs>
	);
}
