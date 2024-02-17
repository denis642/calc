function addAndDisplay() {
    // Get values from input fields and convert to numbers
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
  
    // Perform the addition
    const sum = number1 + number2;
  
    // Create the result array containing the sum
    const resultArray = [sum];
  
    // Display the result array in the paragraph element
    const resultString = "Result: " + resultArray.join(", ");
    document.getElementById("result").innerHTML = resultString;
  }
  