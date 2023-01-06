export declare global {
  type Collection = {
    title: string;
    category: string;
    image: string;
  };
  type Product = {
    title: string;
    price: number;
    stars: number;
    image: string;
    id: number;
  };

  interface FilterList {
    peopleCategory: string;
    types: string[];
    sizes: string[];
    colors: string[];
    materials: string[];
    brands: string[];
    prices: number[];
    add: (category: string, value: string) => void;
  }
}
