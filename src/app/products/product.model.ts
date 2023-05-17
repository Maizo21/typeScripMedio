export type Sizes = "small" | "medium" | "large";

export interface Product {
  id: string | number;
  name: string;
  price: number;
  size: Sizes;
}
