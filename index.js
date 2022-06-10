const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo'), 300);
});

// myPromise
//   .then(value=> console.log('Value', value))
//   .catch(error => console.log(`Error: ${error}`));

const testAwait = async () => {
  const value = await myPromise;

  console.log(value);
};

testAwait();
// async function testAwait() {
//   const value = await myPromise;
// }
