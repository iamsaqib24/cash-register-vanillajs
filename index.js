const billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

checkButton.addEventListener("click", function v_B_and_C_Amount(){
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value > billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculatorChange(amountToBeReturned);
        }else{
            showMessage("The cash provided should atleast be equal to the bill amount.");
        }
    }else{
        showMessage("Invalid bill amount");
    }
});

function calculatorChange(){

}

function showMessage(message) {
    message.style.display = "block";
    message.innerText = message;
}
// billAmount.addEventListener("cl")
