// phần login đăng nhập và chuyển tới web bán hàng
let email_login = document.getElementById("email_login");
let password_login = document.getElementById("password_login");
let login = document.getElementById("login_use");
let flag = false;
login.addEventListener("click", function () {
  let check = JSON.parse(localStorage.getItem("list"));
  if (check == null) {
    let error_login = document.getElementById("error_login");
    error_login.style.display = "block";
  } else {
    for (let i = 0; i < check.length; i++) {
      if (
        check[i].email == email_login.value &&
        check[i].password == password_login.value &&
        check[i].status == false
      ) {
        flag = true;
        console.log("ok");
      }
    }
    if (flag == false) {
      let error_login = document.getElementById("error_login");
      error_login.style.display = "block";
    } else {
      let status = JSON.parse(localStorage.getItem("list"));
      for (let i = 0; i < status.length; i++) {
        if (
          status[i].email == email_login.value &&
          status[i].password == password_login.value
        ) {
          status[i].status = true;
          localStorage.setItem("list", JSON.stringify(status));
        }
      }
      window.location.href = "menu.html";
    }
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
