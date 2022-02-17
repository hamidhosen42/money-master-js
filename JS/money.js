// -------------all input section----------------
function updateTotalInput(inputId, isAdd) {
  const input = document.getElementById(inputId);
  const inputAmountText = input.value;
  const inputAmount = parseInt(inputAmountText);

  const stringError = document.getElementById("string-error");
  const negativeError = document.getElementById("negative-error");

  if (
    (isNaN(inputAmountText) || document.getElementById(inputId).value == "") &&
    isAdd == false
  ) {
    stringError.style.display = "block";
    negativeError.style.display = "none";

    input.value = "";
    return false;
  } else if (inputAmount < 0 && isAdd == false) {
    stringError.style.display = "none";
    negativeError.style.display = "block";

    input.value = "";
    return false;
  } else {
    return inputAmount;
  }
}

// ------------all update section id------------
function updateTotalAmount(updateId, amount) {
  const update = document.getElementById(updateId);

  update.innerText = amount;
}

// -------calculation section----------
function Calculate() {
  const incomeAmount = updateTotalInput("income-Input", false);

  const foodAmount = updateTotalInput("food-input", false);
  const rentAmount = updateTotalInput("rent-input", false);
  const clothesAmount = updateTotalInput("clothes-input", false);

  const totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
  const totalBalanceRemaining = incomeAmount - totalExpensesAmount;

  const incomeError = document.getElementById("income-error");

  if (
    incomeAmount == false ||
    foodAmount == false ||
    rentAmount == false ||
    clothesAmount == false
  ) {
  } else if (incomeAmount < totalExpensesAmount) {
    incomeError.style.display = "block";
  } else {
    updateTotalAmount("total-balance", totalBalanceRemaining);
    updateTotalAmount("total-expenses", totalExpensesAmount);
  }
}

function renameBalance(textId) {
  const updateBal = document.getElementById(textId);
  const updateBalText = updateBal.innerText;
  const updateBalAmount = parseFloat(updateBalText);

  return updateBalAmount;
}

// -------saving amount section---------------
function save() {
  const saveInput = document.getElementById("save-input");
  const saveInputText = saveInput.value;
  const saveAmount = parseInt(saveInputText);

  const amount = updateTotalInput("income-Input", true);
  const totalBalance = renameBalance("total-balance");
  const toalsaveAmount = (saveAmount * amount) / 100;

  const saveError = document.getElementById("saving-error");

  if (
    isNaN(saveInputText) ||
    document.getElementById("save-input").value == ""
  ) {
  } else if (toalsaveAmount > totalBalance || saveAmount > totalBalance) {
    saveError.style.display = "block";
  } else {
    document.getElementById("save-amount").innerText = toalsaveAmount;
    const updatedrenameBalance = totalBalance - toalsaveAmount;
    document.getElementById("remain-balance").innerText = updatedrenameBalance;
  }
}
