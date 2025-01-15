/*
sum = 0+5+0+1

> 105 % 10 = 5  
> 10 % 10 = 0 
> 1 % 10 = 1

>num= 105 / 10 = 10 
>num= 10/10 = 1
>num= 1/10 = 0
*/


const sumOfDigits = function(num){
    let sum=0;
    while(num>0){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfDigits(105))