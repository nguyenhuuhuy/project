// phần login đăng nhập và chuyển tới web bán hàng
let email_login = document.getElementById("email_login");
let password_login = document.getElementById("password_login");
let login = document.getElementById("login");
let flag = false;
login.addEventListener("click", function () {
  // console.log(111);
  let getListUser = localStorage.getItem("list"); // lấy từ local về thành mảng array
  // console.log(getListUser);
  let check = JSON.parse(getListUser); // chuyển từ array sang object
  for (let i = 0; i < check.length; i++) {
    // console.log(check[i].email);
    // console.log(email_login.value);
    if (check[i].email == email_login.value && check[i].password == password_login.value) {
      flag = true;
      console.log("ok");
    }
  }
  if (flag == false) {
    let error_login = document.getElementById("error_login");
    error_login.style.display = "block";
  } else {
    
    let obj = {
      email: email_login.value,
    }
    localStorage.setItem("useEmail", JSON.stringify(obj))
    window.location.href = "menu.html"
  }
});


// con mắt 
function getEye_3() {
  let showPass = document.getElementById("get_eye_3");
  showPass.classList.toggle("fa-eye");
  let showPassword = document.getElementById("password_login");
  let result = showPassword.getAttribute("type");
  if (result == "password") {
    showPassword.setAttribute("type", "text");
  } else {
    showPassword.setAttribute("type", "password");
  }
}