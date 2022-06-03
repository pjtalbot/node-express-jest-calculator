const ExpressError = require("./expressError");
const {
    findMean,
    findMedian,
    findMode,
    // createFrequencyCounter,
    // convert_to_arr,
    inputValidation
  } = require("./ops");

  // describe('#inputValidation', function() {
  //   it('validates the inputs from the query string are numbers',
  //     function() {
  //         expect(inputValidation('1,3,o,3')).toEqual(false)
  //         expect(inputValidation('1,3,2')).toEqual(true)
  //     })
  // })

  // describe('#convert_to_arr', () => {
  //     it('returns an array', () => {
  //         expect(typeof(convert_to_arr('1,2,3'))).toBeInstanceOf(Array)
  //     })

  // })

  describe("#findMedian", function(){
    it("finds the median when nums.length is even", function(){ 
      expect(findMedian('1,2,4,2')).toEqual(2)
    })
    it("finds the median of an odd set", function () { 
      expect(findMedian([1, -1, 4])).toEqual(1)
    })
  })
  
  describe("#findMean", function () {
    it("finds the mean of an empty array", function () { 
      expect(findMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () { 
      expect(findMean([1,-1,4,2])).toEqual(1.5)
    })
  })
  
  describe("#findMode", function () {
    it("finds the mode", function () { 
      expect(findMode([1,1,1,2,2,3])).toEqual(1)
    })
  })

  describe('input validation tests', function() {
    test('catches non-interger characters', function() {
      expect(inputValidation('1,2,3')).toBeTruthy()
      // wrap inputValidation in another function to check if it throws
      expect(() => inputValidation('1,e,3')).toThrow()
      expect(() => inputValidation('')).toThrow()
      expect(() => inputValidation(null)).toThrow()
      expect(() => inputValidation('1,2,3')).not.toThrow()      
    })
  })