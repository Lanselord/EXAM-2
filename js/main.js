let elbutton = document.querySelector(".header__btn");
let elButtonMenu = elbutton.querySelector(".menu");
let elButtonExit = elbutton.querySelector(".exit");
let elNav = document.querySelector(".nav");

elbutton.addEventListener("click", function(evt){
    evt.preventDefault();

    elButtonMenu.classList.toggle("btn__menu");
    elButtonExit.classList.toggle("btn__exit");
    elNav.classList.toggle("nav__blok");
})