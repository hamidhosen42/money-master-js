function updateTotalInput(inputId) {
  const input = document.getElementById(inputId);
  const inputAmountText = input.value;
  const inputAmount = parseInt(inputAmountText);

  const stringError = document.getElementById("string-error");
  const negativeError = document.getElementById("negative-error");

  if (isNaN(inputAmountText) || document.getElementById(inputId).value == "") {
    stringError.style.display = "block";
    negativeError.style.display = "none";

    input.value = "";
    return false;
  } else if (inputAmount < 0) {
    stringError.style.display = "none";
    negativeError.style.display = "block";
    input.value = "";

    return false;
  } else {
    input.value = "";
    return inputAmount;
  }
}

function updateTotalAmount(updateId, amount, isbool) {
  const update = document.getElementById(updateId);
  const updateText = update.innerText;

  const updateAmount = parseInt(updateText);

  if (isbool) {
    const incomeAmount = updateTotalInput("income-Input");
    const totalSave = parseFloat((amount * incomeAmount) / 100);
    update.innerText = totalSave;
  } else {
    update.innerText = amount;
  }
}

function Calculate() {
  const incomeAmount = updateTotalInput("income-Input");

  const foodAmount = updateTotalInput("food-input");
  const rentAmount = updateTotalInput("rent-input");
  const clothesAmount = updateTotalInput("clothes-input");

  if (
    incomeAmount == false ||
    foodAmount == false ||
    rentAmount == false ||
    clothesAmount == false
  ) {
  } else {
    const totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
    const totalBalanceRemaining = incomeAmount - totalExpensesAmount;

    updateTotalAmount("total-balance", totalBalanceRemaining, false);
    updateTotalAmount("total-expenses", totalExpensesAmount, false);
  }
}

function save() {
  const saveInputAmount = updateTotalInput("save-input");

  updateTotalAmount("save-amount", saveInputAmount, true);
}

function checkInp() {
  var x = document.forms["myForm"]["age"].value;
  if (isNaN(x)) {
    alert("Must input numbers");
    return false;
  }
}