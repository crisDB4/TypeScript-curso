(()=>{
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  // se pueden definir strings con comilla doble
  const productDescription: string = "bla bla bla";
  console.log('productDescription', productDescription);

  // se utiliza la comilla doble cuando se quiere utilizar
  // la comilla simple
  // "I'm a person"

  const summary = `
    title: ${productTitle}
    description ${productDescription}
  `
  console.log('summary', summary);

  const myString: string = 'el string correcto';
})();
