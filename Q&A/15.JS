/*********
 * Complete the method/function so that it converts dash/underscore delimited words into camel 
 * casing. The first word within the output should be capitalized only if the original word was 
 * capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words 
 * should be always capitalized.
 * 
 * EXAMPLE
 * 
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 * "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


*solution breakdown


 */

function toCamelCase(str){

  let word=""
  str=str.replaceAll("-", "_").split("_")
  word +=str[0]
  for (let i = 1; i < str.length; i++) {
    
    word+=str[i].charAt(0).toUpperCase() +
    str[i].slice(1)
    
  }
return word
}
console.log(toCamelCase("The-Stealth-Warrior"))


console.log(toCamelCase("the_stealth_warrior"))


console.log(toCamelCase("A-B-C"))
console.log(toCamelCase(""))
