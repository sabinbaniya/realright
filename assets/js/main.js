// for year
const year = new Date().getFullYear();
document.getElementById("year").innerText = year;

//for menu
const icon = document.getElementById("icon");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

icon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  menu.classList.toggle("absolute");
  menu.classList.toggle("p-4");
  menu.classList.toggle("bg-gray-50");
  menu.classList.toggle("top-1/2");
  menu.classList.toggle("left-1/2");
  menu.classList.toggle("-translate-x-1/2");
  menu.classList.toggle("translate-y-1/2");
  menu.classList.toggle("text-center");
});

/* Testimonial Scroll start */
const testimonial = document.querySelectorAll(".testimonial");
window.onresize = checkResize;

let counter = 1;

function checkResize() {
  if (window.innerWidth > 640) {
    setInterval(autoScroll, 5000);
  }
}

function autoScroll() {
  if (counter == 4) {
    autoScroll3();
  }
  if (counter == 3) {
    autoScroll2();
  }
  if (counter == 2) {
    autoScroll1();
  }
  if (counter == 1) {
    autoScroll0();
  }
}

function autoScroll0() {
  testimonial[0].style.left = "126%";
  testimonial[1].style.left = "8%";
  testimonial[2].style.left = "50%";
  testimonial[3].style.left = "92%";

  counter++;
}

function autoScroll1() {
  testimonial[0].style.left = "92%";
  testimonial[1].style.left = "126%";
  testimonial[2].style.left = "8%";
  testimonial[3].style.left = "50%";

  counter++;
}

function autoScroll2() {
  testimonial[0].style.left = "50%";
  testimonial[1].style.left = "92%";
  testimonial[2].style.left = "126%";
  testimonial[3].style.left = "8%";

  counter++;
}

function autoScroll3() {
  testimonial[0].style.left = "8%";
  testimonial[1].style.left = "50%";
  testimonial[2].style.left = "92%";
  testimonial[3].style.left = "126%";

  setTimeout(interval, 0);
}

function interval() {
  counter = 1;
}

/* Testimonial Scroll End */
/* Mobile testimonial btn start */

const btn = document.querySelectorAll(".myBtn");

btn[0].addEventListener("click", btn0);
btn[1].addEventListener("click", btn1);
btn[2].addEventListener("click", btn2);
btn[3].addEventListener("click", btn3);

function btn0() {
  btn[0].classList.add("active");
  btn[1].classList.remove("active");
  btn[2].classList.remove("active");
  btn[3].classList.remove("active");

  testimonial[0].style.left = "50%";
  testimonial[1].style.left = "150%";
  testimonial[2].style.left = "150%";
  testimonial[3].style.left = "150%";
}

function btn1() {
  btn[0].classList.remove("active");
  btn[1].classList.add("active");
  btn[2].classList.remove("active");
  btn[3].classList.remove("active");

  testimonial[0].style.left = "150%";
  testimonial[1].style.left = "50%";
  testimonial[2].style.left = "150%";
  testimonial[3].style.left = "150%";
}

function btn2() {
  btn[0].classList.remove("active");
  btn[1].classList.remove("active");
  btn[2].classList.add("active");
  btn[3].classList.remove("active");

  testimonial[0].style.left = "150%";
  testimonial[1].style.left = "150%";
  testimonial[2].style.left = "50%";
  testimonial[3].style.left = "150%";
}

function btn3() {
  btn[0].classList.remove("active");
  btn[1].classList.remove("active");
  btn[2].classList.remove("active");
  btn[3].classList.add("active");

  testimonial[0].style.left = "150%";
  testimonial[1].style.left = "150%";
  testimonial[2].style.left = "150%";
  testimonial[3].style.left = "50%";
}

/* Mobile testimonial btn end*/
