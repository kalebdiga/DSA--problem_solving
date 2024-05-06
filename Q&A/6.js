// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// input must be 0-9 Don't forget the space after the closing parentheses!

// make phone number from array of number
// example
/*
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


*/
//solution breakdown
/*
loop through array and 
remove number > 9
crate three variable to hold three part of number
the merge it and return
*/ 


function createPhoneNumber(numbers){
let serviceId=[]
let firstThree=[]
 let SecondFour=[]
    for(let i=0; i<numbers.length; i++){
    if(numbers[i]>9){
        break
    }
    if(i<3){
        serviceId.push(numbers[i])
    }
    if(i>2&&i<=5){
        firstThree.push(numbers[i])
    }
    if(i>5&&i<=9){
        SecondFour.push(numbers[i])

    }
  }
serviceId=serviceId.join('').toString()
firstThree=firstThree.join('').toString()
SecondFour=SecondFour.join('').toString()
  return(`(${(serviceId)}) ${firstThree}-${SecondFour}`);
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])