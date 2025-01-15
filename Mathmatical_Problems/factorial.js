/*
n=5!
n*(n-1) = 5*(5-1) , 20*(5-2) , 60*(5-3), 120*(5-4) = 120 
*/

const factorial = function (n) {
    if (n === 0 || n === 1) return 1;
    let result = n;
    for (let i = 1; i < n; i++) {
        result *= (n - i);
    }
    return result;
}
console.log(factorial(5));