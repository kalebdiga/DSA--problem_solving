// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// take array of any type of input then move all zeros to end
// example
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//solution breakdown 
/**
 * if empity return []
 *  * if there is no zero return arr
 * declare new empty array
 * loop through array
 * push 
 * 
 */
function moveZeros(arr) {
    let arr2=[]
    let arr1=[]
   
    if(arr.length===0){
        return []
    }
    if(!arr.includes(0)){
        return arr
    }
    for(let i=0; i<arr.length; i++){
        if (![0].includes(arr[i])) arr2.push(arr[i])
        if ([0].includes(arr[i])) arr1.push(arr[i])
     }
  
    return [...arr2,arr1]
  }

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
