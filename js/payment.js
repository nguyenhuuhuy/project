let shopCart = JSON.parse(localStorage.getItem("shopCart"))

function renderShopCart(list) {
    let data = [];
    for (let i = 0; i < list.length; i++) {
        data += `
        <tr>
            <td><img src="${list[i].image}" alt="" /></td>
            <td>${list[i].quantity}</td>
            <td>${list[i].price}$</td>
        </tr>
        `  
    }
    document.getElementById("pushshopCart").innerHTML = data;
}

renderShopCart(shopCart)


function quantityAll(list) {
    let sum = 0 ;
    for (let i = 0; i < list.length; i++) {
        sum += list[i].quantity
    }
    document.getElementById("qtt").innerHTML = sum;
}

quantityAll(shopCart)

function totalAll(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].quantity*list[i].price;
    }
    document.getElementById("totalAll").innerHTML = total + "$";
}

totalAll(shopCart)


let pay = document.querySelector(".pay");

pay.addEventListener("click", function() {
    alert("thanh Toán Thành Công")
    localStorage.removeItem("shopCart")
    window.location.href = "menu.html"
})


