// whatIsNumber(integer, method of enumiration)
// method:  1 - from 2 to the root of the number;
//          2 - from the root of the number to the number

try {
    whatIsNumber(29, 2);      
} catch(e) {
    console.log("Error: " + e.name + " (" + e.message + ")");
}

function whatIsNumber(n, method) {
    const prime = "This is a prime number", composite = "This is a composite number";
    let i = 2, counter = 0, nSqrt = Math.floor(Math.sqrt(n));

    if (n > 1000000 || n <= 0 || n == 1) throw new Error("The number is either greater than 1 000 000 or negative or 1");

    if (n % 2 == 0) {
        console.log(composite);
    } 
    else {
        switch(method) {
            case 1: x(n, i, counter, nSqrt);
            break;
            case 2: y(n, counter, nSqrt);
            break;
        }

        if (counter == 0) {
            console.log(prime);
        }
        else console.log(composite);
    }
}

function x(n, i, counter, nSqrt) {
    while ((i <= nSqrt)) {
        if ((n % i) == 0) counter++;
        i++;
    }
}

function y(n, counter, nSqrt) {
    while (nSqrt < n) {
        if ((n % nSqrt) == 0) counter++;
        nSqrt++;
    }
}