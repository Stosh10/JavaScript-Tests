function func1(num, exp) {
    if (exp === 0) {
        return 1;
    }
    return num * func1(num, exp - 1);

}
var answer = func1(4, 3);
console.log(answer);
// In the example above we have a series of function that perform the same task
// Istead of writing all thee down we can decide to use a recursion
// We can make function one call function all the time as we are going to illustrate below

function func1(num, exp) {
    if(exp === 0) {
        return 1;
    }
    return num * func1(num, exp-1);
}
var answer = func1(2, 10);
console.log(answer);