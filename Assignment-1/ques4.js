// 4. Write a program to print even numbers after odd times jump.

let num = 2, jump = 1;
while(num <= 50){
    
    process.stdout.write(num+" ");  

    for(let i=0;i<2*jump-1;i++){ 
        num += 2;
    }

    num += 2;
    jump += 1;
}