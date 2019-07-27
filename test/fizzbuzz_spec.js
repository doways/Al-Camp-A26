var should = chai.should()
describe('Test fizzBuzz function', function () {
  it('should return fizz with number of 3 times', function () {
    let testData = 9
    let result = fizzBuzz(testData)
    let results = 'Fizz'
    result.should.be.equal(results)
  })
  it('should return Buzz with number of 5 times', function () {
    let testData = 10
    let result = fizzBuzz(testData)
    let results = 'Buzz'
    result.should.be.equal(results)
  })
  it('should return fizzBuzz with number of 5 times and 3 times', function () {
    let testData = 15
    let result = fizzBuzz(testData)
    let results = 'FizzBuzz'
    result.should.be.equal(results)
  })
  it('should return 11 with number that is not both 5 times and 3 times', function () {
    let testData = 11
    let result = fizzBuzz(testData)
    let results = 11
    result.should.be.equal(results)
  })




})