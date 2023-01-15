import { defineStore } from "pinia";

export class EnumerableList {
  list: string[];
  toggle(title: string) {
    let index = this.list.indexOf(title);

    if (index == -1) this.list.push(title);
    else this.list.splice(index, 1);
  }
  constructor(list: string[]) {
    this.list = list;
  }
}

export class MarkedList {
  peopleCategory: string;
  types: EnumerableList;
  sizes: EnumerableList;
  colors: EnumerableList;
  materials: EnumerableList;
  brands: EnumerableList;
  prices: number[];
  constructor(
    peopleCategory: string = "woman",
    types: string[] = [],
    sizes: string[] = [],
    colors: string[] = [],
    materials: string[] = [],
    brands: string[] = [],
    prices: number[] = [100, 1000]
  ) {
    this.peopleCategory = peopleCategory;
    this.types = new EnumerableList(types);
    this.sizes = new EnumerableList(sizes);
    this.colors = new EnumerableList(colors);
    this.materials = new EnumerableList(materials);
    this.brands = new EnumerableList(brands);
    this.prices = prices;
  }
}
export const useFilterStore = defineStore("filter", {
  state: () => {
    return {
      markedList: new MarkedList(),
    };
  },

  actions: {
    Get() {
      return this.markedList;
    },
    Set(peopleCategory: string, types: string[] = []) {
      this.markedList.peopleCategory = peopleCategory;
      this.markedList.types.list = types;
    },
    SetPeople(peopleCategory: string) {
      this.markedList.peopleCategory = peopleCategory;
    },
    SetTypes(types: string[] = []) {
      this.markedList.types.list = types;
    },
    Reset() {
      this.markedList.peopleCategory = "women";
      this.markedList.types.list = [];
      this.markedList.sizes.list = [];
      this.markedList.colors.list = [];
      this.markedList.materials.list = [];
      this.markedList.brands.list = [];
      this.markedList.prices = [100, 1000];
    },
  },
});
