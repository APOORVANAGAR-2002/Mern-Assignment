// 3. Write the pseudocode & the program to calculate GCD of two numbers.

function gcd(a, b){
    if(a%b == 0){
        return b;
    }
    return gcd(b, a%b);
}

console.log("GCD of given numbers is: "+ gcd(10, 20));