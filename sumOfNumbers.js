const findSum = (array, i) => {
  if (i < 0) return 0;
  return array[i] + findSum(array, i - 1);
};
