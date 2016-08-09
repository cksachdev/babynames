import {expect} from 'chai'
import babynames from '.'

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    expect(babynames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(babynames.random()).to.satisfy(isIncludedIn(babynames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
