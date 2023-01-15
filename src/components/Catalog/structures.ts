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


export class FilterList {
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
        markedList[category].forEach(element => {
          let cell = this[category].find((item) => item.title == element)
          if(cell != undefined) cell.value = true;
        });

         
          // this[category].find((item) => item.title == marked).value = true;

      // заполнить true что отмеченты во входящем markedList. Лутше переписать FilterCell

    }
  }
}
import { colorsDictionary } from "../data";
const data = {
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
