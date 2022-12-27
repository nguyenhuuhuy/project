// menu

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
          </div>
        </div>
      </div>
        `;
  }
  document.querySelector(".container-listFuirt").innerHTML = data;
}
renderLisst(listfruit);


// 3 ảnh to
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


