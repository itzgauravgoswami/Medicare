document.querySelector('.hamburger').addEventListener('click', () => {
  const headbar = document.querySelector('.headbar');
  const menubtn = document.querySelector('.menubtn');
  const hamburger = document.querySelector('.hamburger');

  headbar.classList.toggle('active');
  menubtn.classList.toggle('active');
  hamburger.classList.toggle('active');
});
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
