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
    
    //  (para el index)cuando el dom cargue (osea, se pusieron los gp en el nav segun sea el siguiente y demas) los traigo a los 4 para 
    // redireccionarlos segun el que toquemos
    document.addEventListener("DOMContentLoaded", ()=>{
        const misGpDelNav = document.querySelectorAll(".gp");

        misGpDelNav.forEach((gp)=>{
            // le añado un evento de click evitando que se envie a donde dice esu href
            gp.addEventListener("click", (e)=>{
                e.preventDefault()
                // guardo en el localstorage el id del gp q clickee
                localStorage.setItem("id_gp_clickeado", gp.id)
                // y despues si, te envio a donde decia su href
                window.location.href = "pages/circuito.html";
            });
        })
    })
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

    //  (para el index)cuando el dom cargue (osea, se pusieron los gp en el nav segun sea el siguiente y demas) los traigo a los 4 para 
    // redireccionarlos segun el que toquemos
    document.addEventListener("DOMContentLoaded", ()=>{
        const misGpDelNav = document.querySelectorAll(".gp");

        misGpDelNav.forEach((gp)=>{
            // le añado un evento de click evitando que se envie a donde dice esu href
            gp.addEventListener("click", (e)=>{
                e.preventDefault()
                // guardo en el localstorage el id del gp q clickee
                localStorage.setItem("id_gp_clickeado", gp.id)
                // y despues si, te envio a donde decia su href
                window.location.href = "circuito.html";
            });
        })
    })
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





