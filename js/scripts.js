// console.log("hello word");
// alert("hello world");
// comments

/* dfaf
dfdfa

adfdsf



dfsadff
*/

// console.log(document.getElementById("blue_box").innerHTML);

// document.getElementById("blue_box").innerHTML =
//   "Rafiqul will be the new content of the element.";

// var table = " chayerkap, kolom, marker, paper";

// table = " amar laptop, amar mouse , keyboard";

// console.log(table);

// var chayerKap = "Pani";

// console.log(chayerKap);

// var table;

// table = "laptop";

// console.log(table);
// var userName = "rafiqul";

// {
//   const userName3 = "shafiqul ";
//   //   userName = "shafiqul";
//   console.log(userName3);
// }

// let roll = '56';

// var num1 = 20;
// var num2 = 3;

// var sum = num1 + num2;
// var subtraction = num1 - num2;
// var division = num1 / num2;
// var multiplication = num1 * num2;

// var average = (num1 + num2) / 2;

// let firstNumber = 20;
// let secondNumber = 30;

// let sum = firstNumber + secondNumber;

// console.log(sum);

// const average = (firstNumber + secondNumber) / 2;

// console.log("avarege result " + average); // concatination

// const longNumber = 20.838837737;

// const afterFixed = longNumber.toFixed(4);

// console.log(afterFixed);
// var power = Math.pow(2,4);  /*  This does 24, which is 16. */

// var roundedNumber = Math.round(2.7); // Rounds to the nearest integer. Result: 3

// var roundUp = Math.ceil(4.3); // Rounds to the next integer. Result: 5

// var roundDown = Math.floor(4.6); // Rounds to the current integer. Result: 4

// var squareRoot = Math.sqrt(36); // Square root. Result: 6

// var randomNumber = Math.random(); // The result is a random number between 0 and 1
// const power = Math.pow(2, 4);

// console.log(power);

// const roundedNumber = Math.random();

// console.log(roundedNumber);

// var orderValue = 2800;

// if (orderValue < 1000) {
//   console.log("You are eligible to finance your order.");
// } else {
//   console.log("Finance options are not available for orders below US$1000");
// }

// let myvalue = null;

// console.log(myvalue);

// rahim , karim , hasan

// subject 4ta bangla , english , math , science

// rahim

// let bangla = 80;
// let english = 90;
// let math = 70;
// let science = 85;

// function calcTotal(banglayPaise, englishPayse, mathPayse, sciencePayse) {
//   let total = banglayPaise + englishPayse + mathPayse + sciencePayse;

//   // console.log("Total marks: " + total);

//   return total;
// }

// //rahim
// let rahimsTotal = calcTotal(80, 90, 70, 85);

// console.log(rahimsTotal);

// let num1 = 20;
// let num2 = 30;

// const sum = (a = 5, b = 10) => a + b;

// console.log(sum());

// function sumAll(...numbers) {
//   return numbers.reduce((acc, val) => acc + val, 0);
// }

// console.log(sumAll(1, 2, 3, 4)); // 10

// const numbersArray = [3, 4, 5, 6];

// const newArray = [...numbersArray];

// console.log("from newArray" + newArray);
// console.log("Hello, World!");

// setTimeout(function () {
//   console.log("Executed after 1 second");
// }, 5000);

// // Arrow version
// setTimeout(() => console.log("Arrow style"), 1000);

//array

// const num1 = 1;
// const num2 = 2;

// const numbers = [
//   "1",
//   2,
//   "3",
//   "4",
//   true,
//   false,
//   null,
//   undefined,
//   "hello",
//   "world",
//   num1,
//   num2,
// ];

// const newArray = [
//   ["rahim", "karim", "hasan", "shamim"],
//   ["mola", "puti", "chanda"],
//   [5, 10, 20, 30],
// ];

// // console.log(newArray[2][3]); // rahim
// const num1 = newArray[2][0];
// const num2 = newArray[2][1];
// const num3 = newArray[2][2];
// const num4 = newArray[2][3];

// const sum = (a, b, c, d) => a + b + c + d;
// console.log(sum(num1, num2, num3, num4)); // 65

var courses = ["HTML", "Python", "PHP"];
console.log(courses); // ["HTML", "Python", "PHP"]

courses.push("JavaScript"); // push method

// ["HTML", "Python", "PHP", "JavaScript"]

courses.push("css");

courses.pop();

courses.unshift("Bootstrap"); // unshift method
courses.shift(); // shift method
console.log(courses); // ["Bootstrap", "HTML", "Python", "PHP", "JavaScript"]
courses.splice(2, 2, "react"); // splice method
console.log(courses); // ["Bootstrap", "HTML", "PHP", "JavaScript"]
