import { defineStore } from "pinia";

export class MarkedList {
  peopleCategory: string;
  types: string[];
  sizes: string[];
  colors: string[];
  materials: string[];
  brands: string[];
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
    this.types = types;
    this.sizes = sizes;
    this.colors = colors;
    this.materials = materials;
    this.brands = brands;
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
      this.markedList.types = types;
    },
    SetPeople(peopleCategory: string) {
      this.markedList.peopleCategory = peopleCategory;
    },
    SetTypes(types: string[] = []) {
      this.markedList.types = types;
    },
    Reset() {
      this.markedList.peopleCategory = "women";
      this.markedList.types = [];
      this.markedList.sizes = [];
      this.markedList.colors = [];
      this.markedList.materials = [];
      this.markedList.brands = [];
      this.markedList.prices = [100, 1000];
    },
  },
});
