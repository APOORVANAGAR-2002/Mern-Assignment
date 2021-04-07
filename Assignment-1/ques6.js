// 6. Write a program to reverse a number

function reverseNum(num){

    let reversed = 0;
    let lastDigit = 0;

    while(num>0){
        lastDigit = Math.floor(num % 10);
        reversed = reversed * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return reversed;

}

console.log("Reverse of no."+1045+" is "+reverseNum(1045));