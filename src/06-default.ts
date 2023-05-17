const createProduct2 = (
  id: number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock: stock ?? 0,
  };
};

const p4 = createProduct2(1, true, 100);
const p5 = createProduct2(2, false);

console.log(p1);
console.log(p2);
