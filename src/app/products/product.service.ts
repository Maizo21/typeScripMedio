import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";
import { faker } from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProduct: Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: string, changes: Product) => {};
