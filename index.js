let orderList = [];
let totalAmount = 0;

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
}
