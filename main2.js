function sumTwoSmallestNumbers(numbers) {  
    //question
    /**Create a function that returns the sum of the two lowest
       positive numbers given an array of minimum 4 positive integers.
       No floats or non-positive integers will be passed.**/

// add two smallest number from listed numbers
//sumTwoSmallestNumbers([1, 2,3,4])= 1+3=> 3
//sumTwoSmallestNumbers([19, 5, 42, 2, 77])= 5+2=> 7
//sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])=10+3453445=> 3453455

//  steps

/*
 identify smallest number in the array by sorting
  then cut out those two number and
  add them
*/

numbers =numbers.sort((a, b) => a - b);
  return numbers[0]+numbers[1]
  

}