//                      hiện giỏ hàng

let getShop = document.getElementById("getShop");

getShop.addEventListener("click", function () {
  let menuCart = document.querySelector(".menu-cart");
  menuCart.style.display = "block";
});

//                             ẩn giỏ hàng

let closeCart = document.querySelector(".close-cart");

closeCart.addEventListener("click", function () {
  let menuCart = document.querySelector(".menu-cart");
  menuCart.style.display = "none";
});

//                         đổ email vào shopCart

let useEmail = JSON.parse(localStorage.getItem("list"));
function listGetshopCart(listupcart) {
  for (let i = 0; i < listupcart.length; i++) {
    if (listupcart[i].status == true) {
      document.getElementById("pushGmail").innerHTML = listupcart[i].email;
    }
  }
}
listGetshopCart(useEmail);

//                                      nút yêu thích hàng
let count = 1;
function like(id) {
  count++;
  document.getElementById(`likeList${id}`).style.color = "red";
  if (count == 3) {
    document.getElementById(`likeList${id}`).style.color = "black";
    count = 1;
  }
}

//                                  nếu shopCart bẳng [] xóa
let checkShopcart = JSON.parse(localStorage.getItem("shopCart"));
function deleteShopcart(shopCart) {
  if (shopCart.length == 0) {
    localStorage.removeItem("shopCart");
  }
}
deleteShopcart(checkShopcart);


/*                      tìm kiếm                         */

function checkSearch() {
  let list = JSON.parse(localStorage.getItem("listFruit"));
  let checkList = [];
  let inputValue = document.getElementById("search_Shop").value.toUpperCase();
  for (let i = 0; i < list.length; i++) {
    if (list[i].name.toUpperCase().indexOf(inputValue) != -1) {
      checkList.push(list[i]);
    }
  }
  renderLisst(checkList);
}