import uniqueRandomArray from 'unique-random-array'
const babyNames = require('./babynames.json')

const mainExport = {
  all: babyNames,
  random: uniqueRandomArray(babyNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
