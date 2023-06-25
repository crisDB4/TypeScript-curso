(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; //281
  customerAge = customerAge + 1; //29
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock) // da advertencia de imprimir una variable sin valor
  if (productInStock > 10) { //da la advertencia se una variable vacía
    console.log('is greater')
  }

  let discount = parseInt('123');
  console.log('discount', discount);

  let discountButNan = parseInt('adfasfd');
  // lo tipo nan (not a number) son de tipo number en typescript
  console.log('discountButNan', discountButNan);

  let hex = 0xfff;
  console.log('hex',hex); //4095

  let bin = 0b1010;
  console.log('bin',bin); //10
})();
