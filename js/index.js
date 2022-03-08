const nav =  document.querySelector(".navbar__main");
const navOpenBtn =  document.querySelector(".navbar__open-icon");
const navCloseBtn =  document.querySelector(".navbar__close-icon");

navOpenBtn.addEventListener('click',() => {
    nav.classList.add("open")
});
navCloseBtn.addEventListener('click',() => {
    nav.classList.remove("open")
});