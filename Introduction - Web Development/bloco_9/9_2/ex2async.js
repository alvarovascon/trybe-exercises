const random1To50 = () => Math.ceil(Math.random() * 50);

const createAndSumArray = () => {
  const array = [];
  const squaredArray = [];
  for (let index = 0; index < 10; index +=1) {
    array.push(random1To50());
    squaredArray.push(random1To50() ** 2);
  }
  const sum = squaredArray.reduce((acc, element) => acc + element);
  if (sum > 8000) throw new Error();
  return sum;
};

const fetchPromise = async () => {
  try {
    const sum = await createAndSumArray();
    const outPut = await [2, 3, 5, 10].map(number => sum / number);
    console.log(outPut);
  } catch {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();