var listFruit = [
  {
    name: "Dưa Vàng",
    price: 15,
    image: "/image/fruits_1.jpg",
    statusItem: "Còn Hàng",
    quantity: 0,
    id: 1,
  },
  {
    name: "Táo Mỹ",
    price: 22,
    image: "/image/fruits_2.jpg",
    statusItem: "Còn Hàng",
    quantity: 0,
    id: 2,
  },
  {
    name: "Chuối Cả Nải",
    price: 10,
    image: "/image/fruits_3.jpg",
    statusItem: "Còn Hàng",
    quantity: 0,
    id: 3,
  },
  {
    name: "Cherry đỏ",
    price: 28,
    image: "/image/fruits_4.jpg",
    statusItem: "Còn Hàng",
    quantity: 0,
    id: 4,
  },
  {
    name: "Nho Không Hạt",
    price: 30,
    image: "/image/fruits_5.jpg",
    statusItem: "Còn Hàng",
    quantity: 0,
    id: 5,
  },
  {
    name: "Bưởi Da Xanh",
    price: 25,
    image: "/image/fruits_6.jpg",
    statusItem: "Còn Hàng",
    quantity: 0,
    id: 6,
  },
];
// lưu mảng lên local
let list = localStorage.setItem("listFruit", JSON.stringify(listFruit));

//                              gọi về từ local để đổ
var listFruit = JSON.parse(localStorage.getItem("listFruit"));

//                              HÀM ĐỔ MẢNG
function renderList(list) {
  let data = "";
  for (let i = 0; i < list.length; i++) {
    data += `
     <tr>
              <td>${list[i].id}</td>
              <td>
               <div style="width: 100px;"> <img class="img-prd" src="${list[i].image}" alt="" /></div>
              </td>
              <td>${list[i].name}</td>
              <td>${list[i].price}$</td>
              <td>${list[i].statusItem}</td>
              <td>
                <button class="edit-button" onclick="edit_item(${list[i].id})">EDIT</button>
                <button class="delete-button" onclick="delete_item(${i})">DELETE</button>
                <button class="finished-button" onclick="finished_item(${i})">FiNISHED</button>
              </td>
            </tr>
    `;
  }

  document.getElementById("table-bot").innerHTML = data;
}

renderList(listFruit);

//                                             HÀM XÓA
function delete_item(id) {
  // console.log(id);
  let deleteItem = JSON.parse(localStorage.getItem("listFruit"));
  // console.log(deleteItem);
  deleteItem.splice(id, 1);
  // console.log(deleteItem);
  localStorage.setItem("listFruit", JSON.stringify(deleteItem));
  renderList(deleteItem);
}
//                                      Hàm Trạng thái

let countFinishedItem = 0;
function finished_item(id) {
  console.log(id);
  let finishedItem = JSON.parse(localStorage.getItem("listFruit"));
  console.log(finishedItem[id].statusItem);
  countFinishedItem++;
  finishedItem[id].statusItem = "Hết Hàng!";
  if (countFinishedItem == 2) {
    finishedItem[id].statusItem = "Còn Hàng";
    countFinishedItem = 0;
  }
  localStorage.setItem("listFruit", JSON.stringify(finishedItem));
  renderList(finishedItem);
}

//                                     hàm sửa tên

function edit_item(id) {
  let editItem = JSON.parse(localStorage.getItem("listFruit"));
  // console.log(id);
  document.getElementById("input_value").value = editItem[id-1].name;
  document.getElementById("edit_price").value = editItem[id-1].price;
//   document.getElementById("addSave").innerHTML = "EDIT";
  localStorage.setItem("keyEdit", JSON.stringify(id));
}

function add_save() {
  let keyEdit = JSON.parse(localStorage.getItem("keyEdit"));
  let listLocal = JSON.parse(localStorage.getItem("listFruit"));
  let valueInput = document.getElementById("input_value");
  let valuePrice = document.getElementById("edit_price")

  if (keyEdit != null) {
    if (valueInput.value == "") {
      let error = document.getElementById("error");
      error.style.display = "block";
    } else {
      for (let i = 0; i < listLocal.length; i++) {
            if(listLocal[i].id == keyEdit) {
                listLocal[i].name = valueInput.value;
                listLocal[i].price = valuePrice.value;
                renderList(listLocal);
                localStorage.removeItem("keyEdit");
                localStorage.setItem("listFruit",JSON.stringify(listLocal));
            }
      }
    }
  }
}

//                            hàm sửa register


//                          gọi list từ local về

//                        gọi biến chứa email password
let rederRegister = JSON.parse(localStorage.getItem("list"))

//                                hàm hiện email password
function rederListRegister(list) {
  
  let data = "";
  for (let i = 0; i < list.length; i++) {
      data += `
      <tr>
              <td>${list[i].id}</td>
              <td>${list[i].email}</td>
              <td>${list[i].password}</td>
              <td>
                <button class="editRegister-button" onclick="editRegister_item(${list[i].id})">EDIT</button>
                <button class="deleteRegister-button" onclick="deleteRegister_item(${i})">DELETE</button>
              </td>
            </tr>
      `;
  }
  document.getElementById("pushList").innerHTML = data
}

rederListRegister(rederRegister)

// xóa người dùng

function deleteRegister_item(id) {
  let deleteList = JSON.parse(localStorage.getItem("list"))
  deleteList.splice(id,1)
  localStorage.setItem("list", JSON.stringify(deleteList))
  rederListRegister(deleteList)
}
// edit người dùng
function editRegister_item(id) {
  let listRegister = JSON.parse(localStorage.getItem("list"))
  document.getElementById("password_register").value = listRegister[id-1].password
  localStorage.setItem("keyPass", JSON.stringify(id))
}

function add_pass() {
  let keyPass = JSON.parse(localStorage.getItem("keyPass"))
  let editPassword = JSON.parse(localStorage.getItem("list"))
  let valuePass = document.getElementById("password_register")
  if (keyPass != null) {
    if (valuePass.value == "") {
      alert("lỗi mời nhập lại")
    } else {
      for (let i = 0; i < editPassword.length; i++) {
            if(editPassword[i].id == keyPass) {
                editPassword[i].password = valuePass.value;
                rederListRegister(editPassword)
                localStorage.removeItem("keyPass");
                localStorage.setItem("list",JSON.stringify(editPassword));
            }
      }
    }
  }
}

//  dư mảng [] thì xóa mảng rỗng
function deleteArrayRegister() {
  let listRegister = JSON.parse(localStorage.getItem("list"))
  if (listRegister.length == 0) {
    localStorage.removeItem("list")
  }
}
deleteArrayRegister()

function deleteArrayFruit() {
  let listFruit = JSON.parse(localStorage.getItem("listFruit"))
  if (listFruit.length == 0) {
    localStorage.removeItem("listFruit")
  }
}
deleteArrayFruit()


