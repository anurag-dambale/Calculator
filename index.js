//clear the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// display values 
function display(value) {
    document.getElementById("result").value += value;
}
 
//  calculate values and display result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}