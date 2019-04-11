let anArray = ["Dad", "Mom", "Bro",];//This is an array
var i;// this is a variable defined that will be used when you want to list the elements of the array
for (i=0; i<=anArray.length-1; i++) { // this is the execution of the for loop
    console.log(anArray[i]); // depending on the command issued this prints the code that was written on the terminal when running the code
}
// This is the first method of looping through an array.... using the for loop method

var funcs = [],
object = {
a: true,
b: true,
c: true
};
// doesn't cause an error
for (const key in object) {
funcs.push(function() {
console.log(key);
});
}
funcs.forEach(function(func) {
func();
// outputs "a", then "b", then "c"
});