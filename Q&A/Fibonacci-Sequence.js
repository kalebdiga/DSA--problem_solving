/********************************Question*******************************/
/*  give a number 'n', find the first 'n' elements of the Fibonacci sequence  */
/********************************Question*******************************/

function fibonacci(n){
    let x=[0, 1]
    for(let i=2; i<n; i++ ){
       x[i]=x[i-1]+x[i-2]
    }
    console.log(x);
}
fibonacci(7) 
// [0112358]