/* 1. Write the pseudocode & a program to input credits of a Code for Cause
Campus leader and then output the badge of the lead on the basis of
the following criteria:
a. 7500 <= credits : Tera leader
b. 6000 <= credits < 7500 : Gega leader
c. 4500 <= credits < 6000 : Mega leader
d. Credits < 4500 : Rising Star */

let credits = 5500;
if(credits >= 7500){
    console.log("Tera leader");
}
else if(credits >= 6000){
    console.log("Gega Leader");
}
else if(credits >= 4500){
    console.log("Mega Leader");
}
else{
    console.log("Rising Star");
}