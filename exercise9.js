const calculateMatrixSum = (matrix) =>
  matrix.flat().reduce((accumulator, num) => accumulator + num);
