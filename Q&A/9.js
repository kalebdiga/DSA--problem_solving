// Take a Ten Minutes Walk 6kyu
// 
/**
 * 
 * 
 * 
 *array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
  You always walk only a single block for each letter (direction) and you know it takes you 
  one minute to traverse one city block, so create a function that will return true if the 
  walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
   and will, of course, return you to your starting point. Return false otherwise.
 * should return you starting point
 */
// example
//   assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// assert.isFalse(isValidWalk(['w']), 'should return false');
// assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

// solution breakdown
/**
 * if array length not equal to 10 return false
 * represent semilar word to semilar number of value n=1 s=-1
 * declare varable to hold sum 
 * declare object {}
 * beacuse of n and s or e and w are opposite
 * we will count the number of n,s,e,w in the object
 * if n===s && e===w return true
 *  else false
 * 
 *  
 */
// 
function isValidWalk(walk) {
    let direction={}
     //insert brilliant code here
     if(walk.length!==10) return false
     for (let letter of walk){
         letter=letter.toLowerCase()
         if(/['n', 's', 'w', 'e']/.test(letter)){
             direction[letter]=++direction[letter] ||1
         }
     }
     if(direction.n===direction.s && direction.e===direction.w ) return true
     else return false
 
   }
 