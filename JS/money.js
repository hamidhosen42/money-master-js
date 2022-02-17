function updateTotalInput(id)
{
    const input = document.getElementById(id);
    const inputAmountText = input.value;
    const inputAmount = parseInt(inputAmountText);

    input.value="";

    return inputAmount;
}

function updateTotalAmount(id)
{
    const update = document.getAnimations("total-expenses");
    const updateText=update.innerText;
    const updateAmount=parent(updateText);
}


function Calculate()
{
    const incomeAmount = updateTotalInput("income-Input");
    const foodAmount = updateTotalInput("food-input");

    // const foodAmount = updateTotalInput("food-input");
    // const rentAmount = updateTotalInput("rent-onput");
    // const clothesAmount = updateTotalInput("clothes-input");

    

    // console.log(incomeAmount);

    // const totalBalanceInput = document.getElementById("total-balncece");
    // const totalBalanceText=totalBalanceInput.innerText;
    // const totalAmount=parseInt(totalBalanceText);

    const totalExpenses = updateTotalAmount("total-expenses");
    

    totalBalanceInput.innerText=incomeAmount;
}