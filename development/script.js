const billInput = document.getElementById('bill-value');
const percentBtns = document.querySelectorAll('.percent-btns');
const numberOfPeopleInput = document.getElementById('number-of-people');

const tipAmountTotal = document.getElementById('tip-amount-total');
const amountPerPerson = document.getElementById('amount-p-person');

let billValue = 0.0;
let numberOfPeopleValue = 0;
let percentBtnValue = 0;
tipAmountTotal.innerHTML = '$' + (0.0).toFixed(2);
amountPerPerson.innerHTML = '$' + (0.0).toFixed(2);


billInput.addEventListener('input', billHandle);
numberOfPeopleInput.addEventListener('input', numberOfPeopleHandle);
percentBtns.forEach((btn) => {
    btn.addEventListener('click', percentBtnsHandle);
});

function billHandle() {
    billValue = parseFloat(billInput.value);
    console.log(billValue);
}

function numberOfPeopleHandle() {
    numberOfPeopleValue = parseFloat(numberOfPeopleInput.value);
    console.log(numberOfPeopleValue);
}

function percentBtnsHandle(event) {
    percentBtnValue = event.target.value;
    console.log(percentBtnValue);
}

