var img_menu = document.querySelector(".img_burger_menu");
var menu_desplegable_oculto = document.querySelector(".menu_desplegable_oculto")

let misEquipos = document.querySelectorAll(".equipo");

// hago un if  porq como el index esta afuera de las carpetas, tengo q usar el ../ en algunas rutas y si NO
// estoy en el home, SI que la tengo q usar
if (document.title === "Inicio | F1") {

    // cuando toco el menu, despliego el menu, y si ya esta desplegado, lo oculto
    img_menu.addEventListener("click", ()=>{
        if(img_menu.src.includes("assets/icons/burger_menu.svg")){
            img_menu.src = "assets/icons/cruz.svg";
            // menu_desplegable_oculto.style = "display: flex; top: 3.75em;";
            menu_desplegable_oculto.classList.add("mostrar_menu");
        } else {
            img_menu.src = "assets/icons/burger_menu.svg";
            // menu_desplegable_oculto.style = "display: none";
            menu_desplegable_oculto.classList.remove("mostrar_menu");
        }
    });
    
    // tambien, si se reajusta la pantalla a +915px, es pq ya no necesito el menu responsive y muestra el menu original, pero esto
    // se hace para que SI el menu esta desplegado, y se agranda la pantalla, que se oculte el menu
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 915){
            // menu_desplegable_oculto.style = "display: none;";
            menu_desplegable_oculto.classList.remove("mostrar_menu");
            img_menu.src = "assets/icons/burger_menu.svg";
        }
    })

    // este lo hago para que cuando el menu esta desplegado, si toco en cualquier lado de la pantalla que NO sea ni el menu desplegable ni 
    // la imagen del menu, este menu se oculte
    document.addEventListener("click", (e)=>{
        if (!menu_desplegable_oculto.contains(e.target) && !img_menu.contains(e.target)) {
            img_menu.src = "assets/icons/burger_menu.svg";
            // menu_desplegable_oculto.style = "display: none";
            menu_desplegable_oculto.classList.remove("mostrar_menu");
        }
    });
    
}else{

    // cuando toco el menu, despliego el menu, y si ya esta desplegado, lo oculto
    img_menu.addEventListener("click", ()=>{
        if(img_menu.src.includes("assets/icons/burger_menu.svg")){
            img_menu.src = "../assets/icons/cruz.svg";
            // menu_desplegable_oculto.style = "display: flex; top: 3.75em;";
            menu_desplegable_oculto.classList.add("mostrar_menu");
        } else {
                img_menu.src = "../assets/icons/burger_menu.svg";
                // menu_desplegable_oculto.style = "display: none";
                menu_desplegable_oculto.classList.remove("mostrar_menu");
        }
    });
    
     // tambien, si se reajusta la pantalla a +915px, es pq ya no necesito el menu responsive y muestra el menu original, pero esto
    // se hace para que SI el menu esta desplegado, y se agranda la pantalla, que se oculte el menu
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 915){
            // menu_desplegable_oculto.style = "display: none;";
            menu_desplegable_oculto.classList.remove("mostrar_menu");
            img_menu.src = "../assets/icons/burger_menu.svg";
        }
    })

    // este lo hago para que cuando el menu esta desplegado, si toco en cualquier lado de la pantalla que NO sea ni el menu desplegable ni 
    // la imagen del menu, este menu se oculte
    document.addEventListener("click", (e)=>{
        if (!menu_desplegable_oculto.contains(e.target) && !img_menu.contains(e.target)) {
            img_menu.src = "../assets/icons/burger_menu.svg";
            // menu_desplegable_oculto.style = "display: none";
            menu_desplegable_oculto.classList.remove("mostrar_menu");
        }
    });
}


// este es para q cuando se detecte scroll en la ventana, se cierre el menu desplegable
window.addEventListener("scroll", ()=>{
    img_menu.src = "../assets/icons/burger_menu.svg";
    menu_desplegable_oculto.classList.remove("mostrar_menu");
})


// este es para que cuando toque algun equipo del desplegable de 'equipos', te redireccione al equipo correspondiente
misEquipos.forEach((equipo)=>{
    equipo.addEventListener("click", (e)=>{
        e.preventDefault();
        localStorage.setItem("id_equipo_clickeado", equipo.id);
        window.location.href = equipo.href;
    })
})



const desp_pilotos = document.querySelector(".desplegable_pilotos");
const desp_equipos = document.querySelector(".desplegable_equipos");
const desp_resultados = document.querySelector(".desplegable_resultados");
const desp_cronograma = document.querySelector(".desplegable_cronograma");
const desp_mas = document.querySelector(".desplegable_mas");

const nav_pilotos = document.querySelector(".nav_pilotos");
const nav_equipos = document.querySelector(".nav_equipos");
const nav_resultados = document.querySelector(".nav_resultados");
const nav_cronograma = document.querySelector(".nav_cronograma");
const nav_mas = document.querySelector(".nav_mas");

// cuando le hago hover al los desplegables
desp_pilotos.addEventListener("mouseover", ()=>{
    nav_pilotos.classList.add("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_equipos.addEventListener("mouseover", ()=>{
    nav_equipos.classList.add("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_resultados.addEventListener("mouseover", ()=>{
    nav_resultados.classList.add("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_cronograma.addEventListener("mouseover", ()=>{
    nav_cronograma.classList.add("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_mas.addEventListener("mouseover", ()=>{
    nav_mas.classList.add("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});


// cuando les dejo de hacer hover
desp_pilotos.addEventListener("mouseout", ()=>{
    nav_pilotos.classList.remove("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_equipos.addEventListener("mouseout", ()=>{
    nav_equipos.classList.remove("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_resultados.addEventListener("mouseout", ()=>{
    nav_resultados.classList.remove("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_cronograma.addEventListener("mouseout", ()=>{
    nav_cronograma.classList.remove("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});
desp_mas.addEventListener("mouseout", ()=>{
    nav_mas.classList.remove("fondo_del_nav_seleccionado_al_hacer_hover_en_desplegable");
});


