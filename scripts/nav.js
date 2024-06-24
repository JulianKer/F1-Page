var img_menu = document.querySelector(".img_burger_menu");
var menu_desplegable_oculto = document.querySelector(".menu_desplegable_oculto")

let misEquipos = document.querySelectorAll(".equipo");

// hago un if  porq como el index esta afuera de las carpetas, tengo q usar el ../ en algunas rutas y si NO
// estoy en el home, SI que la tengo q usar
if (document.title === "Inicio | F1") {
    console.log("INICIO")

    // cuando toco el menu, despliego el menu, y si ya esta desplegado, lo oculto
    img_menu.addEventListener("click", ()=>{
        if(img_menu.src.includes("assets/icons/burger_menu.svg")){
            img_menu.src = "assets/icons/cruz.svg";
            menu_desplegable_oculto.style = "display: flex; top: 3.75em;";
        } else {
                img_menu.src = "assets/icons/burger_menu.svg";
                menu_desplegable_oculto.style = "display: none";
        }
    });
    
    // tambien, si se reajusta la pantalla a +915px, es pq ya no necesito el menu responsive y muestra el menu original, pero esto
    // se hace para que SI el menu esta desplegado, y se agranda la pantalla, que se oculte el menu
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 915){
            menu_desplegable_oculto.style = "display: none;";
            img_menu.src = "assets/icons/burger_menu.svg";
        }
    })

    // este lo hago para que cuando el menu esta desplegado, si toco en cualquier lado de la pantalla que NO sea ni el menu desplegable ni 
    // la imagen del menu, este menu se oculte
    document.addEventListener("click", (e)=>{
        if (!menu_desplegable_oculto.contains(e.target) && !img_menu.contains(e.target)) {
            img_menu.src = "assets/icons/burger_menu.svg";
            menu_desplegable_oculto.style = "display: none";
        }
    });
    
}else{
    console.log("OTRAS PAGINAS")

    // cuando toco el menu, despliego el menu, y si ya esta desplegado, lo oculto
    img_menu.addEventListener("click", ()=>{
        if(img_menu.src.includes("assets/icons/burger_menu.svg")){
            img_menu.src = "../assets/icons/cruz.svg";
            menu_desplegable_oculto.style = "display: flex; top: 3.75em;";
        } else {
                img_menu.src = "../assets/icons/burger_menu.svg";
                menu_desplegable_oculto.style = "display: none";
        }
    });
    
     // tambien, si se reajusta la pantalla a +915px, es pq ya no necesito el menu responsive y muestra el menu original, pero esto
    // se hace para que SI el menu esta desplegado, y se agranda la pantalla, que se oculte el menu
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 915){
            menu_desplegable_oculto.style = "display: none;";
            img_menu.src = "../assets/icons/burger_menu.svg";
        }
    })

    // este lo hago para que cuando el menu esta desplegado, si toco en cualquier lado de la pantalla que NO sea ni el menu desplegable ni 
    // la imagen del menu, este menu se oculte
    document.addEventListener("click", (e)=>{
        if (!menu_desplegable_oculto.contains(e.target) && !img_menu.contains(e.target)) {
            img_menu.src = "../assets/icons/burger_menu.svg";
            menu_desplegable_oculto.style = "display: none";
        }
    });
}



// este es para que cuando toque algun equipo del desplegable de 'equipos', te redireccione al equipo correspondiente
misEquipos.forEach((equipo)=>{
    equipo.addEventListener("click", (e)=>{
        e.preventDefault();
        localStorage.setItem("id_equipo_clickeado", equipo.id);
        window.location.href = equipo.href;
    })
})