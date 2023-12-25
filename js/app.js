function getInputValue(id) {
    const inputText = document.getElementById(id);
    const value = parseFloat(inputText.value);
    return value;
}


//calculate
document.getElementById('calculate-btn').addEventListener('click', function() {
    const balance = document.getElementById('balance');
    const totalExpenses = document.getElementById('total-expense');
    const totalExpensesAmount = getInputValue('food') + getInputValue('rent') + getInputValue('clothes');
    totalExpenses.innerText = totalExpensesAmount;
    balance.innerText = getInputValue('income') - totalExpensesAmount;
})


//save
document.getElementById('save-btn').addEventListener('click', function() {
    const savingsText = document.getElementById('savings-amount');
    const savingsAmount = getInputValue('income') * getInputValue('savings') / 100;
    savingsText.innerText = savingsAmount;
    const balance = document.getElementById('balance');
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = parseFloat(balance.innerText) - savingsAmount;
})