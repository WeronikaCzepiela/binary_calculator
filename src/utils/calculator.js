export const runCalculation = (arg1, arg2, operator) => {
  const decimalArg1 = binaryToDecimal(arg1)
  const decimalArg2 = binaryToDecimal(arg2)
  let decimalResult = 0
  if (operator === '+') {
    decimalResult = decimalArg1 + decimalArg2
  }
  if (operator === '-') {
    decimalResult = decimalArg1 - decimalArg2
  }
  if (operator === 'x') {
    decimalResult = decimalArg1 * decimalArg2
  }
  if (operator === '/') {
    decimalResult = Math.round(decimalArg1 / decimalArg2)
  }
  let binaryResult = decimalToBinary(decimalResult)
  const lenght = binaryResult.length

  if (lenght !== 9) {
    const i = 9 - lenght
    const zeros = Array.from({ length: i }).join('0').split('')
    binaryResult = zeros.concat(binaryResult)
    return binaryResult
  }
  return binaryResult
}

const binaryToDecimal = (arrayOfBinaryNumbers) => parseInt(arrayOfBinaryNumbers.join(''), 2)
const decimalToBinary = (arrayOfDecimalNumbers) =>
  Number(arrayOfDecimalNumbers).toString(2).split('')
