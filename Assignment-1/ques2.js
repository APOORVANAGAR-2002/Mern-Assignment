/* 2. Write the pseudocode & a program to calculate the simple interest
       based on the inputs(amount, rate, time) provided by the user. */

function simpleInterest(principalAmount, rateOfInterest, time){

        return(principalAmount * rateOfInterest * time/100);
}

console.log("Simple Interest: "+simpleInterest(5000, 4.5, 5));
    