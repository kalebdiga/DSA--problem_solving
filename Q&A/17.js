/***
 * 
 * implement a function called countUniqueValues, which accepts a sorted  
 * array and counts the unique values in the array. there can be negative
 *  numbers in the array, but it will always be sorted.
 */
// Example
/**
 * countUniqueValues([1,1,1,1,2]) //2
 * 
 */

// solution breakdown
/**
 * input sorted array of number
 * 
 * if array empity return //0
 * 
 * 
 */

function countUniqueValues(array){
  if (array.lenght===0){
    return 0
  }
let j=0
  for (let i = 1; i < array.length; i++) {
        if(array[j]!==array[i])
        {
          j++
          array[j]=array[i]
            
        }
    
  }
  return j+1

}

console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]));