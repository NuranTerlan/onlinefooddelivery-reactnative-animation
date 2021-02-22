import React from "react";
import { StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
//import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import FoodListingScreen from "./app/screens/FoodListingScreen";
import FoodDetailsScreen from "./app/screens/FoodDetailsScreen";

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					gestureEnabled: false,
				}}
			>
				<Stack.Screen name="FoodListings" component={FoodListingScreen} />
				<Stack.Screen
					name="FoodDetails"
					component={FoodDetailsScreen}
					// sharedElementsConfig={(route, otherRoute, showing) => {
					// 	const { food } = route.params;

					// 	return [
					// 		{
					// 			id: `food.${food.key}.meta`,
					// 			animation: "fade",
					// 			resize: "clip",
					// 			align: "left-top",
					// 		},
					// 		{
					// 			id: `food.${food.key}.image`,
					// 			animation: "fade",
					// 			resize: "clip",
					// 			align: "left-top",
					// 		},
					// 		{
					// 			id: `food.${food.key}.background`,
					// 			animation: "spring",
					// 			resize: "clip",
					// 			align: "left-top",
					// 		},
					// 	];
					// }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
