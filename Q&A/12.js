/* Write a function that takes in a string of one or more words, 
and returns the same string, but with all words that have five or
 more letters reversed (Just like the name of this Kata). Strings 
 passed in will consist of only letters and spaces.Spaces will be 
 included only when more than one word is present.*/

// reverse a string of word if it is more than 5 lettter word
// example
/*

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/
// steps
/**
 *
 * split words
 * loop through words
 * if word lenght>=5 
 * make it revers
 * then push to new array
 * change array to string 
 

 */






function spinWords(string){
let arr=[]
let word=string.split(" ")
for(let i=0; i<word.length; i++){

if(word[i].length>=5){
 word[i]= word[i].split("").reverse().join("")
   
}
arr.push(word[i])

}
return arr.toString().split(",").join(" ")

  }
