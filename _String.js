/**
 * Adds a space before capital letters. ex: helloWorld => Hello World
 * @param {*} str 
 * @returns {string}
 */
export const spaceCamelCase = str => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim()
}

export default {
  insertSpaces
}
