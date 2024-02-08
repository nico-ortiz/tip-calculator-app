let billValueInput = document.getElementById('bill-value');
let percentBtns = document.querySelectorAll('.percent-btns');
let numberOfPeopleInput = document.getElementById('number-of-people');

let tipAmountTotal = document.getElementById('tip-amount-total');
let amountPerPerson = document.getElementById('amount-p-person');

let billValue = 0;
let percentTip = 0;
let numberOfPeople = 0;

/**
 * Load inputs (bill, percent tip, number of people)
 */
function loadData() {
    return new Promise((resolve) => {
        let results = [];

        function handleBillInput(event) {
            billValue = event.target.value;
            results.push(billValue);
            checkAndResolve();
        }

        function handlePercentBtnClick(event) {
            percentTip = event.target.value;
            results.push(percentTip);
            checkAndResolve();
        }

        function handlePeopleInput(event) {
            numberOfPeople = event.target.value;
            results.push(numberOfPeople);
            checkAndResolve();
        }

        function checkAndResolve() {
            if (results.length === 3)
                return resolve(results);
        }

        billValueInput.addEventListener('input', handleBillInput);
    
        percentBtns.forEach((btn) => {
            btn.addEventListener('click', handlePercentBtnClick);
        });
    
        numberOfPeopleInput.addEventListener('input', handlePeopleInput);
    })
};

async function finalResults() {
    try {
        const results = await loadData();
        console.log(results[0] + " . " + results[1] + " . " + results[2]);         
    } catch (error) {
        console.log(error);
    }
}

finalResults();