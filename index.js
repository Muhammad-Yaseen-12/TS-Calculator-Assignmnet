function clicked(e) {
    var display = document.getElementById("display");
    display.value += e;
}
function calculate() {
    var inputValue = document.getElementById("display");
    console.log(inputValue.value);
    inputValue.value = eval(inputValue.value);
}
function clearAll() {
    var inputValue = document.getElementById("display");
    inputValue.value = "";
}
