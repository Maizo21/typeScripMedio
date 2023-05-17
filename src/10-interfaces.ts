type Sizes = "small" | "medium" | "large";

interface Product {
  id: string | number;
  name: string;
  price: number;
  size: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  name: "Pizza",
  price: 12.5,
  size: "large",
});
