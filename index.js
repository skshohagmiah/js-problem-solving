// function uniqueInOrder(str){
//   const arr = [];
//   for(let i = 0; i <= str.length; i++){
//     if(str[i] !== str[i + 1]){
//       arr.push(str[i])
//     }
//   }
//   return arr;
// }

// const value =  uniqueInOrder('AAAABBBCCDAABBB')
// console.log(value)
// ['A', 'B', 'C', 'D', 'A', 'B']

// function printWithDelay(num){
//   console.log('start here')
//   for(let i = 0; i<= num; i++){
//     setTimeout(() => {
//       console.log(i)
//     },i * 1000 )
//   }
//   console.log('end here')

// }
// printWithDelay(10)

// const arr = [1,2,3,4,5,6,7,8,];
// function printWthStar(){
//   let star = '';
//   for(let i=0; i <= arr.length; i++){
//     if(star.length <= arr[i]){
//       star += "*"
//     }
//     console.log(`${i} ${star}\n`)
//   }
// }
// printWthStar()

// function checkPalindrome(str){
//   for(let i=0; i<= str.length; i++){
//     for(let j= str.length -1; j>=0; j-- ){
//       if(str[i] === str[j]){
//         return true
//       }else{
//         return false
//       }
//     }
//   }
// }

// const check = checkPalindrome('owo')
// console.log(check)

// function getSum(a, b)
// {
//   let result = null;
//    if(a === b ){
//      return a;
//    }
//   const min = Math.min(a,b);
//   const max = Math.max(a,b);
//   for(let i=min; i<= max; i++){
//     result += i;
// }
//   return result
// }

// function findShort(s){
//     const strArr = s.split(' ');
//     let result = strArr[0];
//     for(let i = 0; i <= strArr.length -1; i++){
//       if(result.length > strArr[i].length){
//         result = strArr[i]
//       }

//   }
//   console.log(result)
//   return result;
//   }
//   findShort('hello worldoo hey oo')

// function findOutlier(integers){
//     //your code here
//     const even = [];
//     const odd = [];
//     for(let i = 0; i<= integers.length - 1; i++){
//       if(integers[i] % 2 === 0){
//         even.push(integers[i])
//       }else{
//         odd.push(integers[i])
//       }
//   }
//     return even.length > odd.length ? Number(...odd) : Number(...even)
//   }

//  const value = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
//  console.log(value)

// function getMiddle(s) {
//   const len = s.length;
//   const even = len % 2 === 0 ? len : null;
//   let middle;
//   if(even){
//      middle = even / 2 ;
//     return s[middle -1] + s[middle]
//   }else{
//     middle = Math.floor(len / 2)
//     return s[middle]
//   }
// }
// const middle = getMiddle('testa')
// console.log(middle)

// function maskify(cc) {
//     const strArr = cc.split('') ;
//     for(let i = 0; i < strArr.length - 4; i++){
//         strArr[i] = '#'
//    }
//    console.log(strArr.join(''))
//    return strArr.join('')
// }

// maskify('4556364607935616')

// function duplicateCount(text){
//     let duplicate = 0;
//     for(let i = 0; i< text.length -1; i++){
//       for(let j = text.length -1; j >=0; j--){
//         if(text[i] === text[j]){
//             duplicate += 1

//         }else{

//         }
//       }
//   }
//   console.log(duplicate)
//   }

//   duplicateCount('aabbcde')

// let x =10;
// let y = 5;
// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.random());
// console.log(Math.max(3,5,6));
// console.log(Math.min(1,7,9));
// console.log(Math.pow(x, y));
// console.log(Math.sqrt(x));
// console.log(Math.abs(x));
// console.log(Math.PI);
// console.log(Math.E);

// // Global scope
// let globalVar = "I'm global";
// function exampleFunction() {
//     // function scope
//     let localVar = "I'm local";
//     console.log(globalVar);
//     console.log(localVar);
//     if(true){
//         // block scope
//         let localVar = 'inside the block scope'
//         console.log(localVar)
//     }
// }
// exampleFunction();
// console.log(globalVar);

