import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function CrossScreen({
	children,
	bg = "#fff",
	isScroll = false,
	isAbsolute = false,
	style,
}) {
	return !isAbsolute ? (
		<SafeAreaView
			style={[
				{
					backgroundColor: bg,
				},
				styles.screen,
			]}
		>
			{isScroll ? (
				<ScrollView showsVerticalScrollIndicator={false} style={[{ ...style }]}>
					{children}
				</ScrollView>
			) : (
				<View style={[{ ...style }]}>{children}</View>
			)}
		</SafeAreaView>
	) : isScroll ? (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={[
				{
					backgroundColor: bg,
				},
				styles.screen,
				{ ...style },
			]}
		>
			{children}
		</ScrollView>
	) : (
		<View
			style={[
				{
					backgroundColor: bg,
				},
				styles.screen,
				{ ...style },
			]}
		>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
});

export default CrossScreen;
