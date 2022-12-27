// var listFruit = [
//     {
//         name: "Dưa Vàng",
//         price: 15,
//         image: "/image/fruits_1.jpg",
//         quantity: 0,
//         id: 1,
//     },
//     {
//         name: "Táo Mỹ",
//         price: 22,
//         image: "/image/fruits_2.jpg",
//         quantity: 0,
//         id: 2,
//     },
//     {
//         name: "Chuối Cả Nải",
//         price: 10,
//         image: "/image/fruits_3.jpg",
//         quantity: 0,
//         id: 3,
//     },
//     {
//         name: "Cherry đỏ",
//         price: 28,
//         image: "/image/fruits_4.jpg",
//         quantity: 0,
//         id: 4,
//     },
//     {
//         name: "Nho Không Hạt",
//         price: 30,
//         image: "/image/fruits_5.jpg",
//         quantity: 0,
//         id: 5,
//     },
//     {
//         name: "Bưởi Da Xanh",
//         price: 25,
//         image: "/image/fruits_6.jpg",
//         quantity: 0,
//         id: 6,
//     },
// ]

// // đổ sản phẩm ra menu
// let listFruit
let listfruit = JSON.parse(localStorage.getItem("listFruit"));

function renderLisst(list) {
  let data = "";
  for (let i = 0; i < list.length; i++) {
    data += `
        <div class="show-product col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div class="img-product">
          <img class="img-prd" src="${list[i].image}" alt="" />
        </div>
        <div class="content-product">
          <h3 class="content-product-h3">${list[i].name}</h3>
          <div class="content-product-deltals">
            <div class="price">
              <span class="money">${list[i].price}$</span>
            </div>
            <div class="menu-push-shop">
            
              <button type="button" class="btn btn-cart" id="likeList${i}" onclick="like(${i})"><i class="fa-regular fa-heart"></i></button>
              <button type="button" class="btn btn-cart" onclick="pushCart(${list[i].id})"><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>
        </div>
      </div>
        `;
  }
  document.getElementById("menuList").innerHTML = data;
}
renderLisst(listfruit);

// hiện giỏ hàng

let getShop = document.getElementById("getShop");

getShop.addEventListener("click", function () {
  let menuCart = document.querySelector(".menu-cart");
  menuCart.style.display = "block";
});

// ẩn giỏ hàng

let closeCart = document.querySelector(".close-cart");

closeCart.addEventListener("click", function () {
  let menuCart = document.querySelector(".menu-cart");
  menuCart.style.display = "none";
});
/*                          đổ email vào shopCart                             */

let useEmail = JSON.parse(localStorage.getItem("list"));
function listGetshopCart(listupcart) {
  for (let i = 0; i < listupcart.length; i++) {
    if (listupcart[i].status == true) {
      document.getElementById("pushGmail").innerHTML = listupcart[i].email;
    }
  }
}
listGetshopCart(useEmail);

/*                              đăng xuất                               */

let registerLogin = document.getElementById("registerLogin");
registerLogin.addEventListener("click", function () {
  alert("đăng Xuất Thành Công!");
  let uselogin = JSON.parse(localStorage.getItem("list"));
  for (let i = 0; i < uselogin.length; i++) {
    if (uselogin[i].status == true) {
      uselogin[i].status = false;
      localStorage.setItem("list", JSON.stringify(uselogin));
      localStorage.removeItem("shopCart");
    }
  }
  window.location.href = "menu.html"
});
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

//                             nút thêm vào giỏ hàng để đổ mảng vào shop

function pushCart(id) {
  // console.log(id);
  let listFruit = JSON.parse(localStorage.getItem("listFruit"));
  let listShop = JSON.parse(localStorage.getItem("shopCart"));

  // console.log(listShop);
  if (listShop == null) {
    listShop = [];
    for (let i = 0; i < listFruit.length; i++) {
      if (listFruit[i].id == id) {
        listFruit[i].quantity++;
        listShop.push(listFruit[i]);
        localStorage.setItem("shopCart", JSON.stringify(listShop));
        break;
      }
    }
    let shopCartCheck = JSON.parse(localStorage.getItem("shopCart"));

    pushnumber(shopCartCheck);
    totalAll(shopCartCheck);
  } else {
    let listShop = JSON.parse(localStorage.getItem("shopCart"));

    for (let i = 0; i < listFruit.length; i++) {
      if (listFruit[i].id == id) {
        for (let j = 0; j < listShop.length; j++) {
          if (listShop[j].id == id) {
            listShop[j].quantity++;
            localStorage.setItem("shopCart", JSON.stringify(listShop));
            break;
          } else {
            for (let index = 0; index < listFruit.length; index++) {
              let flag = false;
              if (listFruit[index].id == id) {
                for (let idex = 0; idex < listShop.length; idex++) {
                  if (listShop[idex].id == id) {
                    flag = true;
                    break;
                  } else {
                    flag = false;
                  }
                }
                if (flag == true) {
                  console.log("trùng");
                } else {
                  listShop.push(listFruit[index]);
                  localStorage.setItem("shopCart", JSON.stringify(listShop));
                }
              }
            }
          }
        }
      }
    }
    // let shopCartCheck = JSON.parse(localStorage.getItem("shopCart"));

    
  }
  // // đổ sang trang thanh toán
  // let pushCart = JSON.parse(localStorage.getItem("shopCart"));
  // //   console.log(pushCart);
  // let dataCart = [];
  // for (let i = 0; i < pushCart.length; i++) {
  //   dataCart += `
  //           <tr>
  //               <td>
  //                   <img src="${pushCart[i].image}" alt="">
  //                   <h3>${pushCart[i].name}</h3>
  //               </td>
  //               <td>${pushCart[i].quantity}</td>
  //               <td>${pushCart[i].price}$</td>
  //               <td><button class="delete-cart" onclick="delete_cart(${pushCart[i].id})">Delete</button></td>
  //           </tr>

  //   `;
  // }
  // document.querySelector(".table-bot").innerHTML = dataCart;

  // let useList = JSON.parse(localStorage.getItem("list"))
  //   for (let index = 0; index < useList.length; index++) {
  //     if (useList[index].status == true) {
  //         let list = JSON.parse(localStorage.getItem("shopCart"))
  //         useList[index].shop = list;
  //         localStorage.setItem("list",JSON.stringify(useList))
  //         let renderShop = useList[index].shop;
  //         let renderdata = [];
  //         for (let a = 0; a < renderShop.length; a++) {
  //           renderdata += `
  //             <tr>
  //                <td>
  //                    <img src="${renderShop[a].image}" alt="">
  //                    <h3>${renderShop[a].name}</h3>
  //                </td>
  //                <td>${renderShop[a].quantity}</td>
  //                <td>${renderShop[a].price}$</td>
  //                <td><button class="delete-cart" onclick="delete_cart(${renderShop[a].id})">Delete</button></td>
  //             </tr>

  //           `
  //         }
  //         document.querySelector(".table-bot").innerHTML = renderdata;
  //     }

  //   }
  renderUse(list);
  pushnumber(list);
  totalAll(list);
}