// // Global context
// console.log(this === window);
// // Regular function context
// function myFunction() {
//     console.log(this);
// }
// myFunction();

// const myObject = {
//     myMethod: myFunction
// };
// myObject.myMethod();
// // Method context
// const person = {
//     name: 'John',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// person.sayHello();
// // Arrow function
// const anotherObject = {
//     anotherMethod: () => {
//         console.log(this);
//     }
// };
// anotherObject.anotherMethod()

// function isPangram(string){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     console.log(alpha)
//     return alpha.every(word => string.toLowerCase().includes(word))
//     //...
//   }
// console.log(isPangram('The quick brown fox jumps over the lazy dog'))

// function findOdd(A) {
//     let result = null;
//     let counts = {};
//     A.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
//     const values = Object.entries(counts)
//     values.forEach((item) => {
//         if(item[1] % 2 !== 0){
//             result = item[0]
//         }
//     })
//     return Number(result);
//   }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

// function countSmileys(arr) {
//     const newArr = [];
//     for(let i = 0; i< arr.length -1; i++){
//     if(arr[i] === ":)"){
//       newArr.push(arr[i])
//   }else if(arr[i] === ":D"){
//     newArr.push(arr[i])
//   }else if(arr[i] === ";-D"){
//     newArr.push(arr[i])
//   }else if(arr[i] === ":~)"){
//     newArr.push(arr[i])
//     }
// }
//     return newArr.length;
// }

// console.time('start')
// function descentSort(arr){
//   for(let i=0, j=1; i<arr.length;){
//     if(arr[i] < arr[j]){
//       const temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//     j++

//     if(j === arr.length){
//       i++
//       j = i
//     }

//   }
//   return arr
// }
// console.log(descentSort([1,3,2,5,6,7,4,8,3,4,5,6,5,78,89,89,0,9,0,78,67]))
// console.timeEnd('start')

// console.time('start')
// function descentSort(arr){
//   for(let i =0; i<arr.length -1; i++){
//     for(let j= i+1; j<arr.length; j++){
//       if(arr[i] < arr[j]){
//         const temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }

// console.log(descentSort([1,3,2,5,6,7,4,8,3,4,5,6,5,78,89,89,0,9,0,78,67,6]))
// console.timeEnd('start')

// javascript function practice
// function normalFunction(){
//   console.log('this a normal function')
// }

// const arrowFunction = () => {
//   console.log('this is arrow function')
// }

// function nestedFunction(){
//   function anotherFunction(){
//     console.log('this is a nested function')
//   }
//   anotherFunction()
// }

// function callbackFunction(callback){
//   callback()
// }
// normalFunction()
// arrowFunction()
// nestedFunction()
// callbackFunction(() => {console.log('callback functon')})

//javascript loops
// let  limit = 100;

// for(let i = 0; i<limit; i++){
//   console.log('at iteration no:', i)
// };

// while(limit >= 10){
//   console.log('in the white loop' )
//   limit--
// }

// do{
//   console.log('inside do while loop')
//   limit--
// }while(limit >= 5)

//count arrays
// function countArrays(arr){
//   let count = 0;
//   arr.forEach(element => {
//     if(element instanceof Array){
//       count++
//       element.forEach(item => {
//         if(item instanceof Array){
//           count++
//         }
//       })
//     }
//   });
//   return count
// }

// countArrays(['string',[[1]],[2],0,true,[3],[5]])

// function createName(arr){
//   let name = '';
//   for(let i=0; i<arr.length; i++){
//     switch(arr[i]){
//       case 's':
//         console.log(arr[i])
//         name += arr[i];
//       case 'h':
//         name += arr[i];
//       case 'o':
//         name += arr[i];
//       case 'h':
//         name += arr[i];
//       case 'a':
//         name += arr[i];
//       case 'g':
//         name += arr[i];
//       default:
//         return 'nothing'
//     }
//   }
//   return name
// }

