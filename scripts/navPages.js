var img_menu = document.querySelector(".img_burger_menu");
var menu_desplegable_oculto = document.querySelector(".menu_desplegable_oculto")

img_menu.addEventListener("click", ()=>{
    if(img_menu.src.includes("assets/icons/burger_menu.svg")){
        img_menu.src = "../assets/icons/cruz.svg";
        menu_desplegable_oculto.style = "display: flex; top: 3.75em;";
        console.log("clickee if 1")

    } else {
            img_menu.src = "../assets/icons/burger_menu.svg";
            menu_desplegable_oculto.style = "display: none";
            console.log("clickee else")
    }
});

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 915){
        menu_desplegable_oculto.style = "display: none;";
        img_menu.src = "../assets/icons/burger_menu.svg";
    }
})