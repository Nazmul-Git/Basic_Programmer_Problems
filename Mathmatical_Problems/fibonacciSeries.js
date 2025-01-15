/*
 0,1,1,2,3,5,8,13,21,34......

 >nextNum = 0+1=1 , 1+1=2, 1+2=3, 2+3=5 , 3+5=8..........
*/

const fibonacciSeriese= function(n){
    let seriese = [];
    if(n<=0) return seriese;
    seriese.push(0);
    if(n>1) seriese.push(1);

    for(let i=2; i<n; i++){
        let nextNum=seriese[i-1]+seriese[i-2];
        seriese.push(nextNum);
    }
    return seriese;
}
console.log(fibonacciSeriese(10));