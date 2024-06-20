var img_menu = document.querySelector(".img_burger_menu");
var menu_desplegable_oculto = document.querySelector(".menu_desplegable_oculto")

let misEquipos = document.querySelectorAll(".equipo");

if (document.title === "Inicio | F1") {
    console.log("INICIO")

    img_menu.addEventListener("click", ()=>{
        if(img_menu.src.includes("assets/icons/burger_menu.svg")){
            img_menu.src = "assets/icons/cruz.svg";
            menu_desplegable_oculto.style = "display: flex; top: 3.75em;";
        } else {
                img_menu.src = "assets/icons/burger_menu.svg";
                menu_desplegable_oculto.style = "display: none";
        }
    });
    
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 915){
            menu_desplegable_oculto.style = "display: none;";
            img_menu.src = "assets/icons/burger_menu.svg";
        }
    })
    
}else{
    console.log("OTRAS PAGINAS")

    img_menu.addEventListener("click", ()=>{
        if(img_menu.src.includes("assets/icons/burger_menu.svg")){
            img_menu.src = "../assets/icons/cruz.svg";
            menu_desplegable_oculto.style = "display: flex; top: 3.75em;";
        } else {
                img_menu.src = "../assets/icons/burger_menu.svg";
                menu_desplegable_oculto.style = "display: none";
        }
    });
    
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 915){
            menu_desplegable_oculto.style = "display: none;";
            img_menu.src = "../assets/icons/burger_menu.svg";
        }
    })
}


misEquipos.forEach((equipo)=>{
    equipo.addEventListener("click", (e)=>{
        e.preventDefault();
        localStorage.setItem("id_equipo_clickeado", equipo.id);
        window.location.href = equipo.href;
    })
})