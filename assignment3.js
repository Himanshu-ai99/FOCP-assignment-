// 1. Create a function processArray(arr, callback) that passes each array
// element to a callback and collects the returned values in a new array.

function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

let a = processArray([1, 2, 3, 4], function(n) {
    return n;
});

console.log(a);

// 2. Use processArray() to square every number in an array.

function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

let an = processArray([1, 2, 3, 4], function(n) {
    return n * n;
});

console.log(an);

// 3. Use processArray() to return only even numbers. 
// Define a suitable callbackand modify the main function if necessary to support filtering.

function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let ans = processArray([1, 2, 3, 4, 5, 6], function(n) {
    return n % 2 === 0;
});

console.log(ans);

// 4. Create a function processString(str, callback) that passes a string to a
// callback

function processString(str, callback) {
    return callback(str);
}

let b = processString("hello world", function(str) {
    return str;
});

console.log(b);

// 5. Use a callback to convert a string to uppercase.

function processString(str, callback) {
    return callback(str);
}

let c = processString("hello world", function(str) {
    return str.toUpperCase();
});

console.log(c);

// 6. Use a callback to count the number of words in a sentence.

function processString(str, callback) {
    return callback(str);
}

let d = processString("JavaScript is easy to learn", function(str) {
    return str.trim().split(/\s+/).length;
});

console.log(d);

// 7. Create a function calculate(a, b, callback) that performs an operation
// based on the callback provided

function calculate(a, b, callback) {
    return callback(a, b);
}

let e = calculate(10, 5, function(a, b) {
    return a + b;
});

console.log(e);

// 8. Use calculate() with callbacks for addition, subtraction, multiplication, anddivision

function calculate(a, b, callback) {
    return callback(a, b);
}

// Addition
console.log("Addition:", calculate(10, 5, function(a, b) {
    return a + b;
}));

// Subtraction
console.log("Subtraction:", calculate(10, 5, function(a, b) {
    return a - b;
}));

// Multiplication
console.log("Multiplication:", calculate(10, 5, function(a, b) {
    return a * b;
}));

// Division
console.log("Division:", calculate(10, 5, function(a, b) {
    return a / b;
}));

// 9. Create a function findElement(arr, callback) that returns the first element
// satisfying a condition, or undefined if no element matches.

function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

let f = findElement([10, 15, 20, 25, 30], function(n) {
    return n > 20;
});

console.log(f);

// 3. Bonus Challenge: Menu-Driven Calculator


function calculate(a, b, callback) {
    return callback(a, b);
}

function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = callback(arr[i]);

        if (value !== null) {
            result.push(value);
        }
    }

    return result;
}

function menuDrivenCalculator() {

    let choice = Number(prompt(
        "Choose Operation:\n" +
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "5. Square Array\n" +
        "6. Even Numbers"
    ));

    if (choice >= 1 && choice <= 4) {

        let a = Number(prompt("Enter first number:"));
        let b = Number(prompt("Enter second number:"));

        let result;

        if (choice === 1) {
            result = calculate(a, b, (x, y) => x + y);
        }
        else if (choice === 2) {
            result = calculate(a, b, (x, y) => x - y);
        }
        else if (choice === 3) {
            result = calculate(a, b, (x, y) => x * y);
        }
        else if (choice === 4) {
            if (b === 0) {
                console.log("Cannot divide by zero");
                return;
            }
            result = calculate(a, b, (x, y) => x / y);
        }

        console.log("Result:", result);
    }

    else if (choice === 5 || choice === 6) {

        let arr = [1, 2, 3, 4, 5, 6];

        let result;

        if (choice === 5) {
            result = processArray(arr, n => n * n);
        }
        else {
            result = processArray(arr, n => {
                return n % 2 === 0 ? n : null;
            });
        }

        console.log("Array Result:", result);
    }

    else {
        console.log("Invalid Choice");
    }
}

menuDrivenCalculator();

