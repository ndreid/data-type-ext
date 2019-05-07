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

export default {
  isNumber, toFixed
}