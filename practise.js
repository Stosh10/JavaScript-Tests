let myArray = [2,3,425,5,7,8,6,44];
function getSeco_largest(arrayz) {
    let sorted_array = (arrayz.sort(function(a,b){return a-b})[myArray.length-2]);
    console.log(sorted_array);
    console.log(sorted_array);
}
getSeco_largest(myArray);