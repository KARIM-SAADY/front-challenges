// ************************** challenges in edabit.com ***************************** 



/*
Create a function that returns true if a string is empty and false otherwise.

Examples



isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false




function isEmpty(s) {
	return (!s || s.length === 0 );
}


*/









/*
Write a function that returns the string "something" joined with a space " " and the given argument a.

Examples


giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"


function giveMeSomething(a) {
	let b = "something "
	let  result = b.concat(a)
	return result
}

*/









/*
A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

Examples


nameString("Mubashir") ➞ "MubashirEdabit"

nameString("Matt") ➞ "MattEdabit"

nameString("javaScript") ➞ "javaScriptEdabit"



function nameString(name){
	var b = "Edabit"
	var result = name + b
return result
}

*/











/*
Create a function that takes a boolean variable flag and returns it as a string.

Examples
boolToString(true) ➞ "true"

boolToString(false) ➞ "false" 


function boolToString(flag) {
return flag.toString()	
}


*/








/*
Create a function that will handle simple math expressions. The input is an expression in the form of a string.

Examples
calculator("23+4") ➞ 27

calculator("45-15") ➞ 30

calculator("13+2-5*2") ➞ 5

calculator("49/7*2-3") ➞ 11



function calculator(str) {
	return (eval(str))
}


*/









/*
Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

Can you help her?

Examples
greeting("Matt") ➞ "Hello, Matt!"

greeting("Helen") ➞ "Hello, Helen!"

greeting("Mubashir") ➞ "Hello, my Love!"



function greeting(name) {

if(name == "Mubashir") {
    return "Hello, my Love!"; 
}

	return "Hello, " + name + "!";
}

*/









/*
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

Examples
comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false



function comp(str1, str2) {
	return str1.length === str2.length;
	
}

*/












/*
Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0 




function length(str) {
return str.length
}

*/











/*
Create a function that takes a string and returns it as an integer.

Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12



function stringInt(str) {
	return parseInt(str);
}

*/














/*
Write a function that returns true if k^k == n for input (n, k) and return false otherwise.

Examples
kToK(4, 2) ➞ true

kToK(387420489, 9) ➞ true
// 9^9 == 387420489

kToK(3124, 5) ➞ false

kToK(17, 3) ➞ false



function kToK(n, k) {
	return k**k == n;
}
*/











/*
Create a function that takes two numbers as arguments and returns their sum.

Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10



function addition(a, b) {
	return (a + b)
}
*/










/*





*/