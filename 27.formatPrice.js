// 金额转千分位
const formatPrice = (number) => {
  number = '' + number

  const [ integer, decimal = '' ] = number.split('.')

  return integer.replace(/\B(?=(\d{3})+$)/g, ',') + (decimal ? '.' + decimal : '')
}

console.log(formatPrice(123456789.3343))