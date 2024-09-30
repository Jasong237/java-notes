//commenty like this

//variables store information in memory
//do this, use const does not allow redefining
const x = 5;
//let allows redefinition
let y = 5;
y = 6;
console.log(y);
// console.log("connected");

//never do this
var z = 5;

//data types, primitive types
//booleans either evaluate true/false
const bool = true;
//string = quotes
const name = "jason";
//numbers integers
const a = 5;
//null, intentional absence of value
const b = null;
//undefined
let c;
//define the function
function add(x, y) {
  //console.log(x, y);
  return x + y; // not magic and isnt saved anywhere
  return d;
}
//call the function
d = add(45, 55);
console.log(d);

//conditional statements
//evaluate to true or false
const guess = 1;
if (guess > 0) {
  console.log("positive number");
} else if (guess < 0) {
  console.log("negative number");
} else if (guess === 0) {
  console.log("number");
} else {
  console.log("not a number");
}

const number = 12;
if (guess % 2) {
  console.log("even");
} else {
  console.log("odd");
}
function isOdd(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
canroam(false, 30, false);
function canroam(herb, pounds, pred) {
  if (typeof herb == true && pounds < 50 && pred == true) {
    console.log("go in");
  } else {
    console.log("go out");
  }
}

discount(200, false, false);
function discount(age, is_resident, has_membership) {
  if (
    age < 12 ||
    age > 65 ||
    typeof is_resident == true ||
    has_membership == true
  ) {
    console.log("OKAY");
  } else {
    console.log("NO");
  }
}

// kg/m^2
/* bmi(jason, 10, 1000);
function bmi(name, height, weight) {
  console.log("name");
  height * height == heightsq;
  weight / heightsq == bmi;
  console.log("x");
} */

function larger(x, y) {
  if (typeof x !== Number || typeof y !== Number) {
    return;
  }
  if (y < x) {
    return x;
  } else if (x < y) {
    return y;
  } else if (y === x) {
    return { x, y };
  }
}

// roam(true, 30, true);
// function roam(is_herbivore, weight, is_predator) {
//   // Check the conditions
//   const isAllowed = is_herbivore && weight < 50 && !is_predator;

//   // Output the result
//   if (isAllowed) {
//     console.log("The animal is allowed in the open area");
//   } else {
//     console.log("The animal is NOT allowed in the open area");
//   }
// }

// Example usage:

// if (x !== typeof(number)){
// == evaluation without type, === evaluation with type
/* 0 == "0"; //equal
0 === "0"; //not equal
0 == false;
0 == undefined;
0 === 0;
 */
