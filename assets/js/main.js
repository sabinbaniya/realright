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
