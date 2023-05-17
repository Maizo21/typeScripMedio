import { faker } from "@faker-js/faker";
import { addProduct, products } from "./products/product.service";

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
