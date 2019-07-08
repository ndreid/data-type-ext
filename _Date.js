export function isDate(value) {
  return !isNaN(new Date(value))
}
export function isEqual(value, date) {
  if (value === undefined && date === undefined) return true
  if (!isDate(value) || !isDate(date)) return false
  return new Date(value).valueOf() === new Date(date).valueOf()
}
export function isBefore(value, date) {
  if (!isDate(value) || !isDate(date)) return false
  return new Date(value) < new Date(date)
}
export function isAfter(value, date) {
  if (!isDate(value) || !isDate(date)) return false
  return new Date(value) > new Date(date)
}
/**
 * Gets the difference between two dates.
 * @param {*} value
 * @param {*} date
 * @param {*} unit 
 * @returns {Number} Difference of two dates
 */
export function diff(value, date, unit = 'millisecond') {
  if (!isDate(value) || !isDate(date)) return undefined
  if (unit === 'month' || unit === 'quarter' || unit === 'year') {
    
  } else {
    let ms = new Date(value).valueOf() - new Date(date).valueOf()
    return Math.round(
        unit === 'millisecond' ? ms
      : unit === 'second'  ? ms / 1e3         // 1000
      : unit === 'minute'  ? ms / 6e4         // 1000 / 60
      : unit === 'hour'    ? ms / 36e5        // 1000 / 60 / 60
      : unit === 'day'     ? ms / 864e5       // 1000 / 60 / 60 / 24
      : unit === 'week'    ? ms / 6048e5      // 1000 / 60 / 60 / 24 / 7
      : unit === 'month'   ? ms / 18342072e3  // 1000 / 60 / 60 / 24 / 7 / 30.3275
      : unit === 'quarter' ? ms / 55026216e3  // 1000 / 60 / 60 / 24 / 7 / 30.3275 / 3
      : unit === 'year'    ? ms / 220204864e3 // 1000 / 60 / 60 / 24 / 7 / 30.3275 / 3 / 4
      : undefined)
  }
}

