function getValue(condition) {
    if (condition) {
    var value = "blue";
    // other code
    return value;
    } else {
    // value exists here with a value of undefined
    return null;
    }
    // value exists here with a value of undefined
    }
    getValue()
    
    var funcs = [];
for (var i = 0; i < 10; i++) {
funcs.push(function() {
console.log(i);
});
}
funcs.forEach(function(func) {
func();
// outputs the number "10" ten times
});

var funcs = [];
for (var i = 0; i < 10; i++) {
funcs.push((function(value) {
return function() {
console.log(value);
}
}(i)));
}
funcs.forEach(function(func) {
func();
// outputs 0, then 1, then 2, up to 9
});