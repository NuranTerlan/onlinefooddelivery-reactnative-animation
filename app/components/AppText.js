import React from "react";
import { Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import { AppTextStyles } from "../config/defaultStyles";

function AppText({ children, isAnimated = false, style, ...rest }) {
	return isAnimated ? (
		<Animatable.Text
			{...rest}
			useNativeDriver
			style={[AppTextStyles.default, styles.text, Array(style)]}
		>
			{children}
		</Animatable.Text>
	) : (
		<Text style={[AppTextStyles.default, styles.text, Array(style)]}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {},
});

export default AppText;
