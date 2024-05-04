const fun = require("./functions.js")

// we can also distructure this 
// const {add, sub} = require("./functions.js")

let sumVal = fun.add(3,4)
let subVal =fun.sub(4,3)

console.log(`sumVal: ${sumVal} and subVal: ${subVal}`)

