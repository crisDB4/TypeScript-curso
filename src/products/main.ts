import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'pro1',
  createdAt: new Date(1993, 1 ,1),
  stock: 12
})

addProduct({
  title: 'pro2',
  createdAt: new Date(2000, 12 ,12),
  stock: 6,
  size: 'S'
})

console.log(products);
const total = calcStock();
console.log(total);
