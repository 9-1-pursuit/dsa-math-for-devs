let ductTapePrice = 5
let amountOfDuctTape = 4
let percentage = .1
let getDiscountedTotal = 1 - percentage
// console.log(getDiscountedTotal)


let total = amountOfDuctTape * ductTapePrice

// Applying a 10% discount when 3 of the same products are in cart
if(amountOfDuctTape >= 3){
    total *= getDiscountedTotal
    // Two ways to perform same operation
    // total = total - (total * 10) / 100
    // total *= .9
}

// console.log(total)


const pricesPerRoll = [4, 3, 2, 5, 3, 7, 4, 6, 3, 11, 4, 8, 3, 4, 5];

// Valid copy of an array. Explicitly using brackets around the spread operator
// const newArr = [...pricesPerRoll]

// Will throw an error bc cannot assign multiple values to one variable
// const newNums = ...pricesPerRoll
// const nums = 2,3,4,4,6,6,7

// Sorting an array using the compareFunction inside of sort, shoutout Tony Huang!
const sorted = pricesPerRoll.sort((a, b) => a - b)

// Getting the highest price in the sorted array
// console.log(sorted[sorted.length -1])

// Getting the cheapest price in the sorted array
// console.log(sorted[0])


// Math Library methods

// Math.min() takes multiple numbers and will return the smallest
// console.log(Math.min(2,3,4,4,5,6,7))

// Math.max() also takes multiple numbers and will return the greatest
// console.log(Math.max(...pricesPerRoll))


// Math.floor() takes a floating point number(decmial) and will round down
// console.log(Math.floor(2.67))

// Math.ceil() takes a floating point number(decimal) and the number rounded up 
// console.log(Math.ceil(2.000000001))

// Math.round() rounds to the closest integer(whole number)
// console.log(Math.round(2.56)


// Fixed a certain amount of places after the decimal
// console.log(2.79754865734.toFixed(2))


// Find best price
const bestPrice = (compPrices, ourPrice) => {
    const bestComp = Math.min(...compPrices)

    if(bestComp < ourPrice){
        return `Competitor's price is better: ${bestComp}`
    } else {
        return `Our price is better: ${ourPrice}`
    }
}
console.log(bestPrice([4, 7, 21, 36, 98, 10], 1))