let arrayCarrerasNav = [
    {
        "id": 'Bahrain',
        "ronda": '1',
        "diaInicio": '29',
        "diaFin": '02',
        "mesInicio": '2',
        "mesFin": '3',
        "nombreCircuito": 'Bahrain  ',
        "nombreGP": 'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/bahrain.png',
    },
    {
        "id": 'Saudi_Arabia',
        "ronda": '2',
        "diaInicio": '07',
        "diaFin": '09',
        "mesInicio": '3',
        "mesFin": '3',
        "nombreCircuito": 'Saudi Arabia  ',
        "nombreGP": 'FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/arabia_saudita.png',
    },
    {
        "id": 'Australia',
        "ronda": '3',
        "diaInicio": '22',
        "diaFin": '24',
        "mesInicio": '3',
        "mesFin": '3',
        "nombreCircuito": 'Australia ',
        "nombreGP": 'FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2024',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/australia.png',
    },
    {
        "id": 'Japan',
        "ronda": '4',
        "diaInicio": '05',
        "diaFin": '07',
        "mesInicio": '4',
        "mesFin": '4',
        "nombreCircuito": 'Japan  ',
        "nombreGP": 'FORMULA 1 MSC CRUISES JAPANESE GRAND PRIX 2024',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/japon.png',
    },
    {
        "id": 'China',
        "ronda": '5',
        "diaInicio": '19',
        "diaFin": '21',
        "mesInicio": '4',
        "mesFin": '4',
        "nombreCircuito": 'China  ',
        "nombreGP": 'FORMULA 1 LENOVO CHINESE GRAND PRIX 2024',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/china.png',
    },
    {
        "id": 'Miami',
        "ronda": '6',
        "diaInicio": '03',
        "diaFin": '05',
        "mesInicio": '5',
        "mesFin": '5',
        "nombreCircuito": 'Miami  ',
        "nombreGP": 'FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/miami.png',
    },
    {
        "id": 'Emilia-Romagna',
        "ronda": '7',
        "diaInicio": '17',
        "diaFin": '19',
        "mesInicio": '5',
        "mesFin": '5',
        "nombreCircuito": 'Emilia-Romagna  ',
        "nombreGP": 'FORMULA 1 MSC CRUISES GRAN PREMIO DEL MADE IN ITALY E DELL EMILIA-ROMAGNA 2024',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/emilia_romagna.png',
    },
    {
        "id": 'Monaco',
        "ronda": '8',
        "diaInicio": '24',
        "diaFin": '26',
        "mesInicio": '5',
        "mesFin": '5',
        "banderaPais": '../assets/img/country _flags/monaco.png',
        "nombreCircuito": 'Mónaco  ',
        "nombreGP": 'FORMULA 1 GRAND PRIX DE MONACO 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/monaco.png',
    },
    {
        "id": 'Canada',
        "ronda": '9',
        "diaInicio": '07',
        "diaFin": '09',
        "mesInicio": '6',
        "mesFin": '6',
        "nombreCircuito": 'Canadá  ',
        "nombreGP": 'FORMULA 1 AWS GRAND PRIX DU CANADÁ 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/canada.png',
    },
    {
        "id": 'spain',
        "ronda": '10',
        "diaInicio": '21',
        "diaFin": '23',
        "mesInicio": '6',
        "mesFin": '6',
        "nombreCircuito": 'España  ',
        "nombreGP": 'FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/spain.png',
    },
    {
        "id": 'Austria',
        "ronda": '11',
        "diaInicio": '28',
        "diaFin": '30',
        "mesInicio": '6',
        "mesFin": '6',
        "nombreCircuito": 'Austria  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS AUSTRIAN GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/austria.png',
    },
    {
        "id": 'Gran_Bretaña',
        "ronda": '12',
        "diaInicio": '05',
        "diaFin": '07',
        "mesInicio": '7',
        "mesFin": '7',
        "nombreCircuito": 'Gran Bretaña  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/gran_bretaña.png',
    },
    {
        "id": 'Hungría',
        "ronda": '13',
        "diaInicio": '19',
        "diaFin": '21',
        "mesInicio": '7',
        "mesFin": '7',
        "banderaPais": '../assets/img/country _flags/hungria.png',
        "nombreCircuito": 'Hungría  ',
        "nombreGP": 'FORMULA 1 HUNGARIAN GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/hungria.png',
    },
    {
        "id": 'Belgica',
        "ronda": '14',
        "diaInicio": '26',
        "diaFin": '28',
        "mesInicio": '7',
        "mesFin": '7',
        "nombreCircuito": 'Bélgica  ',
        "nombreGP": 'FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/belgica.png',
    },
    {
        "id": 'Paises_Bajos',
        "ronda": '15',
        "diaInicio": '23',
        "diaFin": '25',
        "mesInicio": '8',
        "mesFin": '8',
        "nombreCircuito": 'Paises Bajos  ',
        "nombreGP": 'FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/paises_bajos.png',
    },
    {
        "id": 'Italia',
        "ronda": '16',
        "diaInicio": '30',
        "diaFin": '01',
        "mesInicio": '8',
        "mesFin": '9',
        "nombreCircuito": 'Italia  ',
        "nombreGP": 'FORMULA 1 PIRELLI GRAN PREMIO D`ITALIA 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/italia.png',
    },
    {
        "id": 'Azerbaiyán',
        "ronda": '17',
        "diaInicio": '13',
        "diaFin": '15',
        "mesInicio": '9',
        "mesFin": '9',
        "nombreCircuito": 'Azerbaiyán  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/azerbaijan.png',
    },
    {
        "id": 'Singapur',
        "ronda": '18',
        "diaInicio": '20',
        "diaFin": '22',
        "mesInicio": '9',
        "mesFin": '9',
        "nombreCircuito": 'Singapur  ',
        "nombreGP": 'FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/singapur.png',
    },
    {
        "id": 'Estados_Unidos',
        "ronda": '19',
        "diaInicio": '18',
        "diaFin": '20',
        "mesInicio": '10',
        "mesFin": '10',
        "nombreCircuito": 'Estados Unidos  ',
        "nombreGP": 'FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/eeuu.png',
    },
    {
        "id": 'Mexico',
        "ronda": '20',
        "diaInicio": '25',
        "diaFin": '27',
        "mesInicio": '10',
        "mesFin": '10',
        "nombreCircuito": 'Mexico  ',
        "nombreGP": 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/mexico.png',
    },
    {
        "id": 'Brasil',
        "ronda": '21',
        "diaInicio": '01',
        "diaFin": '03',
        "mesInicio": '11',
        "mesFin": '11',
        "nombreCircuito": 'Brasil  ',
        "nombreGP": 'FORMULA 1 LENOVO GRANDE PRÊMIO DE SÃO PAULO 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/brazil.png',
    },
    {
        "id": 'Las_Vegas',
        "ronda": '22',
        "diaInicio": '21',
        "diaFin": '23',
        "mesInicio": '11',
        "mesFin": '11',
        "nombreCircuito": 'Las Vegas  ',
        "nombreGP": 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/eeuu.png',
    },
    {
        "id": 'Qatar',
        "ronda": '23',
        "diaInicio": '29',
        "diaFin": '01',
        "mesInicio": '11',
        "mesFin": '12',
        "nombreCircuito": 'Qatar  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/qatar.png',
    },
    {
        "id": 'Abu Dhabi',
        "ronda": '24',
        "diaInicio": '06',
        "diaFin": '08',
        "mesInicio": '12',
        "mesFin": '12',
        "nombreCircuito": 'Abu Dhabi  ',
        "nombreGP": 'FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024 ',
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/abu_dhabi.png',
    }
]


