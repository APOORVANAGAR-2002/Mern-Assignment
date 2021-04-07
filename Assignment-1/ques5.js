// 5. Write a program to count the number of digits in a number.

function countDigits(num){

    let count = 0;
    while(num > 0){
        num = Math.floor(num / 10);
        count += 1
    }
    return count;
}

console.log("No. of digits in the given no. is "+ countDigits(5));