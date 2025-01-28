function performOperation() {
    //get user input from input field
    let num1 = document.getElementById('input1').value
    let num2 = document.getElementById('input2').value 
    //check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)) {
        //perform operation 
        let result = multiply(num1,num2);
//display the result
      displayResult(result);
    }
    else{
        displayResult('Please enter the vaild numbers');
    }
}
 function multiply(a,b){
    //Introduce a debugger statement to pause execution
    debugger;
    //Multiply numbers
    return a*b;
 }
 function displayResult(result){
    //Display the result in the paragraph element 
    const resultElement = document.getElementById('result')
     resultElement.textContent = `The result is ${result}`;
 }