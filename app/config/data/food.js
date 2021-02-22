import faker from "faker";
import niceColors from "nice-color-palettes";
faker.seed(1);

export const ORANGE = "#FB9B06";

const data = [
	{
		name: "Soup",
		image: "https://image.flaticon.com/icons/png/256/3480/3480438.png",
	},
	{
		name: "Salad",
		image: "https://image.flaticon.com/icons/png/256/3480/3480473.png",
	},
	{
		name: "Rice",
		image: "https://image.flaticon.com/icons/png/256/3480/3480484.png",
	},
	{
		name: "Sushi",
		image: "https://image.flaticon.com/icons/png/256/3480/3480504.png",
	},
	{
		name: "Spaguetti",
		image: "https://image.flaticon.com/icons/png/256/3480/3480618.png",
	},
	{
		name: "Pizza",
		image: "https://image.flaticon.com/icons/png/256/3480/3480627.png",
	},
	{
		name: "Burger",
		image: "https://image.flaticon.com/icons/png/256/3480/3480641.png",
	},
	{
		name: "Fried egg",
		image: "https://image.flaticon.com/icons/png/256/3480/3480653.png",
	},
	{
		name: "Pancake",
		image: "https://image.flaticon.com/icons/png/256/3480/3480681.png",
	},
	{
		name: "French fries",
		image: "https://image.flaticon.com/icons/png/256/3480/3480708.png",
	},
	{
		name: "Steak",
		image: "https://image.flaticon.com/icons/png/256/3480/3480720.png",
	},
	{
		name: "Ice cream",
		image: "https://image.flaticon.com/icons/png/256/3480/3480729.png",
	},
	{
		name: "Roast chicken",
		image: "https://image.flaticon.com/icons/png/256/3480/3480739.png",
	},
	{
		name: "Cheese",
		image: "https://image.flaticon.com/icons/png/256/3480/3480749.png",
	},
	{
		name: "Ramen",
		image: "https://image.flaticon.com/icons/png/256/3480/3480765.png",
	},
	{
		name: "Beer",
		image: "https://image.flaticon.com/icons/png/256/3480/3480796.png",
	},
	{
		name: "Orange juice",
		image: "https://image.flaticon.com/icons/png/256/3480/3480808.png",
	},
	{
		name: "Hot dog",
		image: "https://image.flaticon.com/icons/png/256/3480/3480814.png",
	},
	{
		name: "English breakfast",
		image: "https://image.flaticon.com/icons/png/256/3480/3480823.png",
	},
	{
		name: "Tea",
		image: "https://image.flaticon.com/icons/png/256/3480/3480828.png",
	},
	{
		name: "Waffle",
		image: "https://image.flaticon.com/icons/png/256/3480/3480833.png",
	},
	{
		name: "Lasagna",
		image: "https://image.flaticon.com/icons/png/256/3480/3480844.png",
	},
	{
		name: "Cake",
		image: "https://image.flaticon.com/icons/png/256/3480/3480860.png",
	},
	{
		name: "Donut",
		image: "https://image.flaticon.com/icons/png/256/3480/3480867.png",
	},
	{
		name: "Fish",
		image: "https://image.flaticon.com/icons/png/256/3480/3480870.png",
	},
];

const colors = niceColors[1];

export const tabs = [
	"Today",
	"Chips",
	"Fish",
	"Tea",
	"Burger",
	"Coffee",
	"Drinks",
	"Breakfast",
];

export default data.map((item, index) => ({
	...item,
	key: faker.random.uuid(),
	subName: faker.commerce.productName(),
	color: `${colors[index % colors.length]}66`,
	fullColor: `${colors[index % colors.length]}55`,
	description: [...Array(2).keys()]
		.map(faker.commerce.productDescription)
		.join(". "),
	price: (faker.random.number(200) + 50) / 100,
	subCategories: faker.helpers
		.shuffle(data.filter((food) => food.name != { ...item }.name))
		.slice(0, 3),
}));

export const popularFood = faker.helpers.shuffle(data).map((item) => ({
	...item,
	key: faker.random.uuid(),
	rating: (faker.random.number(30) + 20) / 10,
	price: (faker.random.number(200) + 50) / 100,
}));
