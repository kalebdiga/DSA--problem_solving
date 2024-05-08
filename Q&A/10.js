// 7 kyu
// Disemvowel Trolls
/**Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */
// remove vowels from string a,e,i,o,u and  y isn't considered a vowel.
// example
// disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//  solution breakdown
// if string does not contain aeiou return orginal string 
// replaceAll with "" if the letter is aeiou
// 

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');

  }


disemvowel("This website is for losers LOL!")
