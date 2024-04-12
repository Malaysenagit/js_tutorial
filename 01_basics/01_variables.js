const accountID = 1533153
let accountEmail = "malay@google.com"
var accountPassword = "123456"
accountCity = "EastSinghbhum"
let accountState

// accountID = 2 // not allowed    Variables defined with const cannot be Redeclared

accountEmail = "pupu@google.com"
accountPassword = "135799"
accountCity = "Noida"

console.log(accountID)

/*
Prefer not use var 
because of issue in block scope {} or functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])

/*
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp


What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.
*/