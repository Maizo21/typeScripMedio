const createProduct = (id: number, isNew: boolean, stock?: number) => {
  return {
    id,
    isNew,
    stock: stock ?? 0,
  };
};

const p1 = createProduct(1, true, 100);
const p2 = createProduct(2, false);

console.log(p1);
console.log(p2);