// console.log(createName('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()))

// function createName(str) {
//   let name = [];
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case 's':
//         name[0] = str[i];
//         break;
//       case 'h':
//         name[1] = str[i];
//         name[3] = str[i]
//         break;
//       case 'o':
//         name[2] = str[i];
//         break;
//       case 'a':
//         name[4] = str[i];
//         break;
//       case 'g':
//         name[5] = str[i];
//         break;
//       default:
//          'nothing';
//     }
//   }
//   return name.join('');
// }

// createName('abcdefghijklmnopqrstuvwxyz'); // should return shohag name

//javascript conditionals
// let age = 18;

// // if statement
// if (age >= 18) {
//   console.log("You are an adult.");
// }

// let grade = 85;

// // if-else statement
// if (grade >= 90) {
//   console.log("A");
// } else {
//   console.log("B");
// }

// let num = 0;

// // else-if statement
// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// let day = "Monday";

// // switch statement
// switch (day) {
//   case "Monday":
//     console.log("It's the start of the week.");
//     break;
//   case "Friday":
//     console.log("It's almost the weekend!");
//     break;
//   default:
//     console.log("It's another day.");
// }

// function binarySearch(arr, target){

//   const middle = Math.floor(arr.length / 2);
//   let start = arr.slice(0, middle);
//   let end = arr.slice(middle);

//   if(target === arr[middle]){
//     return middle;
//   }
//   if(target < arr[middle]){
//    return binarySearch(start, target)
//   }
//   if(target > arr[middle]){
//    return middle + 1 + binarySearch(end, target)
//   }
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 10));

// function binarySearch(arr, target) {
//   const middle = Math.floor(arr.length / 2);
//   let start = arr.slice(0, middle);
//   let end = arr.slice(middle);

//   if (target === arr[middle]) {
//     return middle;
//   }
//   if (target < arr[middle]) {
//     return binarySearch(start, target);
//   }
//   if (target > arr[middle]) {
//     return middle + binarySearch(end, target);
//   }
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 7));

// function countDuplicate(arr){
//   const counts = {};
//   arr.forEach(element => {
//     let count = 0;
//     arr.forEach(item => {
//       if(element === item){
//         count++
//       }
//     })
//     counts[element] = count
//   });
// return counts
// }

// console.log(countDuplicate([1,2,3,4,4,4,6,6,7,8,8]))

// function x(y){
//   if(y < 1){

//     return 5;
//   }
//       var z = x(y - 1) + 1;
//       console.log(`call-x(${y}) = ${z}` );
//       return z;
//     }

// let m = x(5)

// console.log(m)

// const arr = [1,2,3,4,5,6,7,8,9]

// Array.prototype.MyFilter = function(func){
//   const newArr = [];
//   for(let i = this[0]; i <= this.length; i++){
//     if(func(i) === true){
//       newArr.push(i);
//     }else{
//       continue;
//     }
//   }
//   return newArr
// }
// console.log(arr.MyFilter((item) => item > 5))

// Array.prototype.MyReduce = function(func,value = 0){
//   let returnedValue;
//   let accumulator = value
//   for(let i = 0; i<this.length; i++){

//     accumulator = func(accumulator,this[i])
//   }
//   return accumulator;
// }

// console.log(arr.MyReduce((accu, item) => accu + item))
// console.log(arr.reduce((accu, item) => accu + item))

// // roman numeral converter
// function solution (roman) {
//     // complete the solution by transforming the
//     // string roman numeral into an integer
//     let value = 0;
//     const letteral = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
//     for(let i = 0; i< roman.length; i++){
//         for(let key in letteral){
//             if(roman[i] === key){
//                 value += letteral[key]
//                 }
//             }

//         }
//         return value;
//     }

