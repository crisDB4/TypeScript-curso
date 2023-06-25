(() => {
  let userId: string | number;
  userId = 123;
  userId = 'asasas';

  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`string ${myText.toFixed(1)}`);
    }
  }
  greeting('ASA');
  greeting(1212.16);
  // greeting(null);
  // greeting({})
})();