const contenedorGps = document.querySelector(".contenedor_gps");

function obtenerFechaActual() {
    let hoy = new Date();
    return {
        dia: hoy.getDate(),
        mes: hoy.getMonth()+1
    };
}

function estaEnCurso(carrera, fechaActual) {
    let inicio = new Date(2024, carrera.mesInicio - 1, carrera.diaInicio);
    let fin = new Date(2024, carrera.mesFin - 1, carrera.diaFin);
    let actual = new Date(2024, fechaActual.mes - 1, fechaActual.dia);
    return actual >= inicio && actual <= fin;
}

function obtenerCarreraProxima(carreras, fechaActual) {
    let hoy = new Date(2024, fechaActual.mes - 1, fechaActual.dia);
    let proximaCarrera = null;
    let menorDiferencia = Infinity; // ?

    carreras.forEach(carrera => {
        let inicio = new Date(2024, carrera.mesInicio - 1, carrera.diaInicio);
        let diferencia = inicio - hoy;

        if (diferencia >= 0 && diferencia < menorDiferencia) {
            menorDiferencia = diferencia;
            proximaCarrera = carrera;
        }
    });
    return proximaCarrera;
}

let fechaActual = obtenerFechaActual();
let carreraEnCurso = arrayCarrerasNav.find(carrera => estaEnCurso(carrera, fechaActual));  // busco si hay carrera en curso


if (carreraEnCurso) {
    rellenarNavDeCronograma(carreraEnCurso)
}else{
    rellenarNavDeCronograma(obtenerCarreraProxima(arrayCarrerasNav, fechaActual)) // relleno el nav pasandole la carrera proxima
}

