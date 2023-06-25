(() => {
  type UserId = string | number;
  let userId: UserId;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //shirtSize = 's';

  function greeting(userId: UserId, size: Sizes) {
    if(typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    } else {
      console.log(`string ${userId.toFixed(1)}`);
    }
  }
  greeting(123, 'L');
})();
