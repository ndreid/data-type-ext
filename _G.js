export const coalesce = (...params) => {
  for (let param of params) {
    if (param !== undefined && param !== null && param !== NaN) {
      return param
    }
  }
}

export default {
  coalesce
}
