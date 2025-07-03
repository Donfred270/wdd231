const hamburgerBtn = document.getElementById("hamburger-btn-open");
const closeBtn = document.getElementById("hamburger-btn-close");
const nav = document.getElementById("main-nav");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.add("active");
  nav.classList.remove("hidden");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  nav.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  nav.classList.add("hidden");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  nav.setAttribute("aria-hidden", "true");
});
