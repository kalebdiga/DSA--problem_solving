/**
 * 
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
 * pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
 It must return the display text as shown in the
 */
// add the name in to the sentence
//  example
/**
 * []                                -->  "no one likes this"
   ["Peter"]                         -->  "Peter likes this"
   ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
   ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
   ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 * 
 */

//    solution breakdown
// check array length
// if array empity return "no one likes this"
// if array contain one name return "name likes this"
// if two or three return "Jacob and Alex like this"/ "Max, John and Mark like this"
// if four return  "Alex, Jacob and 2 others like this"
function likes(names) {

 switch (true) {
    case names.length===0:
        return "no one likes this"
      case names.length=== 1:
      return    `${names[0]} likes this`
      case names.length=== 2:
        return    `${names[0]} and ${names[1]} likes this`
        case names.length=== 3:
            return    `${names[0]}, ${names[1]} and ${names[2]}likes this`
            case names.length>=4:
            return    `${names[0]}, ${names[1]} and ${names.length-2} others likes this`
            
 
    default:
        break;
 }
    // TODO
  }

  console.log(likes(["kaleb", "beki" ,"kaleb" , "beki" ,"kaleb"]));