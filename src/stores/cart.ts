import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return { count: 0, ids: [] as number[] };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    Add(id: number) {
      this.count++;
      this.ids.push(id)
    },
  },
});
