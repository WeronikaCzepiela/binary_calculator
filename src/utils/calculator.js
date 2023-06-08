export const getResult = (arg1, arg2, operator) => {
  const decimalArg1 = binaryToDecimal(arg1)
  const decimalArg2 = binaryToDecimal(arg2)
  const binaryResult = decimalToBinary(runCalculations(decimalArg1, decimalArg2, operator))

  return getNormalizedResult(binaryResult)
}

const binaryToDecimal = (arrayOfBinaryNumbers) => parseInt(arrayOfBinaryNumbers.join(''), 2)

const runCalculations = (decimalArg1, decimalArg2, operator) => {
  switch (operator) {
    case '+':
      return decimalArg1 + decimalArg2
    case '-':
      return decimalArg1 - decimalArg2
    case 'x':
      return decimalArg1 * decimalArg2
    case '/':
      return Math.round(decimalArg1 / decimalArg2)
  }
}

const decimalToBinary = (arrayOfDecimalNumbers) =>
  Number(arrayOfDecimalNumbers).toString(2).split('')

const getNormalizedResult = (binaryResult) => {
  const length = binaryResult.length
  console.log(binaryResult)
  if (length < 8) {
    const i = 8 - length
    const zeros = Array.from({ length: i }, () => '0')
    return zeros.concat(binaryResult)
  }

  return binaryResult
}
