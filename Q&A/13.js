/**
 * 
 * Write a function that will return the count of distinct 
 * case-insensitive alphabetic characters and numeric digits 
 * that occur more than once in the input string. The input 
 * string can be assumed to contain only alphabets 
 * (both uppercase and lowercase) and numeric digits.
 */

// Example

// "abcde" -> 0
// "aabbcde" -> 2
// "aabBcde" -> 2
// "indivisibility" -> 1
// 
// 
// Solution breakdown
// change all string to lowercase
// loop through string
// add to object as key
// add value as count




function duplicateCount(text){
    let obj={}
    text=text.toLowerCase()
     obj.a
     console.log(obj);
    for(let i=0; i<text.length; i++){
        let char =text[i]
        if(obj[char]>0){
             obj[char] ++;

        }
        else{
          obj[char]=1
        }
    }
 let count= Object.keys(obj).filter(key => obj[key] >= 2)
 return count.length

  }

  duplicateCount('aabBcde')