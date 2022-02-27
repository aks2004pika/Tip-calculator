const calculateBtn = document.getElementById("calculateBtn");
var totalBillAmount = document.getElementById("billAmount");
var totalTipAmount = document.getElementById("tipAmount");
const tipBtn1 = document.querySelector(".tip-1");
const tipBtn2 = document.querySelector(".tip-2");
const tipBtn3 = document.querySelector(".tip-3");
const tipBtn4 = document.querySelector(".tip-4");
const tipBtn5 = document.querySelector(".tip-5");
const customTipInput = document.getElementById("tip-6");

calculateBtn.onclick = () => {
  checkNoOfPerson();
  calcBillPerPerson();
  calcTipPerPerson();

  clickCount1 == 0;
  clickCount2 == 0;
  clickCount3 == 0;
  clickCount4 == 0;
  clickCount5 == 0;
};

function checkNoOfPerson() {
  const noOfPeople = document.getElementById("numberOfPeople").value;
  const noOfPeopleInput = document.getElementById("numberOfPeople");
  if (noOfPeople == "") {
    noOfPeopleInput.style.border = "3px solid rgb(240, 135, 116)";
  }

  noOfPeopleInput.onclick = () => {
    noOfPeopleInput.style.border = "3px solid hsl(172, 67%, 45%)";
  };
}

function calcBillPerPerson() {
  const billAmount = document.getElementById("billInput").value;
  const noOfPeople = document.getElementById("numberOfPeople").value;
  var totalBill;

  totalBill = billAmount / noOfPeople;
  if (totalBill < 10 && Number.isInteger(totalBill, true)) {
    totalBillAmount.innerText = `${totalBill}.00`;
  } else {
    totalBillAmount.innerText = totalBill.toFixed(3);
  }
}

var clickCount1 = 0;
var clickCount2 = 0;
var clickCount3 = 0;
var clickCount4 = 0;
var clickCount5 = 0;
var clickCount6 = 0;

tipBtn1.onclick = () => {
  clickCount1++;
  clickCount2 == 0;
  clickCount3 == 0;
  clickCount4 == 0;
  clickCount5 == 0;
  clickCount6 = 0;
};

tipBtn2.onclick = () => {
  clickCount2++;
  clickCount1 = 0;
  clickCount3 = 0;
  clickCount4 = 0;
  clickCount5 = 0;
  clickCount6 = 0;
};

tipBtn3.onclick = () => {
  clickCount3++;
  clickCount1 = 0;
  clickCount2 = 0;
  clickCount4 = 0;
  clickCount5 = 0;
  clickCount6 = 0;
};

tipBtn4.onclick = () => {
  clickCount4++;
  clickCount1 = 0;
  clickCount2 = 0;
  clickCount3 = 0;
  clickCount5 = 0;
  clickCount6 = 0;
};

tipBtn5.onclick = () => {
  clickCount5++;
  clickCount1 = 0;
  clickCount2 = 0;
  clickCount3 = 0;
  clickCount4 = 0;
  clickCount6 = 0;
};

customTipInput.onclick = () => {
  clickCount6++;
  clickCount1 = 0;
  clickCount2 = 0;
  clickCount3 = 0;
  clickCount4 = 0;
  clickCount5 = 0;
};

function calcTipPerPerson() {
  const billAmount = document.getElementById("billInput").value;
  const noOfPeople = document.getElementById("numberOfPeople").value;
  var totalTip;
  if (clickCount1 == 1) {
    totalTip = ((5 / 100) * billAmount) / noOfPeople;
    totalTipAmount.innerText = totalTip.toFixed(2);
  } else if (clickCount2 == 1) {
    totalTip = ((10 / 100) * billAmount) / noOfPeople;
    totalTipAmount.innerText = totalTip.toFixed(2);
  } else if (clickCount3 == 1) {
    totalTip = ((15 / 100) * billAmount) / noOfPeople;
    totalTipAmount.innerText = totalTip.toFixed(2);
  } else if (clickCount4 == 1) {
    totalTip = ((25 / 100) * billAmount) / noOfPeople;
    totalTipAmount.innerText = totalTip.toFixed(2);
  } else if (clickCount5 == 1) {
    totalTip = ((50 / 100) * billAmount) / noOfPeople;
    totalTipAmount.innerText = totalTip.toFixed(2);
  } else if (clickCount6 == 1) {
    totalTip = ((customTipInput.value / 100) * billAmount) / noOfPeople;
    totalTipAmount.innerText = totalTip.toFixed(2);
  }
}

const resetBtn = document.getElementById("resetBtn");

resetBtn.onclick = () => {
  resetBill();
};

function resetBill() {
  const form = document.querySelector(".frm");

  form.reset();

  clickCount1 == 0;
  clickCount2 == 0;
  clickCount3 == 0;
  clickCount4 == 0;
  clickCount5 == 0;
  clickCount6 == 0;

  totalBillAmount.innerText = "0.00";
  totalTipAmount.innerText = "0.00";
}
