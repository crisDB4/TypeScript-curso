(() => {

  const login = (data : {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'micorreo@yo.con',
    password: 12123
  });



  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
})();
