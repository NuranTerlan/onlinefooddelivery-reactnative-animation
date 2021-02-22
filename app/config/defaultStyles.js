import { Platform } from "react-native";

export const AppTextStyles = {
	default: {
		color: "#0c0c0c",
		fontSize: 16,
		fontFamily: Platform.select({
			ios: "San Francisco",
			android: "Roboto",
		}),
	},
};
