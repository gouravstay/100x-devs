function calculateArithmetic(a, b, arithmeticFinalFunction){
     const ans = arithmeticFinalFunction(a, b);
      return ans;
}

function sum(a, b){
     return a + b;
}
function sub(a, b){
    return a - b;
}


//calling the function
const value = calculateArithmetic(1, 2,sum);
console.log(value);