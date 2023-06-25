(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 1 ,1),
    stock: 12
  })

  addProduct({
    title: 'pro12',
    createdAt: new Date(2000, 12 ,12),
    stock: 11,
    size: 'S'
  })
  console.log(products);
  products.push({
    title: 'Prod3',
    createdAt: new Date(),
    stock: 12,
    size: 'M'
  })
  console.log(products)
})();
