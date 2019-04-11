// All previous explanations and examples were based on the for loop method...now we want to look at the Array.foreach method
// Happens in two ways.....lets deal with the first that involves no function...instead it uses the arrow function
myPlayers = ["messi", "iniesta", "xavi", "villa"];
const boots = myPlayers.forEach((boots)=> {
    console.log(boots);
})