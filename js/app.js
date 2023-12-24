document.getElementById('calculate-btn').addEventListener('click', function() {
    const income = document.getElementById('income');
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');

    const balance = document.getElementById('balance');
    const totalExpenses = document.getElementById('total-expense');
    const totalExpensesAmount = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);
    totalExpenses.innerText = totalExpensesAmount;
    balance.innerText = parseFloat(income.value) - totalExpensesAmount;
})

document.getElementById('save-btn').addEventListener('click', function() {
    const income = document.getElementById('income');
    const savings = document.getElementById('savings');
    const savingsText = document.getElementById('savings-amount');
    const savingsAmount = parseFloat(income.value) * parseFloat(savings.value) / 100;
    savingsText.innerText = savingsAmount;
    const balance = document.getElementById('balance');
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = parseFloat(balance.innerText) - savingsAmount;
})