let shopCart = JSON.parse(localStorage.getItem("shopCart"));
// đổ mảng
function renderShopCart(list) {
  let data = [];
  for (let i = 0; i < list.length; i++) {
    data += `
        <tr>
            <td><img src="${list[i].image}" alt="" /></td>
            <td>${list[i].quantity}</td>
            <td>${list[i].price}$</td>
        </tr>
        `;
  }
  document.getElementById("pushshopCart").innerHTML = data;
}

renderShopCart(shopCart);

// số lượng sản phẩm
function quantityAll(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i].quantity;
  }
  document.getElementById("qtt").innerHTML = sum;
}
quantityAll(shopCart);

// tổng số tiền phải thanh toán
function totalAll(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i].quantity * list[i].price;
  }
  document.getElementById("totalAll").innerHTML = total + "$";
}

totalAll(shopCart);

// thanh toán
let pay = document.querySelector(".pay");

pay.addEventListener("click", function () {
  alert("thanh Toán Thành Công");
  let useShop = JSON.parse(localStorage.getItem("list"));
  for (let i = 0; i < useShop.length; i++) {
    if (useShop[i].status == true) {
      useShop[i].shop = [];
    }
  }
  localStorage.setItem("list", JSON.stringify(useShop));
  localStorage.removeItem("shopCart");
  window.location.href = "menu.html";
});
