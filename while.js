var number = 0;
while (number <= 12){
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while(counter < 10){

result = result * 2;
counter = counter + 1;
}
console.log(result);

let yourName = "Stosh";
do {
 yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

var cars = ["BMW","Volvo","Toyota"];
var text = "";
for (var i=0; cars[i];) {
text += cars[i] + "<br>";
i++;
}
console.log(text);
