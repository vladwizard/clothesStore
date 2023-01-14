import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", {
  state: () => {
    return {
      markedList: {
        peopleCategory: "women",
        types: [],
        sizes: [],
        colors: [],
        materials: [],
        brands: [],
        prices: [100, 1000],
      } as MarkedList,
    };
  },

  actions: {
    Get() {
      return this.markedList;
    },
    SetPeople(value: string) {
      this.markedList.peopleCategory = value.toLowerCase();
    },
    SetTypes(values: string[]) {
      this.markedList.types = values;
    },
  },
});
