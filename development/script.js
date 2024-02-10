/* Set elements from HTML */
const billInput = document.getElementById('bill-value');
const numberOfPeopleInput = document.getElementById('number-of-people');
const percentBtns = document.querySelectorAll('.percent-btns');
const percentCustom = document.getElementById('input-custom');

const tipAmountTotal = document.getElementById('tip-amount-total');
const amountPerPerson = document.getElementById('amount-p-person');

const resetBtn = document.getElementById('reset-btn');

/* This variables represent bill, select tip% and number of people */
let billValue = 0.0;
let numberOfPeopleValue = 1;
let percentBtnValue = 0;

/* Initial setting for tip amount per person and total per person */    
tipAmountTotal.innerHTML = '$' + (0.0).toFixed(2);
amountPerPerson.innerHTML = '$' + (0.0).toFixed(2);

/* Event listeners */
billInput.addEventListener('input', billHandle);

numberOfPeopleInput.addEventListener('input', numberOfPeopleHandle);

percentBtns.forEach((btn) => {
    btn.addEventListener('click', percentBtnsHandle);
});

percentCustom.addEventListener('input', percentCustomHandle);

resetBtn.addEventListener('click', resetBtnHandle);

function billHandle() {
    billValue = parseFloat(billInput.value);
    calculateTipAmount();
}

function numberOfPeopleHandle() {
    numberOfPeopleValue = numberOfPeopleInput.value;
    calculateTipAmount();
}

function percentBtnsHandle(event) {
    let percent = event.target.innerHTML.replace('%', '');
    percentBtnValue = percent / 100;
    calculateTipAmount();
}

function percentCustomHandle() {
    let percent = percentCustom.value;
    if (percent < 1 || percent > 100) {
        percentBtnValue = 1;
        calculateTipAmount();
    } else {
        percentBtnValue = percent / 100;
        calculateTipAmount();
    }
}

function resetBtnHandle() {
    document.getElementById('bill-value').value = '';
    document.getElementById('number-of-people').value = '';
    document.querySelectorAll('.percent-btns').forEach(elem => elem.value = '');
    document.getElementById('input-custom').value = '';
    tipAmountTotal.innerHTML = '$' + (0.0).toFixed(2);
    amountPerPerson.innerHTML = '$' + (0.0).toFixed(2);
}

/* Function to calculate tip amount per person and total per person */
function calculateTipAmount() {
    if (numberOfPeopleValue >= 1) {
        let tipAmountPerPerson = (billValue * percentBtnValue) / numberOfPeopleValue; 
        let totalPerPerson = (billValue / numberOfPeopleValue) + tipAmountPerPerson;

        if (isNaN(tipAmountPerPerson) && isNaN(totalPerPerson)) {
            tipAmountTotal.innerHTML = '$' + (0.0).toFixed(2);
            amountPerPerson.innerHTML = '$' + (0.0).toFixed(2);
        } else {
            tipAmountTotal.innerHTML = '$' + (tipAmountPerPerson).toFixed(2);
            amountPerPerson.innerHTML = '$' + (totalPerPerson).toFixed(2);
        }
    }
}