/*                       gọi từ local để render vào shop         */
let list = JSON.parse(localStorage.getItem("list"));

function renderUse(use) {
  for (let i = 0; i < use.length; i++) {
    if (use[i].status == true) {
      let listShop = JSON.parse(localStorage.getItem("shopCart"));
      // console.log(listShop);
      if (listShop == null) {
          listShop = []
        console.log("chưa có sp");
        let lit = JSON.parse(localStorage.getItem("list"));
        for (let index = 0; index < lit.length; index++) {
          if (lit[index].status == true) {
            let render = lit[index].shop;
            localStorage.setItem("shopCart",JSON.stringify(render));
            // console.log(render);
            let data = "";
            for (let j = 0; j < render.length; j++) {
              data += `
        <tr>
                 <td>
                     <img src="${render[j].image}" alt="">
                     <h3>${render[j].name}</h3>
                 </td>
                 <td>${render[j].quantity}</td>
                 <td>${render[j].price}$</td>
                 <td><button class="delete-cart" onclick="delete_cart(${render[j].id})">Delete</button></td>
        </tr>
        `;
            }
            document.querySelector(".table-bot").innerHTML = data;
          }
        }
      } else {
        let lis = JSON.parse(localStorage.getItem("shopCart"));
        use[i].shop = lis;
        // console.log(use[i].shop);
        localStorage.setItem("list", JSON.stringify(use));
        let render = use[i].shop;
        let data = "";
        for (let j = 0; j < render.length; j++) {
          data += `
        <tr>
                 <td>
                     <img src="${render[j].image}" alt="">
                     <h3>${render[j].name}</h3>
                 </td>
                 <td>${render[j].quantity}</td>
                 <td>${render[j].price}$</td>
                 <td><button class="delete-cart" onclick="delete_cart(${render[j].id})">Delete</button></td>
        </tr>
        `;
        }
        document.querySelector(".table-bot").innerHTML = data;
      }
    }
  }
}
renderUse(list);

/*                        hàm hiện số lượng mua sp                            */

function pushnumber(number) {
  
  for (let i = 0; i < number.length; i++) {
    if (number[i].status == true) {
      let listnumb = number[i].shop;
      let sum = 0;
      for (let j = 0; j < listnumb.length; j++) {
        sum +=listnumb[j].quantity;
      }
      document.getElementById("editQuantity").innerHTML = sum;
    }
  }
  // console.log(sum);
}
pushnumber(list);

/*                    xóa sản phẩm                       */
function delete_cart(id) {
  console.log(id);
  let listShopCart = JSON.parse(localStorage.getItem("shopCart"));
  //  console.log(listShopCart);
  for (let i = 0; i < listShopCart.length; i++) {
    if (listShopCart[i].id == id) {
      listShopCart[i].id = i;
      // console.log(listShopCart[i].id);
      listShopCart.splice(i, 1);
      // console.log(listShopCart);
      localStorage.setItem("shopCart", JSON.stringify(listShopCart));
    }
  }
  pushCart(listShopCart);
  deleteShopcart(listShopCart);
}

/*nếu shopCart bẳng [] xóa */
let checkShopcart = JSON.parse(localStorage.getItem("shopCart"))
function deleteShopcart(shopCart) {
  // let deleteShopcart = JSON.parse(localStorage.getItem("shopCart"))
  if (shopCart.length == 0) {
    localStorage.removeItem("shopCart");
  }
}
deleteShopcart(checkShopcart);

/*                     tính tiền                  */

function totalAll(shopCart) {

  
  for (let i = 0; i < shopCart.length; i++) {
    if (shopCart[i].status == true) {
      let sum = shopCart[i].shop;
      let all = 0;
      for (let j = 0; j < sum.length; j++) {
        all += sum[j].price * sum[j].quantity;
      }
      document.getElementById("totalAll").innerHTML = all + "$";
    }
  } 
}
totalAll(list)
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
  // console.log(checkList);
  renderLisst(checkList);
}

/*                          thanh toán                     */

function payment() {
  window.location.href = "payment.html";
}
