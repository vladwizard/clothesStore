import { defineStore } from "pinia";

interface IDictionary {
  CartItem: number;
}

export const useCartStore = defineStore("cart", {
  state: () => {
    return { count: 0, items: new Map<string, number>() };
  },

  actions: {
    Add(count: number, newItem: CartItem) {
      this.count += count;
      let NewItemJson = JSON.stringify(newItem);

      if (this.items.has(NewItemJson))
        /* @ts-ignore */
        this.items.set(NewItemJson, this.items.get(NewItemJson) + count);
      else this.items.set(NewItemJson, count);
    },
  },
});
