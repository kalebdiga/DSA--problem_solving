function oddOrEven(array) {
    //  add numbers from array then decide even or odd
    //    oddOrEven([0])=>even
      //    oddOrEven([0, 1, 4])=>5=odd
    //    oddOrEven( [0, -1, -5])=>-6=even
    // declare sum
    //   loop throgh array 
    //   if arr[i]=0 even
    //   if sum/2===0 even else odd
    
      
      //enter code here
      let sum=0
       if(array.length===1 && array[0]===0){
      return "even"
    }
      for(let i=0; i<array.length; i++){
        sum+=array[i]        
      }
      if(sum%2===0) return "even"
        else return "odd"
    }

    console.log(oddOrEven([2,2]));