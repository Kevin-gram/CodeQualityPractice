const isPrime = (number) => {
  const sol = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      sol.push(i);
    }
  }
  return sol.length > 2 ? false : true;
};
