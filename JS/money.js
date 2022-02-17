function updateTotalInput(inputId)
{
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    const inputAmount = parseInt(inputAmountText);

    input.value="";

    return inputAmount;
}

function updateTotalAmount(updateId,amount)
{
    const update = document.getElementById(updateId);
    const updateText=update.innerText;
    const updateAmount=parseInt(updateText);
    
    update.innerText=amount;
}


function Calculate()
{
    const incomeAmount = updateTotalInput("income-Input");

    const foodAmount = updateTotalInput("food-input");
    const rentAmount=updateTotalInput("rent-input");
    const clothesAmount = updateTotalInput("clothes-input");

    const totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
    const totalBalanceRemaining=incomeAmount-totalExpensesAmount;

    updateTotalAmount("total-balance",totalBalanceRemaining);
    updateTotalAmount("total-expenses",totalExpensesAmount);
}