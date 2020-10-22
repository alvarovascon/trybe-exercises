const random1To50 = () => Math.ceil(Math.random() * 50);

const createdPromise = () => {
  const promise = new Promise((success, fail) => {
    const array = [];
    const squaredArray = [];
    for (let index = 0; index < 10; index +=1) {
      array.push(random1To50());
      squaredArray.push(random1To50() ** 2);
    }
    const sum = squaredArray.reduce((acc, element) => acc + element);
    (sum < 8000) ? success(sum) : fail();
  });
  promise
  .then((sum) => [2, 3, 5, 10].map(number => sum / number))
  .then(array => array.reduce((number, acc) => number + acc, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

createdPromise();
