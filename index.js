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
const guess = 5;
if (guess > 0) {
  console.log("positive number");
} else if (guess < 0) {
  console.log("negative number");
} else if (guess === 0) {
  console.log("number");
} else {
  console.log("not a number");
}

// == evaluation without type, === evaluation with type
/* 0 == "0"; //equal
0 === "0"; //not equal
0 == false;
0 == undefined;
0 === 0;
 */
