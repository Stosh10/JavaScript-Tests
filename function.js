// Functions can be created with a name or anonymously  and assigned to a variable
var constant = 32;
function celsiusToFarenheight(temperature){
    var farenheightTemp = temperature * 9/5 + constant;
    return farenheightTemp;
}
console.log(celsiusToFarenheight(100));

var x = 15;
if (x < 20) {
    var y = x;
}
var z = y;
console.log(z);

function hypotenuse () {
    var side1 = 3;
    var side2 = 4;
    function squareSide1() {
        return side1 * side1;
    }
    function squareSide2() {
return side2 * side2;
    }
    return Math.sqrt(squareSide1() + squareSide2());
}
console.log(hypotenuse());










function func(a, b) {
    return a(b);
}

function firstClass(name){
    return name ** name;
}
    console.log(func(firstClass, 10));


    const myArray = [4,7,3];
    const newArray = myArray.map((a, b) => {
return  a**b;
    });
    console.log(newArray);

    function convertToInteger(){
        let myArray = [0,1,1,0,1];
        function func(myArray, exponent){
            var exponent;
            for (let exponent = 0; exponent <= 4; exponent++);
        }
        return ;
    }
    console.log();









    function convertToInteger(array) {
        let array_join = array.join("");
        let converted = parseInt(array_join, 2);
        return converted;
    }
   console.log(convertToInteger([0,0,0,1]));