
function func1(num, exp) {
    if(exp === 0) {
        return 1;
    }
    return num * func1(num, exp-1);
}
var answer = func1(2, 10);
console.log(answer);