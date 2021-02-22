import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";

import CrossScreen from "../components/CrossScreen";
import AppText from "../components/AppText";
import { SPACING, CELL_WIDTH, height } from "../config/theme";

const createAnimatinon = (from) => ({
	0: { opacity: 0, translateY: -100, translateX: from },
	1: { opacity: 1, translateY: 0, translateX: 0 },
});
const textAnimation = {
	0: { opacity: 0, translateY: 100 },
	1: { opacity: 1, translateY: 0 },
};
const subCategoriesAnimations = [
	createAnimatinon(100),
	createAnimatinon(0),
	createAnimatinon(-100),
];
const imageAnimation = {
	0: { opacity: 0, scale: 0 },
	1: { opacity: 1, scale: 1 },
};
const DURATION = 100;

function FoodDetailsScreen({ navigation, route }) {
	const { food } = route.params;

	return (
		<CrossScreen isAbsolute>
			<SharedElement
				id={`food.${food.key}.background`}
				style={[StyleSheet.absoluteFillObject]}
			>
				<View
					style={[
						StyleSheet.absoluteFillObject,
						{ backgroundColor: food.color },
					]}
				/>
			</SharedElement>
			<SharedElement id={`food.${food.key}.meta`}>
				<View
					style={{
						position: "absolute",
						top: SPACING * 6,
						left: SPACING * 2,
					}}
				>
					<AppText style={styles.foodName}>{food.name}</AppText>
					<AppText style={styles.foodSubName}>{food.subName}</AppText>
				</View>
			</SharedElement>
			<View style={styles.imagesContainer}>
				<SharedElement id={`food.${food.key}.image`}>
					<Image
						// useNativeDriver
						// animation={imageAnimation}
						// delay={DURATION}
						source={{ uri: food.image }}
						style={styles.foodImage}
					/>
				</SharedElement>
				<View style={styles.subImagesContainer}>
					{food.subCategories.map((subCategory, index) => {
						return (
							<Animatable.View
								useNativeDriver
								animation={subCategoriesAnimations[index]}
								delay={DURATION + 100 * index}
								key={subCategory.name}
								style={{
									backgroundColor: food.fullColor,
									padding: SPACING * 1.5,
									borderRadius: 99,
								}}
							>
								<Image
									// useNativeDriver
									// animation={imageAnimation}
									// delay={DURATION + 100}
									source={{ uri: subCategory.image }}
									style={styles.subImage}
								/>
							</Animatable.View>
						);
					})}
				</View>
			</View>
			<AntDesign
				name="close"
				size={28}
				style={styles.closeIcon}
				color="#333"
				onPress={() => {
					navigation.goBack();
				}}
			/>
			<View style={{ padding: SPACING }}>
				<AppText
					isAnimated
					animation={textAnimation}
					delay={DURATION + 200}
					style={styles.foodPrice}
				>
					${food.price}
				</AppText>
				<AppText
					isAnimated
					animation={textAnimation}
					delay={DURATION + 450}
					style={styles.foodDescription}
				>
					{food.description}
				</AppText>
			</View>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		padding: SPACING,
		position: "absolute",
		top: SPACING * 4,
		right: SPACING,
		zIndex: 2,
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
		width: CELL_WIDTH * 0.9,
		height: CELL_WIDTH * 0.9,
		alignSelf: "center",
		resizeMode: "contain",
		marginVertical: SPACING * 4,
		zIndex: 9,
	},
	foodPrice: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: SPACING / 2,
	},
	foodDescription: {
		fontSize: 15,
		lineHeight: 20,
		color: "rgba(0, 0, 0, 0.65)",
	},
	imagesContainer: {
		marginTop: height * 0.1,
	},
	subImagesContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginBottom: SPACING * 3,
	},
	subImage: {
		width: 40,
		height: 40,
		resizeMode: "contain",
	},
});

FoodDetailsScreen.sharedElements = (route, otherRoute, showing) => {
	const { food } = route.params;

	return [
		{
			id: `food.${food.key}.meta`,
			animation: "fade",
			resize: "clip",
			align: "left-top",
		},
		{
			id: `food.${food.key}.image`,
			animation: "fade",
			resize: "clip",
			align: "left-top",
		},
		{
			id: `food.${food.key}.background`,
			animation: "spring",
			resize: "clip",
			align: "left-top",
		},
	];
};

export default FoodDetailsScreen;
