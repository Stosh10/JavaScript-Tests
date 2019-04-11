var number = 225;
console.log(Math.sqrt(number));

var no = 1;
var sum = 0;
while (sum < 12) {
    sum += no;
    no++;

}
console.log(sum);

var no = 1;
var sum = 0;
for (var no = 1; no < 12; no++) {
    sum += no;
}
console.log(sum);

function factorial(number) {
var product = 1;
for ( var i = number; i >= 1; i--){
    product *= i;

}
return product;
}
console.log(factorial(5));