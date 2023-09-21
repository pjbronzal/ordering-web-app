let orderList = [];
let totalAmount = 0;

// ADDING ORDER
function orderMeal(mealName, price) {
  orderList.push({ name: mealName, price: price });
  totalAmount += price;

  // Update the total amount display
  const totalElement = document.getElementById("total");
  totalElement.textContent = `₱${totalAmount.toFixed(2)}`;

  // Display the newly added item
  const itemNameList = document.getElementById("itemName");
  const itemPriceList = document.getElementById("itemPrice");

  const itemNameListItem = document.createElement("li");
  itemNameListItem.textContent = mealName;
  itemNameList.appendChild(itemNameListItem);

  const itemPriceListItem = document.createElement("li");
  itemPriceListItem.textContent = `₱${price.toFixed(2)}`;
  itemPriceList.appendChild(itemPriceListItem);

  // Create a delete button for the newly added item
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.classList.add("deleteThisMeal");

  // Add a click event listener to delete the corresponding list item
  deleteButton.addEventListener("click", () => {
    // Subtract the item price from the total amount
    totalAmount -= price;
    totalElement.textContent = `₱${totalAmount.toFixed(2)}`;

    // Remove the list items and the delete button for the deleted item
    itemNameList.removeChild(itemNameListItem);
    itemPriceList.removeChild(itemPriceListItem);
    itemNameListItem.removeChild(deleteButton);

    // Remove the deleted item from the orderList
    const index = orderList.findIndex((item) => item.name === mealName);
    if (index !== -1) {
      orderList.splice(index, 1);
    }
  });

  // Append the delete button to the list item
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
