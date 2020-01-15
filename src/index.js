// whatIsNumber(integer, method of enumiration)
// method:  1 - from 2 to the root of the number;
//          2 - from the root of the number to the number

try {
    whatIsNumber(3, 1);      
} catch(e) {
    console.log("Error: " + e.name + " (" + e.message + ")");
}

function whatIsNumber(n, method) {
    n = Math.floor(n);
    const prime = n + ' is a prime number', composite = n + ' is a composite number';
    let i = 2, counter = 0, nSqrt = Math.sqrt(n);
    
    if (n > 1000000 || n <= 1) throw new Error("The number is either less than 2 or greater than 1 000 000");
    if (method != 1 && method != 2) throw new Error("Method of enumiration must be 1 or 2");

    if (n % 2 == 0) {
        console.log(composite);
    } 
    else {
        switch(method) {
            case 1: counter = x(i, counter, nSqrt);
            break;
            case 2: counter = y(n, counter, nSqrt);
            break;
        }
        
        if (counter == 0) {
            console.log(prime);
        }
        else console.log(composite);
    }
}

function x(i, counter, nSqrt) {
    while ((i <= nSqrt)) {
        if ((nSqrt % i) == 0) counter++;
        i++;
    }
    return counter;
}

function y(n, counter, nSqrt) {
    while (nSqrt < n) {
        if ((n % nSqrt) == 0) counter++;
        nSqrt++;  
    }
    return counter;
}