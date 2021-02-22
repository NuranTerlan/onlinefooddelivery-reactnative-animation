import { Dimensions } from "react-native";

export const width = Dimensions.get("screen").width;
export const height = Dimensions.get("screen").height;
export const SPACING = 10;
export const CELL_WIDTH = width * 0.64;
export const CELL_HEIGHT = CELL_WIDTH * 1.4;
export const FULL_SIZE = CELL_WIDTH + SPACING * 2;
