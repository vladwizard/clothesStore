export class MarkedList {
  peopleCategory: string;
  types: string[];
  sizes: string[];
  colors: string[];
  materials: string[];
  brands: string[];
  prices: number[];
  constructor(
    peopleCategory: string,
    types: string[],
    sizes: string[],
    colors: string[],
    materials: string[],
    brands: string[],
    prices: number[]
  ) {
    this.peopleCategory = peopleCategory;
    this.types = types;
    this.sizes = sizes;
    this.colors = colors;
    this.materials = materials;
    this.brands = brands;
    this.prices = prices;
  }
}

export class FilterCell {
  title: string;
  value: boolean;

  constructor(title: string) {
    this.title = title;
    this.value = false;
  }
  toggle() {
    this.value = !this.value;
  }
}

import { colors } from "../data";
export class FilterList {
  // peopleCategory: string;

  types: FilterCell[];
  sizes: FilterCell[];
  colors: FilterCell[];
  materials: FilterCell[];
  brands: FilterCell[];

  prices: number[];

  private markedList: MarkedList;
  constructor(markedList: MarkedList ) {
    this.markedList = markedList;
    const types = [
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
    const sizes = ["XS", "S", "M", "L ", "XL", "Plus Size"];
    
    const materials = [
      "Cotton",
      "Synthetics",
      "Nappa leather",
      "Cashmere",
      "Denim",
    ];
    const brands = [
      "Adidas",
      "Ann Taylor",
      "Armani",
      "Banana Republic ",
      "Calvin Klein",
      "Columbia",
    ];

    this.types = types.map((title) => new FilterCell(title));
    this.sizes = sizes.map((title) => new FilterCell(title));
    this.colors = colors.map((color) => new FilterCell(color.title));
    this.materials = materials.map(
      (title) => new FilterCell(title)
    );
    this.brands = brands.map((title) => new FilterCell(title));
    this.prices = [100,1000];

  }
}
