function clicked(e) {
    var display = document.getElementById("display");
    display.value += e;
}
function calculate() {
    let inputValue = document.getElementById("display");
    console.log(inputValue.value);
    inputValue.value = eval(inputValue.value);
}
function clearAll() {
    let inputValue = document.getElementById("display");
    inputValue.value = "";
}
