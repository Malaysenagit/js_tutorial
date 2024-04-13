let score = "33abc"  //Enter the below input in score and check( null, undefined, true, "Malay")

//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN (Not a Number)
// true => 1; false => 0

let isloggedIn = null

let booleanIsLoggedIn = Boolean(isloggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
//"" => false
// "Malay" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


//-----------------------OPERATIONS---------------------

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "Hello"
let str2 = " Malay"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)        //Link to Study https://tc39.es/ecma262/#sec-abstract-operations
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(3 + 2 * 4 -5) // this is not a good way to write a code. Always write a code simple clean and Readable

// console.log(+true)
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;        //Link to study
++gameCounter;            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
console.log(gameCounter);