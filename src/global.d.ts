export declare global {
  type Product = {
    title: string;
    oldPrice?: number;
    colors: string[];
    sizes: string[];
    price: number;
    stars: number;
    image: string;
    id: number;
  };
  type ProductLittle = {
    title: string;
    oldPrice?: number;
    price: number;
    stars: number;
    image: string;
    id: number;
  };
  type CartItem = {
    color: string;
    size: string;
    id: number;
  };
  interface FilterCell {
    title: string;
    value: boolean;

    toggle: () => void;
  }
}
