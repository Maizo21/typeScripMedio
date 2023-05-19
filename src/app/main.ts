import { faker } from "@faker-js/faker";
import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    name: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    stock: faker.datatype.number({ min: 1, max: 100 }),
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price()),
    size: "S",
    isNew: faker.datatype.boolean(),
    tags: [faker.commerce.productMaterial()],
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  name: "New Name",
  description: "New Description",
  price: 100,
});

findProducts({
  stock: 10,
  price: 100,
});
