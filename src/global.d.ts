export declare global {
  type Collection = {
    title: string;
    category: string;
    image: string;
  };
  type Product = {
    title: string;
    price: string;
    stars: string;
    image: string;
  };
  interface FilterList {
    type: string[];
    size: string[];
    color: string[];
    material: string[];
    brand: string[];
    price: string[];
  }
}
