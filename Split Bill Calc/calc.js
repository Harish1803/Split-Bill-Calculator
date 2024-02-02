function splitBill() {
    const amount = parseFloat(document.getElementById("amount").value);
    const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
    const warningElement1 = document.getElementById("warning1");
    const warningElement2 = document.getElementById("warning2");

    
    if (isNaN(amount) || amount <= 0) {
        warningElement1.textContent = "Please enter the valid number";
        return;
    } 
    else {
        warningElement1.textContent = " ";
    }

 
    if (isNaN(numberOfPeople) || numberOfPeople <= 1) {
        warningElement2.textContent = "Split not required";
        return;
    } 
    else {
        warningElement2.textContent = " ";
    }


    const splitAmount = amount / numberOfPeople;
    document.getElementById("result").value = `Each person should pay: ${splitAmount.toFixed(2)}`;
}