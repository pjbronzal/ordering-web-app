let orderList = [];
let totalAmount = 0;

// ADDING ORDER
function orderMeal(mealName, price) {
  orderList.push({ name: mealName, price: price });
  totalAmount += price;

  const itemNameList = document.getElementById("itemName");
  const itemPriceList = document.getElementById("itemPrice");
  const totalElement = document.getElementById("total");

  itemNameList.innerHTML = "";
  itemPriceList.innerHTML = "";

  for (let i = 0; i < orderList.length; i++) {
    const order = orderList[i];
    const itemName = order.name;
    const itemPrice = order.price;

    const itemNameListItem = document.createElement("li");
    itemNameListItem.textContent = itemName;
    itemNameList.appendChild(itemNameListItem);

    const itemPriceListItem = document.createElement("li");
    itemPriceListItem.textContent = `₱${itemPrice.toFixed(2)}`;
    itemPriceList.appendChild(itemPriceListItem);
  }

  totalElement.textContent = `₱${totalAmount.toFixed(2)}`;
  event.preventDefault();
}

// DELETING ORDER
function deleteMeal() {
  if (orderList.length === 0) {
    alert("No order to delete.");
    return;
  }

  const latestItem = orderList.pop();
  const latestItemPrice = latestItem.price;

  totalAmount -= latestItemPrice;

  const itemNameList = document.getElementById("itemName");
  const itemPriceList = document.getElementById("itemPrice");
  const totalElement = document.getElementById("total");

  itemNameList.innerHTML = "";
  itemPriceList.innerHTML = "";

  for (let i = 0; i < orderList.length; i++) {
    const order = orderList[i];
    const itemName = order.name;
    const itemPrice = order.price;

    const itemNameListItem = document.createElement("li");
    itemNameListItem.textContent = itemName;
    itemNameList.appendChild(itemNameListItem);

    const itemPriceListItem = document.createElement("li");
    itemPriceListItem.textContent = `₱${itemPrice.toFixed(2)}`;
    itemPriceList.appendChild(itemPriceListItem);
  }

  totalElement.textContent = `₱${totalAmount.toFixed(2)}`;
  event.preventDefault();
}

// RANDOMIZING TICKET NUMBER
function generateRandom4DigitNumber() {
  const randomDecimal = Math.random();
  const randomBetween0And10000 = randomDecimal * 10000;
  const random4DigitNumber = Math.floor(randomBetween0And10000);
  return random4DigitNumber;
}

function generateAndDisplayRandomNumber() {
  const random4DigitNumber = generateRandom4DigitNumber();
  const ticketNumberElement = document.getElementById("ticketNumber");
  ticketNumberElement.textContent = random4DigitNumber;
}

generateAndDisplayRandomNumber();

// Generating Ticket Modal
document.getElementById("openModalBtn").addEventListener("click", function () {
  const dataContainer = document.getElementById("dataContainer");
  const dataToTransfer = dataContainer.innerHTML;

  const modalData = document.getElementById("modalData");
  modalData.innerHTML = dataToTransfer;

  const modal = document.getElementById("myModal");
  modal.style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
});
event.preventDefault();