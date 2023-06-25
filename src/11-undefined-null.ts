(() => {
  // let myNumber: number = undefined; ERROR
  // let myString: string = null; ERROR
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'aass';

  function hi(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase || 'nobody';
  }
  hi('Nicolas');
  hi(null);
})();
