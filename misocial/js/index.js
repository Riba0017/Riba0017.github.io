/**
 * Created by User on 22.09.2018.
 */

var toggle = document.querySelector(".menu-link");
var mainNav = document.querySelector(".main-nav");
var mainList = document.querySelector(".menu-list");


toggle.addEventListener("click", function (event) {
    event.preventDefault();
    mainNav.classList.remove("main-nav");
    mainNav.classList.add("mob-nav");
    mainNav.classList.add("open-nav");
    mainList.classList.remove("menu-list");
    mainList.classList.add("mob-list");
});