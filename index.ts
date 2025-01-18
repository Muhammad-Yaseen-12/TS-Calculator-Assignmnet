function clicked(e: number) {
    let display: any = document.getElementById("display");
    display.value += e;

}
function calculate() {
    var inputValue: any = document.getElementById("display");
    console.log(inputValue.value);
    inputValue.value = eval(inputValue.value);
}
function clearAll() {
    var inputValue: any = document.getElementById("display");
    inputValue.value = "";
}
