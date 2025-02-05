function clicked(e: number) {
    let display: any = document.getElementById("display");
    display.value += e;

}
function calculate() {
   let characters = [] 
    let inputValue: any = document.getElementById("display");
   
   if(inputValue.value){
    
      for(var i =0; i<inputValue.value.length; i++){
        characters.push(inputValue.value[i])
      }
      console.log(characters);
      
      switch(characters[0] && characters[characters.length -1]){
        case '/':
            inputValue.value = 'Error..'
        inputValue.classList.add('Error')
        break;
        case '*':
            inputValue.value = 'Error..'
        inputValue.classList.add('Error')
        break;
        case '-':
            inputValue.value = 'Error..'
        inputValue.classList.add('Error')
        break;
        case '+':
            inputValue.value = 'Error..'
        inputValue.classList.add('Error')
        break;
        default : inputValue.value = eval(inputValue.value)
            
      }
   
   }
   else{
    inputValue.value = 'Error..'
    inputValue.classList.add('Error')
    console.log(inputValue);
    
   }
}



function clearAll() {
    let inputValue: any = document.getElementById("display");
    inputValue.value = "";
    inputValue.classList.remove('Error')
}
