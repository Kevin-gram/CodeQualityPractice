const findSum = (array, i) => {
  if (i < 0) return 0;
  return num[i] + findSum(num, i - 1);
};
