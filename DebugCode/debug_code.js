function performOperation() {
    //get user input from input field
    let num1 = document.getElementById('input1').value
    let num2 = document.getElementById('input2').value 
    //check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)) {
        //perform operation 
        let addValue = add(num1,num2);
        let divValue = div(num1,num2);
        let mulValue = multiply(num1,num2);
//display the result
      displayResult(addValue,divValue,mulValue);
    }
    else{
        displayResult('Please enter the vaild numbers');
    }
}
function add(a,b){
    //introduce debugger statement to pause execution 
    debugger
    //return  adddition value
    return a+b;
}
function div(a,b){
    //introduce debugger statement to pause execution 
     debugger
     //return the division value 
    return a/b;
}

 function multiply(a,b){
    //Introduce a debugger statement to pause execution
    debugger;
    //Multiply numbers
    return a*b;
 }
 function displayResult(addValue,divValue,mulValue){
    //Display the result in the paragraph element 
    const resultElement = document.getElementById('result')
     resultElement.textContent = ;
 }