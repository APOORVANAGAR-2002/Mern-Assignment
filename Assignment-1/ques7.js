// 7. Patterns
// a)
let n = 5;
let row = 0;
while(row < n){

    let col = 0;
    while(col<=row){
        process.stdout.write("* ");
        col += 1
    }
    console.log();
    row += 1;
}

console.log();

// ********************************************************************************
// b) 
n = 5;
row = 0;
while(row < n){

    let col = 0;
    while(col<=row){
        process.stdout.write((col+1) + " ");
        col += 1
    }
    console.log();
    row += 1;
}

console.log();

// ********************************************************************************
// c)
n = 5;
row = 0;

while(row < n){

    let col = 0;
    let col_mirror = 0;
    let num = 1;

    while(col_mirror < 2*n){

        if(col < n-row-1){
            process.stdout.write("  ");
        }
        else{
            process.stdout.write(num+" ");
            if(col_mirror < n-1){
                num += 1;
            }
            else{
                num -= 1;
            }
        }

        if(col_mirror < n-1){
            col += 1;
        }
        else{
            col -= 1;
        }

        col_mirror += 1;
    }
    console.log();
    row += 1;
}

console.log();

// ********************************************************************************
// d) 
n = 5;
row = 0;
while(row < n){

    let col = 0;
    let col_mirror = 0;
    let num = row+1;

    while(col_mirror < 2*n-1){

        if(col < n-row-1){
            process.stdout.write("  ");
        }
        else{
            process.stdout.write(num+" ");
            if(col_mirror < n-1){
                num += 1;
            }
            else{
                num -= 1;
            }
        }

        if(col_mirror < n-1){
            col += 1;
        }
        else{
            col -= 1;
        }

        col_mirror += 1;
    }
    
    row += 1;
    num += 1;
    console.log();
}

console.log();

// ********************************************************************************
// e)
n = 6;
row = 0;
while(row < n){

    let col = 0;
    while(col <= row){
        
        if(col==0 || col==row){
            process.stdout.write(1+" ");
        }
        else{
            process.stdout.write(binomial(row, col)+" ");
        }
        col += 1;
    }

    console.log();
    row += 1;
}
function binomial(a, b){
    result = 1;
    if (b > a - b) {
        b = a - b;
    }
    for (let i = 0; i < b; ++i)
    {
        result *= (a - i);
        result /= (i + 1);
    }
     
    return result
}

console.log();

// ********************************************************************************
// f)
n = 5;
row = 0;
let row_mirror = 0;
while(row_mirror < 2*n-1){
    let col = 0;
    let col_mirror = 0;
    while(col_mirror < 2*n-1){

        if(col < n-row-1){
            process.stdout.write("  ");
        }
        else{
            process.stdout.write("* ");
        }

        if(col_mirror < n-1){
            col += 1;
        }
        else{
            col -= 1;
        }

        col_mirror += 1;
    }
    if(row_mirror < n-1){
        row += 1;
    }
    else{
        row -= 1;
    }

    console.log();

    row_mirror += 1;
}

console.log();

// ********************************************************************************
// g)
n = 5;
row = 0;
row_mirror = 0;
while(row_mirror < 2*n - 1){

    let col = 0;
    let col_mirror = 0;
    while(col_mirror < 2*n - 1){
        if(col <= row){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write("  ");
        }

        if(col_mirror < n-1){
            col += 1;
        }
        else{
            col -= 1;
        }

        col_mirror += 1;
    }
    if(row_mirror < n - 1){
        row += 1;
    }
    else{
        row -= 1;
    }
    console.log();
    row_mirror += 1;
}

console.log();

// ********************************************************************************
// h) 
n = 5;
row = 0;
row_mirror = 0;
while(row_mirror < 2*n-1){
    let col = 0;
    let col_mirror = 0;
    while(col_mirror < 2*n-1){

        if(col < n-row){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write("  ");
        }

        if(col_mirror < n-1){
            col += 1;
        }
        else{
            col -= 1;
        }

        col_mirror += 1;
    }
    if(row_mirror < n-1){
        row += 1;
    }
    else{
        row -= 1;
    }

    console.log();

    row_mirror += 1;
}

console.log()

// ********************************************************************************
// i)
n = 5;
row = 0;
row_mirror = 0;
while(row_mirror < 2*n - 1){

    let col = 0;
    let col_mirror = 0;
    while(col_mirror < 2*n-1){

        if(col >= row){
            process.stdout.write((n-row)+" ");
        }
        else{
            process.stdout.write((n-col)+" ");
        }

        if(col_mirror < n-1){
            col += 1;
        }
        else{
            col -= 1;
        }

        col_mirror += 1;
    }

    if(row_mirror < n-1){
        row += 1;
    }
    else{
        row -= 1;
    }

    row_mirror += 1;
    console.log();
}