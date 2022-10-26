const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');
const notes = document.querySelectorAll(".note");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function hideMessage(msg) {
    message.style.display = "";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

checkButton.addEventListener("click", function validateBillAndCash() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);
        }
        else{
            showMessage("Get ready to wash dishes!");
        }
    }
    // }else if (billAmount.vaalue === String ) {
    //     showMessage("Don't give string as input instead of number.");
    // }
    else{
        showMessage("Invalid input");
    }
});

function calculateChange(returnAmount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
        returnAmount %= availableNotes[i];
        notes.innerText =numberOfNotes;
    }
}
