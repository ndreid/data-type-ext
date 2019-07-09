export function isNumber(value) { return !isNaN(value) }
/**
 * Converts number to string with n decimal places
 * @param {String} value 
 * @param {Number} n
 * @returns {String}
 */
export function toFixed(value, n = 2, thousandSeparator = ',') {
  if (isNaN(value)) return ''
  var re = '\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')'
  return value.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&' + thousandSeparator)
}

export function toCurrency(value, n = 2, thousandSeparator = ',') {
  if (isNaN(value)) { return '' }
  var re = '\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')'
  return '$ ' + value.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&' + thousandSeparator)
}

/**
 * Checks if value is between 2 numbers
 * @param {Number} value 
 * @param {Number} n1 
 * @param {Number} n2 
 * @param {Boolean} inclusing 
 */
export function isBetween(value, n1, n2, inclusive = true) {
  return inclusive
    ? Math.min(n1,n2) <= value && value <= Math.max(n1,n2)
    : Math.min(n1,n2) < value && value < Math.max(n1,n2)
}

/**
 * Gets the decimal portion of a number
 * @param {number} value
 */
export function getDecimal(value) {
  if (isNaN(value))
    return undefined
  let str = value.toString()
  return str.includes('.') ? str.split('.')[1] : 0
}

export default {
  isNumber, toFixed, toCurrency, isBetween, getDecimal
}