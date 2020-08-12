export const primeList = (num) => {
  if (num > 10e5 || num <= 1) {
    return null;
  }

  let isPrimeArr = [];
  let primes = [];

  for (let i = 0; i <= num; i++) {
    isPrimeArr.push(true);
  }

  isPrimeArr[0] = false;
  isPrimeArr[1] = false;

  for (let j = 2; j <= num; j++) {
    if (isPrimeArr[j]) {
      primes.push({ prime_num: j });
      for (let k = j; k * j <= num; k++) {
        isPrimeArr[k * j] = false;
      }
    }
  }

  return primes;
};

// export const isPrime = (data) => {
//   if (primes[primes.length - 1] == num) {
//     result = `${num} is prime`;
//   }

//   if (arr === true) {
//     result = primes;
//   }

//   return result;
// };
