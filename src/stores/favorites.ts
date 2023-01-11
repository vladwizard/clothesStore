import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorites", {
  state: () => {
    return { count: 0, ids: [] as number[] };
  },

  actions: {
    Add(id: number) {
      let index = this.ids.indexOf(id);
      if (index == -1) {
        this.ids.push(id);
        this.count++;
      } else {
        this.ids.splice(index, 1);
        this.count--;
      }
    },
    isHere(id: number) {
      return this.ids.includes(id);
    },
  },
});
