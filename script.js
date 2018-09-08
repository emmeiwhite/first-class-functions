// 1. Let's assign a function to a variable

// Different Patterns :
function square(number){
    return number*number;
}

function cube(number){
    return number*number*number;
}

function multiply(number){
    return number*2;
}

/////////////////////////////////
let s = square;
let c = cube;

console.log(s(3));
console.log(c(3));

// 2. Let's pass the function to another function and make use of it. We will pass a pattern function, say square or cube function and pass a variable to get either the squares or cubes or whatever is the pattern


let arr = [1,2,3,4,5,6];
function patterns_generator(func,array){
    let result = [];

    array.forEach(element => {
        result.push(func(element)); // Making use of function that is passed and passing in the array values
    });

    return result;
}

let squares = patterns_generator(s,arr);
let cubes = patterns_generator(c,arr);
let multiples = patterns_generator(multiply,arr);

console.log(squares);
console.log(cubes);
console.log(multiples);

// 3. Returning the function from a function : CLOSURE comes into play: It is also known as the HIGHER ORDER FUNCTION

let outerFunction = ()=>{
    let color = "Green"; // Variable of outerFunction

    return innerFunction=()=>{
        console.log(`COLOR from outer Function is ${color}`);
    }
}

let innerFunctionReference = outerFunction();

innerFunctionReference();
// Even after the outerFunction had returned innerFunction we are still able to access the outerFunction variable color in our innerFunction.This behaviour is possible because of CLOSURE :)