function rellenarNavDeCronograma(carreraActual) {
    let carreraAnterior;
    let carreraProximamente1;
    let carreraProximamente2;
    let anioActual = new Date().getFullYear();

    //para buscar las carreas voy a hacerlo por las rondas, ya q van de a 1, entonces la carrera anterior es la ronda anterior (-1),
    // la carrera siguiente es la ronda siguiente (+1) y la carrera siguiente2 es la ronda +2, una vez q las tengo, las inserto en el nav
    arrayCarrerasNav.forEach((carrera)=>{
        if (parseInt(carrera.ronda) == (parseInt(carreraActual.ronda)-1)) {
            carreraAnterior = carrera;
        }

        if (parseInt(carrera.ronda) == (parseInt(carreraActual.ronda)+1)) {
            carreraProximamente1 = carrera;
        }

        if (parseInt(carrera.ronda) == (parseInt(carreraActual.ronda)+2)) {
            carreraProximamente2 = carrera;
        }
    })

    // console.log(carreraAnterior)
    // console.log(carreraActual)
    // console.log(carreraProximamente1)
    // console.log(carreraProximamente2)

    contenedorGps.innerHTML = `<a href="#" class="gp borde_gris_gp" id="${carreraAnterior.id}">
                                <p class="t_posicionado1">Anterior</p>
                                <div class="contenedor_img_titulo_gp">
                                    <div class="fondo_delGP">
                                        <img src="${carreraAnterior.imagen_fondo}" alt="img_fondo">
                                        <div class="nav_nombre_del_gp fuente_f1_bold">
                                            <p>${carreraAnterior.nombreCircuito}</p>
                                            <p>${anioActual}</p>
                                        </div>
                                    </div>
                                    <div class="contenedor_titulo_gp">
                                        <p class="titulo_gp">${carreraAnterior.nombreGP}</p>
                                        <p class="fecha_gp fuente_tw_regular">${dameElMes(carreraAnterior.mesInicio)} ${carreraAnterior.diaInicio} - ${carreraAnterior.diaFin} <span>></span></p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="gp borde_gris_gp" id="${carreraActual.id}">
                                <p class="t_posicionado2">Siguiente</p>
                                <div class="contenedor_img_titulo_gp">
                                    <div class="fondo_delGP">
                                        <img src="${carreraActual.imagen_fondo}" alt="img_fondo">
                                        <div class="nav_nombre_del_gp fuente_f1_bold">
                                            <p>${carreraActual.nombreCircuito}</p>
                                            <p>${anioActual}</p>
                                        </div>
                                    </div>
                                    <div class="contenedor_titulo_gp">
                                        <p class="titulo_gp">${carreraActual.nombreGP}</p>
                                        <p class="fecha_gp fuente_tw_regular">${dameElMes(carreraActual.mesInicio)} ${carreraActual.diaInicio} - ${carreraActual.diaFin} <span>></span></p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="gp borde_transp_gp" id="${carreraProximamente1.id}">
                                <p class="t_posicionado3">Próximamente</p>
                                <div class="contenedor_img_titulo_gp">
                                    <div class="fondo_delGP">
                                        <img src="${carreraProximamente1.imagen_fondo}" alt="img_fondo">
                                        <div class="nav_nombre_del_gp fuente_f1_bold">
                                            <p>${carreraProximamente1.nombreCircuito}</p>
                                            <p>${anioActual}</p>
                                        </div>
                                    </div>
                                    <div class="contenedor_titulo_gp">
                                        <p class="titulo_gp">${carreraProximamente1.nombreGP}</p>
                                        <p class="fecha_gp fuente_tw_regular">${dameElMes(carreraProximamente1.mesInicio)} ${carreraProximamente1.diaInicio} - ${carreraProximamente1.diaFin} <span>></span></p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="gp borde_transp_gp" id="${carreraProximamente2.id}">
                                <div class="contenedor_img_titulo_gp">
                                    <div class="fondo_delGP">
                                        <img src="${carreraProximamente2.imagen_fondo}" alt="img_fondo">
                                        <div class="nav_nombre_del_gp fuente_f1_bold">
                                            <p>${carreraProximamente2.nombreCircuito}</p>
                                            <p>${anioActual}</p>
                                        </div>
                                    </div>
                                    <div class="contenedor_titulo_gp">
                                        <p class="titulo_gp">${carreraProximamente2.nombreGP}</p>
                                        <p class="fecha_gp fuente_tw_regular">${dameElMes(carreraProximamente2.mesInicio)} ${carreraProximamente2.diaInicio} - ${carreraProximamente2.diaFin} <span>></span></p>
                                    </div>
                                </div>
                            </a>`

}



function dameElMes(numero) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[numero-1];
}