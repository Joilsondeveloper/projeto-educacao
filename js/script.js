"use strict"

const menu_burguer = document.querySelector("#menu-burguer")
menu_burguer.addEventListener("click",()=>{
    document.querySelector(".menus").classList.toggle("active")
})