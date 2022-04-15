const navbar = document.getElementById("navbar");

const bars = document.querySelector(".fa-bars");

bars.addEventListener("click", () => {
  navbar.classList.toggle("hidemenu");
});
