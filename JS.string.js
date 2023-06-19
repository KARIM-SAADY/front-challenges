/*
charAt=> method
param => num of string
return => the string
*/

'karim'.charAt(3) // r

/*
length=> method
param => num of  all string
return => the num of all string 
*/
'karim'.length // 5

/*
trim  trimStart  trimEnd  => method
param =>
return => the string on space
*/
'  karim  '.trim() // 'karim'
'  karim  '.trimStart() //  'karim  '
'  karim  '.trimEnd() //  '  karim'

/*
toUpperCase => method
toLowerCase => method
param =>
return => big and small string
*/

'karim'.toUpperCase() // 'KARIM'
'KARIM'.toLowerCase() // 'karim'

/*
indexOf lastIndexOF  => method
param => search for this word in a string
return => index number if found or -1 if not founded.
*/
'karim samir saady'.indexOf('samir') //  6


/*
slice => method
param => start, end (optional)  و ممكن بالسالب 
return => slice from start to end
*/
'karim samir saady'.slice(6,11) //'samir'

/*
repeat => method 
param => repeat times
return => return new string with repeating words
*/
'karim'.repeat(2)// karimkarim

/*
split => method
param => split by character limit (cut)
return => array of strings
*/
'karim'.split('') //['k','a','r','i','m']

/*
substring => method
param => start ,end (optional )
return => substring between two indexes
*/
'karim samir saady'.substring(6,11) //samir

/*
substr => method 
param => start ,length (optional )
return => substring between one index and length
*/
'karim samir saady'.substr(0,5) //karim


/*
includes => method
param => what we want to find inside the string و المكان اللى ابداء البحث منه 
return => true/false
*/
'karim samir saady'.includes('saady')//true


/*
startsWith => method
param => what we want to check if it starts with that word or not  (index).
return => true / false
*/
'karim'.startsWith('k')//true

/*
endsWith => method
param => what we want to check if it ends with that word or not (length)  .
return => true / false
*/
'samir'.endsWith('r')//true

















// ********************number*****************

/*
toString => method 
param => none.
return => number as a String type
*/

100..toString // '100'


/*
toFixed => method
param => how many digits after decimal point you need, default is zero.
return => fixed number in string format
*/

123456.888888.toFixed(3) // 123456.889


/*
parseInt => method
param => the base of your integer value ,default is ten. (تحليلي للبيانات )
return => parsed intiger from any given input
*/

parseInt('123abc') // 123


/*
parseFloat => method
param => same with parseInt but for floating numbers.
return => floatig point number formated to an interger or vice versa .
*/

parseFloat("123.88karim") // 123.88


/*
isInteger =>method
param => nothing
return => true if it's whole number and false otherwise.
*/
7.isInteger() //true


/*
isNaN => method
param => anything that can be converted into Number type.
return => return boolean based on whether its NaN or not.
*/
123.NaN //false



