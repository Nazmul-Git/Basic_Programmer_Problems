
const primeNumberCheck = function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let num = 7;
if (primeNumberCheck(num)) console.log(`${num} is a prime.`);
else console.log(`${num} is not a prime.`);