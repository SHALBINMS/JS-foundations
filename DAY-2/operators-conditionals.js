let a = 15;
let b = 4;

let sum = a + b;
let diff = a - b;
let prod = a * b;
let div = a / b;
let rem = a % b ;


let num = 12;
let val = num % 2 === 0 ? "even" : "odd";
console.log(val);

let x = 10;
let y = 7;

if(x > y)
{
    console.log("x is greater");
}
else if(x === y)
{
    console.log("both are equal");
}
else
{
    console.log("y is greater");
}

let age = 23;

if (age >= 18)
{
    console.log("Eligible to vote");
    
}
else
{
    console.log("Not Eligible to vote");
}

let marks = 77;

if (marks >= 90)
{
    console.log("Grade A");
}
else if(marks >= 75)
{
     console.log("Grade B");
}
else if(marks >= 60)
{
     console.log("Grade C");
}
else
{
     console.log("FAIL");
}


let value = 0;

if (value)
{
    console.log("Truthy");
}
else
{
    console.log("falsy");
}

let isLoggedIn = true;
let mssg = isLoggedIn?"Welcome back":"Please login";
console.log(mssg);

