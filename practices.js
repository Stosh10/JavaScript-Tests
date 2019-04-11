//We are gonna have a look at the if statement
var ageAsString ="what is your age?";
var age = Number(ageAsString);
console.log("35");

var ageAsString = "40";
var age = Number(ageAsString);
if (age < 40) {
    console.log( "you are so young...");
    console.log("and 40 is a drag");
} else if  (age == 40) {
    console.log ("You dont look like it");
}
    console.log("thank you"); 
console.log(age);

var age = 10;
 var string = "";
 do {
     string += "Happy Birthday ";
     age -= 1;
 }while (age > 0)
  console.log(string);


var string = "";
var age = 45;
for (var counter = 1; counter < age; counter += 1) { 
    string += "Happy Birthday\n  ";
    if (counter %7 == 0)
    break
}
console.log(string);

var animal = "dog";
switch(animal) {
    case("cat"):
    console.log("meoow");
    break;
    case("dog"):
    console.log("woooof");
    break;
    case("lion"):
    console.log("roar");
    break;
    default:
    console.log("unknown");
}

console.log (1===true);

var x = 5;
var y = x < 10 ? x : 10;
 
console.log(y);


function greet(Who) {
    console.log("hello " + "who ");
}
greet("harry");
console.log("bye")