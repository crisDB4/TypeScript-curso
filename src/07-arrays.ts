(() => {
  let prices = [1,2,2,3,4,2,1,'hola',true];
  // prices.push('asasdfa');
  // prices.push(true);
  // prices.push({})
  prices.push(1231);
  prices = [12,1];

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  //mixed.push([])
})();
