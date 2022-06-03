const ExpressError = require('./expressError')

function convert_to_arr(str) {
    console.log(typeof str)
   
    let arr = str.toString().split(',').map(n => {
        return Number(n)
    })
    return arr
}

function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }

function inputValidation(str) {
    // inputs required
    // inputs must be nums
    if (str.length == 0) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    
    const valid_chars = '1234567890.'.split('')
    let input = str.split(',')

    for (let el of input) {
        let inputArg = el.split('')
        for (let digit of inputArg) {
            if (!valid_chars.includes(digit)) {
                throw new ExpressError('You can only Pass in numbers')
            }
        }
    }

    return true

    // if (str instanceof Error) {
    //     throw new ExpressError(nums.message);
    // }

}

function findMean(nums) {
    console.log(typeof nums)

    let ints = convert_to_arr(nums)
    
    total = 0
    for (let num of ints) {
        total += num
    }
    
    let result = total / ints.length
    return result
}


const findMedian = function(nums) {
    let ints = convert_to_arr(nums)
    let sorted = ints.sort()
    if (sorted.length % 2 != 0){
        return sorted[(sorted.length / 2) -.5]
        
    } else {
        let first = (sorted.length /2) 
        let second = (sorted.length) /2 -1
        let avg = (sorted[first] + sorted[second]) / 2
        return avg
    }
}

const findMode = function(nums) {
    let ints = convert_to_arr(nums)
    let counter = createFrequencyCounter(ints)

    nums = convert_to_arr(nums)
  
    let max = 0
    let findMode = 0
    let numSet = new Set(nums)

    for(let num of numSet) 
        !counter[num] ? counter[num] + 1 : 1

    
    
    
    for(num in nums) {
        k = num
        if (counter[k] > max) {
            max = counter[num]
            findMode = num
        }
    }

    return parseInt(findMode)

}

NUMS = [1,2,3]

module.exports = {
    
    findMean: findMean,
    findMedian: findMedian,
    findMode: findMode,
    convert_to_arr: convert_to_arr,
    inputValidation: inputValidation,
    createFrequencyCounter: createFrequencyCounter

}