interface ColorsDictionary {
  [key: string]: string;
}
export const colorsDictionary: ColorsDictionary = {
  Black: "black",
  "Blue-gray": "#C0DDED",
  Yellow: "#FCD164",
  Red: "#F75151",
  "Dark blue": "#0C2C7E",
  Beige: "#D8C1AD",
  Brown: "#874E19",
  Gray: "#9A9494",
  Purple: "#A27AC9",
  Green: "#67BA92",
  Orange: "#FB9620",
  White: "#F1F1F1",
};
export const types = [
  "Coats",
  "Jackets",
  "Suits",
  "Dresses",
  "Cardigans & sweaters",
  "Sweatshirts & hoodies",
  "T-shirts & tops",
  "Pants",
  "Jeans",
  "Shorts",
  "Skirts",
  "Lingerie & nightwear",
  "Sportswear",
  "Swimwear",
  "Boots",
  "Flat shoes",
  "Heels",
  "Sandals",
  "Mules",
  "Sliders",
  "Slippers",
  "Sneakers",
  "Leather",
  "Bags & bagpacks",
  "Hats & scarves",
  "Hair accessories",
  "Belts",
  "Jewellery",
  "Watches",
  "Sunglasses",
  "Purses",
  "Gloves",
  "Socks & tights",
];
export const sizes = ["XS", "S", "M", "L ", "XL", "Plus Size"];

export const materials = [
  "Cotton",
  "Synthetics",
  "Nappa leather",
  "Cashmere",
  "Denim",
];
export const brands = [
  "Adidas",
  "Ann Taylor",
  "Armani",
  "Banana Republic ",
  "Calvin Klein",
  "Columbia",
];
export const colors = Object.keys(colorsDictionary);
const enumeratedFilterData = {
  colors,
  types,
  sizes,
  materials,
  brands,
};
export default enumeratedFilterData;
