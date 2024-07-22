/**
 * given two strings, write  a function to determine
 *  if the second string is an anagram of the first. 
 * An anagram is aword, phrase or, name formed by rearranging 
 * the letters of another, such as cinema, formed from iceman.
 */

// Example
/**
 *
 * validAnagram('', '') true
 * validAnagram('anagram', nagaram) true
 */
// solution breakdown
/**
 * 
 * if string length is not equal return false
 */




function validAnagram(string1, string2) {

    let letterCounter1={}
    let letterCounter2={}


if(string1.length!==string2.length){
    return false
}
for (const i of string1) {

    letterCounter1[i]=(letterCounter1[i]||0)+1
    
}
for (const i of string2) {

    letterCounter2[i]=(letterCounter2[i]||0)+1
    
}

for (const key of string1) {
    if(!(key in letterCounter2)){
        return false
    }
    if(letterCounter1[key]!== letterCounter2[key]){
        return false
    }
}





return true
    
}

console.log(validAnagram("abcdefgl","bfcdaegl"));