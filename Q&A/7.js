// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other:

// remove if the number the same 
//example
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//  solution breakdown
// second array can be multiple
/*
loop through first array
if the second array not include the firest array
return first array

*/


function arrayDiff(a, b) {
let Output=[]
    if(a.length===0){
    return []
}
if(b.length===0){
    return a
}
for(let i=0; i<a.length; i++){
   if (!b.includes(a[i])) Output.push(a[i])
} 
return Output
}
arrayDiff([1,2,1],[1]) 
arrayDiff([1,2,2,2,3],[2]) 
arrayDiff([1,2,2,3], [1,2])