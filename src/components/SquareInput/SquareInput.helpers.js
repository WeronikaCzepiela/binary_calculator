export const getDefaultValueByVariant = (variant) => {
  if (variant === 'operator') {
    return '+'
  }

  return '0'
}

export const getNextValue = (value, variant) => {
  if (variant !== 'result') {
    switch (value) {
      case '+':
        return '-'
      case '-':
        return 'x'
      case 'x':
        return '/'
      case '/':
        return '+'
      case '0':
        return '1'
      case '1':
        return '0'
    }
  }

  return value
}
