let orderList = [];
let totalAmount = 0;

// Adding Meal Order
function orderMeal(mealName, price) {
  orderList.push({ name: mealName, price: price });
  totalAmount += price;

  const totalElement = document.getElementById("total");
  totalElement.textContent = `₱${totalAmount.toFixed(2)}`;

  const itemNameList = document.getElementById("itemName");
  const itemPriceList = document.getElementById("itemPrice");

  const itemNameListItem = document.createElement("li");
  itemNameListItem.textContent = mealName;
  itemNameList.appendChild(itemNameListItem);

  const itemPriceListItem = document.createElement("li");
  itemPriceListItem.textContent = `₱${price.toFixed(2)}`;
  itemPriceList.appendChild(itemPriceListItem);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.classList.add("deleteThisMeal");

  deleteButton.addEventListener("click", () => {
    totalAmount -= price;
    totalElement.textContent = `₱${totalAmount.toFixed(2)}`;

    itemNameList.removeChild(itemNameListItem);
    itemPriceList.removeChild(itemPriceListItem);
    itemNameListItem.removeChild(deleteButton);

    const index = orderList.findIndex((item) => item.name === mealName);
    if (index !== -1) {
      orderList.splice(index, 1);
    }
  });

  itemNameListItem.appendChild(deleteButton);
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

// document.querySelector(".close").addEventListener("click", function () {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "none";
// });