// console.log(solution('IV'))

// roman numeral converter
// function solution (roman) {
//     // complete the solution by transforming the
//     // string roman numeral into an integer
//     let value = 0;
//     const letteral = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
//     for(let i = 0; i< roman.length; i++){
//         const currentValue = letteral[roman[i]];
//         const nextValue = letteral[roman[i + 1]];
//         if(currentValue < nextValue){
//             value -= currentValue
//         }else{
//             value += currentValue
//         }

//         }
//         return value;
//     }

// console.log(solution('IV'))

//Complete the solution so that the function will break up camel casing, using a space between words.
// complete the function
// function solution(string) {
//     const strArr = string.split('');
//     const newArr = [];
//     for(let i = 0; i < strArr.length; i++){
//         if(strArr[i] === strArr[i].toUpperCase()){
//            newArr.push(' ',strArr[i])

//         }else{
//             newArr.push(strArr[i])
//         }
//     }
//    return newArr.join('')
// }
// console.log(solution('camelCasingTest' ))

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// function cakes(recipe, available) {
//    let maxCakes = Infinity;
//    for(let ingredient in recipe){
//     if(available.hasOwnProperty(ingredient)){
//         const ratio = available[ingredient] / recipe[ingredient];
//         maxCakes = Math.min(maxCakes, ratio)
//     }else{
//         return 0
//     }
// }
// return Math.floor(maxCakes);
//   }

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

// function cakes(recipe,available){
//     // let maxCakes = 0;
//     let maxInt = 0;
//     const keys = Object.keys(recipe);
//     maxInt = measure(keys[0]);

//     if(maxInt > 0){
//         for(let key in recipe){
//             let a = Math.min(maxInt, measure(key))
//             if(a < maxInt){
//                 maxInt = a;
//             }
//         }
//         if(maxInt <= 0){
//             return 0;
//         }else{
//             return maxInt;
//         }
//     }

//     function measure(key){
//         let x = available[key] / recipe[key];
//         if(x){
//             return Math.floor(x);
//         }else{
//             return 0;
//         }
//     }

// }

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

// function cakes(recipe, available) {
//     let maxInt = Infinity;

//     for (let key in recipe) {
//       const a = measure(key);
//       if (a === 0) {
//         return 0; // If any ingredient can't be satisfied, return 0.
//       }
//       maxInt = Math.min(maxInt, a);
//     }

//     return maxInt;

//     function measure(key) {
//       const x = available[key] / recipe[key];
//       return x ? Math.floor(x) : 0;
//     }
//   }

//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// let countBits = function(n) {
//     // Program Me
//     let binaryString = n.toString(2);
//     let oneCount = 0;
//     for(let i = 0; i < binaryString.length; i++){
//         if(binaryString[i] == 1){
//             oneCount+= 1;
//         }
//     }
//     return oneCount
//   };

// console.log(countBits(1234))

// function domainName(url){
//     //your code here
//     const domainMatch = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)(?:\.\w+)?/i);
//     return domainMatch[1].split('.')[0]
//   }

// console.log(domainName('http://github.com/carbonfive/raygun'))

// function isValidIP(str) {
//     const strArr = str.split('.');
//     if(strArr.length > 4 || strArr.length < 4){
//       return false;
//     }
//     for(let i = 0; i<strArr.length; i++){
//       if(strArr[i].length > 1 && strArr[i].startsWith('0')){
//         return false
//       }

//       if(Number(strArr[i]) > 255){
//         return false;
//       }
//     }
//     return true;
//   }

// console.log(isValidIP('0.0.0.0'))

// // 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// // 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// // 4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {
//     //code me
//     let totalMultification = 0;
//     let numArr = num.toString().split('')
//     let len = numArr.length;

//     if(numArr.length <= 1){
//         return 0
//     }