export function addYears(value, years) {
  if (!isDate(value) || isNaN(years)) return undefined
  let d = new Date(value)
  d.setFullYear(d.getFullYear() + years)
  return toString(d)
}
export function addMonths(value, months) {
  if (!isDate(value) || isNaN(months)) return undefined
  let d = new Date(value)
  d.setMonth(d.getMonth() + months)
  return toString(d)
}
export function addDays(value, days) {
  if (!isDate(value) || isNaN(days)) return undefined
  let d = new Date(value)
  d.setDate(d.getDate() + days)
  return toString(d)
}
export function addHours(value, hours) {
  if (!isDate(value) || isNaN(hours)) return undefined
  let d = new Date(value)
  d.setHours(d.getHours() + hours)
  return toString(d)
}
export function addMinutes(value, minutes) {
  if (!isDate(value) || isNaN(minutes)) return undefined
  let d = new Date(value)
  d.setMinutes(d.getMinutes() + minutes)
  return toString(d)
}
export function addSeconds(value, seconds) {
  if (!isDate(value) || isNaN(seconds)) return undefined
  let d = new Date(value)
  d.setSeconds(d.getSeconds() + seconds)
  return toString(d)
}
export function addMilliseconds(value, milliseconds) {
  if (!isDate(value) || isNaN(milliseconds)) return undefined
  let d = new Date(value)
  d.setMilliseconds(d.getMilliseconds() + milliseconds)
  return toString(d)
}
export function getYear(value) { return isDate(value) ? new Date(value).getFullYear() : undefined }
export function getQuarter(value) { return isDate(value) ? Math.floor(new Date(value).getMonth() / 3) + 1 : undefined }
export function getMonth(value) { return isDate(value) ? new Date(value).getMonth() : undefined }
export function getDay(value) { return isDate(value) ? new Date(value).getDate() : undefined }
export function getWeekday(value) { return isDate(value) ? new Date(value).getDay() : undefined }
export function getHours(value) { return isDate(value) ? new Date(value).getHours() : undefined }
export function getMinutes(value) { return isDate(value) ? new Date(value).getMinutes() : undefined }
export function getSeconds(value) { return isDate(value) ? new Date(value).getSeconds() : undefined }
export function getMilliseconds(value) { return isDate(value) ? new Date(value).getMilliseconds() : undefined }
export function getDaysBetween(start, end) {
  if (!isDate(start) || !isDate(end)) return undefined
  let days = []
  let startDt = new Date(start)
  while (startDt <= new Date(end)) {
    days.push(format(startDt))
    startDt.setDate(startDt.getDate() + 1)
  }
  return days
}
/**
* Converts the value a Date object to its equivalent string representation.

* Format  Description                                                                  Example
* ------  ---------------------------------------------------------------------------  -----------------------
* f      The milliseconds from 0-999                                                  "0" to "999"
* 
* ff     The milliseconds with one leading zero if required.                          "00" to "999"
* 
* fff    The milliseconds with up to two leading zeros if required.                   "000" to "999"
*
* s      The seconds of the minute from 0-59.                                         "0" to "59"
* 
* ss     The seconds of the minute with leading zero if required.                     "00" to "59"
* 
* m      The minute of the hour from 0-59.                                            "0"  or "59"
* 
* mm     The minute of the hour with leading zero if required.                        "00" or "59"
* 
* h      The hour of the day from 1-12.                                               "1"  to "12"
* 
* hh     The hour of the day with leading zero if required.                           "01" to "12"
* 
* H      The hour of the day from 0-23.                                               "0"  to "23"
* 
* HH     The hour of the day with leading zero if required.                           "00" to "23"
* 
* d      The day of the month from 1-31.                                              "1"  to "31"
* 
* dd     The day of the month with leading zero if required.                          "01" to "31"
* 
* ddd    Abbreviated day name.                                                        "Mon" to "Sun" 
* 
* dddd   The full day name.                                                           "Monday" to "Sunday"
* 
* M      The month of the year from 1-12.                                             "1" to "12"
* 
* MM     The month of the year with leading zero if required.                         "01" to "12"
* 
* MMM    Abbreviated month name.                                                      "Jan" to "Dec"
* 
* MMMM   The full month name.                                                         "January" to "December"
* 
* yy     The year as a two-digit number.                                              "99" or "08"
* 
* yyyy   The full four digit year.                                                    "1999" or "2008"
* 
* t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
* 
* tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
* 
* S      The ordinal suffix ("st, "nd", "rd" or "th") of the current day.            "st, "nd", "rd" or "th"
* 
* @param {Date} value   
* @param {String} [format=MM/dd/yyyy] A format string consisting of one or more format spcifiers [Optional].
* @return {String}  A string representation of the current Date object.
*/
export function format(value, format = 'MM/dd/yyyy') {
  if (!isDate(value) || typeof format !== 'string') return ''

  let d = new Date(value)
  return format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g, 
    function (m) {
        if (m.charAt(0) === "\\") return m.replace("\\", "")

        switch (m) {
        case "fff": return p(d.getMilliseconds(), 3)
        case "ff": return p(d.getMilliseconds())
        case "f": return (d.getMilliseconds())
        case "hh": return p((d.getHours() + 23) % 12 + 1)
        case "h": return (d.getHours() + 23) % 12 + 1
        case "HH": return p(d.getHours())
        case "H": return d.getHours()
        case "mm": return p(d.getMinutes())
        case "m": return d.getMinutes()
        case "ss": return p(d.getSeconds())
        case "s": return d.getSeconds()
        case "yyyy": return p(d.getFullYear(), 4)
        case "yy": return p(d.getFullYear())
        case "dddd": return weekdays[d.getDay()]
        case "ddd": return weekdaysAbbr[d.getDay()]
        case "dd": return p(d.getDate())
        case "d": return d.getDate()
        case "MMMM": return months[d.getMonth()]
        case "MMM": return monthsAbbr[d.getMonth()]
        case "MM": return p((d.getMonth() + 1))
        case "M": return d.getMonth() + 1
        case "t": return d.getHours() < 12 ? 'A' : 'P'
        case "tt": return d.getHours() < 12 ? 'AM' : 'PM';
        case "S": return ord(d.getDate());
        default: return m;
        }
    }
  )
}

export function toString(value) {
  if (!isDate(value)) return ''
  let d = new Date(value)
  return ''.concat(d.getFullYear(),'-',p(d.getMonth() + 1),'-',p(d.getDate()),' ',p(d.getHours()),':',p(d.getMinutes()),':',p(d.getSeconds()),'.',p(d.getMilliseconds(),3))
}



// Helper Constants
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const weekdaysAbbr = ["Sun", "Mon", "Tue", 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthsAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const p = (s, l = 2) => ("000" + s).slice(l * -1)
const ord = n => {
  switch (n * 1) {
    case 1: 
    case 21: 
    case 31: 
      return "st";
    case 2: 
    case 22: 
      return "nd";
    case 3: 
    case 23: 
      return "rd";
    default: 
      return "th";
  }
}

export default {
  isDate, isEqual, isBefore, isAfter, diff,
  addYears, addMonths, addDays, addHours, addMinutes, addSeconds, addMilliseconds,
  getYear, getQuarter, getMonth, getDay, getWeekday, getHours, getMinutes, getSeconds, getMilliseconds, getDaysBetween,
  format, toString
}