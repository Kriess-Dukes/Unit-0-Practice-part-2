//Unit 0 Practice Part 2

/* 1.

Write a function that returns the largest of
two numbers.

Example: 
greaterThan(20, 4) => 20
greaterThan(5, 15) => 15

*/

//Inputs: 1 number
//Outputs: 1 number

 function greaterThan(num1, num2){
  //comparing two numbers
  //determining which one is greater
 if(num1 > num2){
  //returning num 2 is greater
  return num2;
 }
}

//console.log(greaterThan(14, 130))






/* 2.

Write a function that returns the smallest of
two numbers.

Example: 
lessThan(20, 4) => 20
lessThan(5, 15) => 15

*/
//Inputs: 1 number
//Outputs: 1 number

 function lessThan(num1, num2){
  //comparing two numbers
  //determining which one is less
 if(num1 > num2){
  //returning num 2 is less
  return num2;
 }
}

//console.log(lessThan(13, 55))





/* 3.

Write a function that returns all of the values within a given array.

Example: 

var myArray = [0,1,2,3,4,5]

arrayPrint(myArray) => 0 1 2 3 4 5
arrayPrint(['hello', true]) => 'hello'  true

*/

//Inputs: single array
//Outputs: all values in the array

function arrayPrint(array){
  //for loop iterating over array
  //the loop is starting at 0 index
  //and ending at the last index incrementing by 1
  for(var i = 0; i < array.length; i++){
    //the console.log will print the value at each element
    console.log(array[i])
  }
}

var arr = [true, false, 'nope', 'hello', 'coding']

arrayPrinter(arr)



/* 4.

Write a function that prints the numbers from 0 to an input number.

Example: 
counter(6) => 0 1 2 3 4 5 6
counter(10) => 0 1 2 3 4 5 6 7 8 9 10

*/

//Inputs: single numbers
//Outputs: a list of numbers

function counter(num){
  //need a loop to count the nums up to the input num1
  for(var i = 0; i <=; i++){
    console.log(i)
  }
}

counter(10)






/* 5.

Write a function that determines if a given input 
number is even or odd

Example: 
isEven(6) => even
isEven(55) => odd

*/

//Input: single number
//Outputs: string 

//function accepting the parameter of one number
fuction isEven(num){
  if(num % 2 === 0){
    console.log('Even')
  }
  
  else{
    //odd will print to the console
    console.log('Odd')
  }
}







/* 5.

Write a function that determines if a the numbers 
in a given array are even or odd

Example: 

var numArray = 

isEven(6) => even
isEven(55) => odd

*/