import React, { useState } from "react";
import {
	StyleSheet,
	FlatList,
	View,
	TouchableOpacity,
	Image,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { AntDesign } from "@expo/vector-icons";

import food, { tabs, ORANGE, popularFood } from "../config/data/food";
import { SPACING, CELL_WIDTH, CELL_HEIGHT, FULL_SIZE } from "../config/theme";
import CrossScreen from "../components/CrossScreen";
import AppText from "../components/AppText";
import ListItemSeperator from "./../components/ListItemSeperator";

function FoodListingScreen({ navigation }) {
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	return (
		<CrossScreen isScroll>
			<FlatList
				data={tabs}
				keyExtractor={(item, index) => `${item}-${index}`}
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ flexGrow: 0 }}
				contentContainerStyle={{ padding: 15 }}
				renderItem={({ item: tab }) => {
					let selectionCondition = selectedTab === tab;
					return (
						<TouchableOpacity onPress={() => setSelectedTab(tab)}>
							<View
								style={[
									styles.pill,
									{
										backgroundColor: selectionCondition
											? ORANGE
											: "transparent",
									},
								]}
							>
								<AppText
									style={[
										styles.pillText,
										{
											color: selectionCondition ? "white" : "black",
										},
									]}
								>
									{tab}
								</AppText>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
			<FlatList
				data={food}
				keyExtractor={(item) => item.key}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={FULL_SIZE}
				decelerationRate="fast"
				renderItem={({ item: food }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("FoodDetails", { food });
							}}
							style={{
								width: CELL_WIDTH,
								height: CELL_HEIGHT,
								margin: SPACING,
							}}
						>
							<View style={{ flex: 1, justifyContent: "center" }}>
								<SharedElement
									id={`food.${food.key}.background`}
									style={[StyleSheet.absoluteFillObject]}
								>
									<View
										style={[
											StyleSheet.absoluteFillObject,
											{
												backgroundColor: food.color,
												borderRadius: 16,
											},
										]}
									/>
								</SharedElement>
								<SharedElement
									id={`food.${food.key}.meta`}
									style={[StyleSheet.absoluteFillObject]}
								>
									<View
										style={{
											position: "absolute",
											top: SPACING,
											left: SPACING,
										}}
									>
										<AppText style={styles.foodName}>{food.name}</AppText>
										<AppText style={styles.foodSubName}>{food.subName}</AppText>
									</View>
								</SharedElement>
								<SharedElement
									id={`food.${food.key}.image`}
									style={styles.foodImage}
								>
									<Image
										source={{ uri: food.image }}
										style={styles.foodImage}
									/>
								</SharedElement>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
			<FlatList
				data={popularFood}
				keyExtractor={(item) => item.key}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={ListItemSeperator}
				renderItem={({ item: food }) => {
					return (
						<TouchableOpacity
							style={[
								styles.rowList,
								{ alignItems: "center", padding: SPACING },
							]}
						>
							<Image
								source={{ uri: food.image }}
								style={styles.popularFoodImage}
							/>
							<View style={{ flex: 1 }}>
								<AppText style={styles.popularFoodName}>{food.name}</AppText>
								<View style={styles.rowList}>
									<AntDesign
										name="star"
										size={16}
										color={ORANGE}
										style={{ marginRight: SPACING / 2 }}
									/>
									<AppText style={{ fontWeight: "bold" }}>
										{food.rating}
									</AppText>
								</View>
							</View>
							<AppText style={styles.popularFoodPrice}>${food.price}</AppText>
						</TouchableOpacity>
					);
				}}
			/>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({
	pill: {
		paddingHorizontal: SPACING,
		paddingVertical: SPACING / 2,
		borderRadius: 99,
	},
	pillText: {
		fontWeight: "bold",
		fontSize: 16,
	},
	rowList: {
		flexDirection: "row",
	},
	popularFoodImage: {
		width: 54,
		height: 54,
		resizeMode: "contain",
		marginRight: SPACING,
	},
	popularFoodName: {
		fontWeight: "bold",
		fontSize: 16,
	},
	popularFoodPrice: {
		fontWeight: "bold",
	},
	foodName: {
		fontWeight: "bold",
		fontSize: 22,
	},
	foodSubName: {
		fontSize: 12,
		opacity: 0.8,
	},
	foodImage: {
		width: CELL_WIDTH * 0.7,
		height: CELL_WIDTH * 0.7,
		alignSelf: "center",
		resizeMode: "contain",
		position: "absolute",
	},
});

export default FoodListingScreen;
