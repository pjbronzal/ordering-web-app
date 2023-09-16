let user = {
  cartlist: [],
  show() {
    let cartItem = document.getElementById("itemName");
    let cartPrice = document.getElementById("itemPrice");
    let totalCost = 0;

    cartItem.innerHTML = "";
    cartPrice.innerHTML = "";

    this.cartlist.forEach(function (item) {
      let formattedPrice = Number(item.price).toFixed(2);

      // ITEM
      let itemNameList = document.getElementById("itemName");
      let itemNameItem = document.createElement("li");
      itemNameItem.innerText = item.product;
      itemNameList.appendChild(itemNameItem);

      // PRICE
      let itemPriceList = document.getElementById("itemPrice");
      let itemPriceItem = document.createElement("li");
      itemPriceItem.innerText = `₱ ${formattedPrice}`;
      itemPriceList.appendChild(itemPriceItem);

      totalCost += Number(item.price);
    });

    // TOTAL COST
    totalCost = totalCost.toFixed(2);
    document.getElementById("total").innerText = `₱ ${totalCost}`;
  },
};

user.show();

function add() {
  let order = document.getElementById("order").value;
  let price = document.getElementById("price").value;

  if (order === "" || price === "") {
    alert("No item added!");
  } else {
    user.cartlist.push({ product: order, price: parseFloat(price) });
    user.show();
    document.getElementById("order").value = "";
    document.getElementById("price").value = "";
  }
}

function del() {
  user.cartlist.pop();
  user.show();
}