//     while(len >= 0){
//         numArr = num.toString().split('')
//         if(numArr.length === 1){
//             return totalMultification
//         }
//         num = numArr.reduce((accu, item) => accu * item);
//         len -= 1;
//         totalMultification += 1
//     }
//     return totalMultification
//  }

// console.log(persistence(999))

// function findUniq(arr) {
//     // do magic
//     let uniqNumber;
//     for(let i = 0; i < arr.sort((a,b) => a - b).length; i++){
//         if(arr[i] !== arr[i + 1]){
//             uniqNumber = arr[i + 1]
//             break;
//         }
//     }
//     return uniqNumber
//   }

// console.log(findUniq([ 3, 5, 3, 3, 3 ]))

// function fibonacci(n){
//     const fib = [0,1];
//     for(let i = 0; i < n - 1; i++){
//         fib.push(fib[i] + fib[i + 1])
//     }
//     return fib[fib.length - 1];

// }

// function isPrime(n){
//     if(n<=1){
//         return 'provide a valid prime number'
//     }
//     for(let i = 2; i<n; i++){
//         if(n % i === 0){
//             return 'not a prime number'
//         }
//         else return 'its a prime number'
//     }
// }

// function factorial(n){
//     if(n === 1){
//         return 1
//     }
//     console.log(factorial(n-1) * factorial(n-2))
//     return factorial(n-1) * factorial(n - 2)}

// console.log(factorial(4))

// class RomanNumerals {

//     static toRoman(num) {

//       console.log(num.toString().split(""))

//       return ;
//     }

//     static fromRoman(str) {
//         let result = 0;
//         let numerals = {
//             M:1000,
//             D:500,
//             C:100,
//             L:50,
//             X:10,   let result = 0;
//         let numerals = {
//             M:1000,
//             D:500,
//             C:100,
//             L:50,
//             X:10,
//             V:5,
//             IV:4,
//             I:1,

//         }
//             V:5,
//             IV:4,
//             I:1,

//         }

//     for(let i = 0; i< str.length; i++){
//         const currentValue = numerals[str[i]];
//         const nextValue = numerals[str[i + 1]];
//         if(currentValue < nextValue){
//             result -= currentValue;
//         }else{
//             result += currentValue;
//         }
//     }

//       return result;
//     }
//   }

//   console.log(RomanNumerals.fromRoman('IV'))

// const arr = [1,1,2,3,4,4,4,5,6,6,5];

// function duplicateCount(arr){
//     const counts = {};
//     arr.forEach(element => {
//         counts[element] = (counts[element] || 0) + 1;

//     });
//     return counts;
// }

// console.log(duplicateCount(arr))

// function pigIt(str){
//     //Code here
//     let result =[];
//     const stringArr = str.split(' ')
//    for(let i = 0; i< stringArr.length; i++){
//     if(stringArr[i].match(/[^\w\s]+/g)){
//         result.push(stringArr[i])
//         continue;
//     }
//     const wordArr = stringArr[i].split('');
//     const firstLetter = wordArr.splice(0,1);
//     wordArr[wordArr.length] = `${firstLetter}ay`
//     result.push(wordArr.join(''))
//    }
//    return result.join(' ')
//   }

//   console.log(pigIt('Pig latin  is cool'))

// function numberToRoman(num) {
//    let remaining = num;
//   let result = '';
//   let numerals = [
//     {value:'1000',symbol:'M'},
//     {value:'500' ,symbol: "D"},
//     {value:'100', symbol: "C"},
//     {value:'50', symbol: "L"},
//     {value:'10', symbol: 'X'},
//     {value:'5' ,symbol: "V"},
//     {value:'4', symbol: "IV"},
//     {value:'1', symbol: "I"},

//   ];

//   for(let i = 0; i < numerals.length ; i++){
//     while(remaining >= Number(numerals[i].value)){
//         result += numerals[i].symbol;
//         remaining -= Number(numerals[i].value);
//     }}

// return result
// }
// console.log(numberToRoman(100))