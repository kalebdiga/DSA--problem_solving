/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. */
// However, the arrays can have varying lengths, not just limited to 4.

// binaryArrayToNumber([0, 0, 0, 1] )==> 1
// binaryArrayToNumber([0, 0, 1, 0] )==> 2
// binaryArrayToNumber([1, 1, 1, 1] )==> 15
/*
mathematically binary to decimal work multiplying each digit from MSB to LSB with reducing the power of the base number 2.

for example 1 × 2^3 + 1 × 2^2 + 0 × 2^1 + 1 × 2^0=13

declare variable to hold sum

loop through array length





*/
const binaryArrayToNumber = arr => {
    // your code

    let sum=0
    for(let i=0; i<arr.length; i++){
        let j =arr.length-1
        sum+=arr[i] *2**(j-=i)

    }
    console.log(sum);
  };


  binaryArrayToNumber([0,0,1,1,1,0,0,0] ) 
binaryArrayToNumber([0, 0, 1, 0] ) 
binaryArrayToNumber([1, 1, 1, 1] ) 