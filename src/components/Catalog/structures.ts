interface Data {
  types: any[];
  sizes: any[];
  colors: any[];
  materials: any[];
  brands: any[];
}

export class MarkedList implements Data {
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
  private markedCategoryList: string[];
  constructor(title: string, markedCategoryList: string[]) {
    this.markedCategoryList = markedCategoryList;

    this.title = title;
    this.value = false;
  }
  toggle() {
    if (this.value == false) this.markedCategoryList.push(this.title);
    else
      this.markedCategoryList.splice(
        this.markedCategoryList.indexOf(this.title),
        1
      );
    this.value = !this.value;
  }
}

export class FilterList implements Data {
  types: FilterCell[];
  sizes: FilterCell[];
  colors: FilterCell[];
  materials: FilterCell[];
  brands: FilterCell[];

  markedList: MarkedList;
  constructor(markedList: MarkedList) {
    this.markedList = markedList;

    //Заполнение стартовых true параметров
    for (const [category, values] of Object.entries(data)) {
      this[category] = values.map(
        (title) => new FilterCell(title, markedList[category])
      );
      // заполнить true что отмеченты во входящем markedList. Лутше переписать FilterCell
      for (const marked in markedList[category]) {
        this[category].find((item) => item.title == marked).value = true;
      }
    }
  }
}
import { colorsDictionary } from "../data";
const data: Data = {
  colors: Object.keys(colorsDictionary),
  types: [
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
  ],
  sizes: ["XS", "S", "M", "L ", "XL", "Plus Size"],

  materials: ["Cotton", "Synthetics", "Nappa leather", "Cashmere", "Denim"],
  brands: [
    "Adidas",
    "Ann Taylor",
    "Armani",
    "Banana Republic ",
    "Calvin Klein",
    "Columbia",
  ],
};
