
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------       Campeonato Constructores      ----------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


// llamo a los contenedores de equipos, el de podio y los de NO podio
let contenedorPodioConstructores = document.getElementById("podio_de_constructores");
let contenedorEquiposConstructores = document.getElementById("equipos_constructores");

// declaro esta variable para ver cuantos equipos hay en podio y asi ya NO rellenar mas en el podio ya q solo deben ser 3
let equiposEnPodio = 0;


// creo mi array de equipos.
// NOTA: --------------------------------------------------------------------------------------------------------------------
// para modificarle el orden a los equipos despues de cada carrera, debo cambiarle los puntos en este array al equipo
// correspondiente y aitomaticamente se mostrara ordenado el que tenga q ir en podio, en podio y asi.
let arrayEquipos = [
    {
        "id":'redbull',

        "name":'Red Bull Racing',
        "url":'../assets/img/logos_teams/redbull.png',
        "points": 456,
        "color": 'backgroundRedbull',
    },
    {
        "id":'ferrari',

        "name":'Ferrari',
        "url":'../assets/img/logos_teams/ferrari.png',
        "points": 425,
        "color": 'backgroundFerrari',

    },
    {
        "id":'mclaren',

        "name":'McLaren',
        "url":'../assets/img/logos_teams/mcLaren.png',
        "points": 476,
        "color": 'backgroundMclaren',

    },
    {
        "id":'mercedes',

        "name":'Mercedes',
        "url":'../assets/img/logos_teams/mercedes-logo.png',
        "points": 309,
        "color": 'backgroundMercedes',

    },
    {
        "id":'astonMartin',

        "name":'Aston Martin',
        "url":'../assets/img/logos_teams/aston-martin-logo.png',
        "points": 82,
        "color": 'backgroundAston_martin',

    },
    {
        "id":'rb',

        "name":'RB',
        "url":'../assets/img/logos_teams/rb-logo.png',
        "points": 34,
        "color": 'backgroundRb',

    },
    {
        "id":'haas',

        "name":'Haas',
        "url":'../assets/img/logos_teams/haas-logo.png',
        "points": 29,
        "color": 'backgroundHaas',

    },
    {
        "id":'alpine',

        "name":'Alpine',
        "url":'../assets/img/logos_teams/alpine-logo.png',
        "points": 13,
        "color": 'backgroundAlpine',

    },
    {
        "id":'williams',

        "name":'Williams',
        "url":'../assets/img/logos_teams/williams-logo.png',
        "points": 16,
        "color": 'backgroundWilliams',

    },
    {
        "id":'kickSauber',

        "name":'Kick Sauber',
        "url":'../assets/img/logos_teams/kick-sauber-logo.png',
        "points": 0,
        "color": 'backgroundKick_sauber',

    },
]


// ordeno al array agarrando 2 objetos y comparandolos por sus puntos asi se ordenan (en este caso, b va primero pq quiero q sea 
// de MAYOR a MENOR, si queiro que sea al revez, le invierto el orden de a y b)
arrayEquipos.sort((a,b)=> b.points - a.points);


// una vez ordenado, por cada objeto equipo, tomo su index en el array YA ORDENADO
arrayEquipos.forEach((equipo, index)=>{

    // si tengo espacio para poner dentro del podio, entro
    if (equiposEnPodio < 3) {
        // lo inserto en el podio con su debida posicion
        insertarEquipoEnPodio(equipo, (index+1));
        // y aumento la cantidad de equipos que hay en el podio
        equiposEnPodio++;
    }else{
        // en caso de que el podio este lleno, los meto en el contenedor de los demas equipos que NO estan en podio
        insertarEquipo(equipo, (index+1));
    }
})


function insertarEquipoEnPodio(equipo, posicion) {
    contenedorPodioConstructores.innerHTML += `
    <a href="equipoEspecifico.html" class="podio_c" id="${equipo.id}">
        <div class="contenedor_puesto_constructores">
            <p class="num_podio fuente_f1_bold">${posicion}°</p>
            <h5 class="titulo_equipo_constructor fuente_tw_bold"> <span class="${equipo.color}">.</span>${equipo.name}</h5>
        </div>
        <img src="${equipo.url}" alt="">
        <div class="puntos fuente_f1_bold">
            <p class="num">${equipo.points}</p>
            <p class="pts">PTS</p>
        </div>
    </a>`
}

function insertarEquipo(equipo, posicion) {
    contenedorEquiposConstructores.innerHTML += `
    <a href="equipoEspecifico.html" class="demas_equipos" id="${equipo.id}">
        <div class="contenedor_puesto_constructores">
            <p class="num_podio fuente_f1_bold">${posicion}°</p>
            <h5 class="titulo_equipo_constructor fuente_tw_bold"> <span class="${equipo.color}">.</span>${equipo.name}</h5>
        </div>
        <img src="${equipo.url}" alt="">
        <div class="puntos fuente_f1_bold">
            <p class="num">${equipo.points}</p>
            <p class="pts">PTS</p>
        </div>
    </a>`
}

window.addEventListener("DOMContentLoaded",()=>{
    const equiposDePodio = document.querySelectorAll(".podio_c");
    const equiposRestantes = document.querySelectorAll(".demas_equipos");

    equiposDePodio.forEach((eq)=>{
        eq.addEventListener("click", (e)=>{
            e.preventDefault();
            localStorage.setItem("id_equipo_clickeado", eq.id);
            window.location.href = eq.href;
        })

    })

    equiposRestantes.forEach((eq)=>{
        eq.addEventListener("click", (e)=>{
            e.preventDefault();
            console.log(localStorage.getItem("id_equipo_clickeado"))
            localStorage.setItem("id_equipo_clickeado", eq.id);
            console.log(localStorage.getItem("id_equipo_clickeado"))
            window.location.href = eq.href;
        })

    })
})
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------  FIN Campeonato Constructores      ----------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/













/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------       Campeonato Pilotos      ----------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let cant_podio_pilotos = 0;

let podio_p1 = document.querySelector(".podio_p1")
let podio_p2 = document.querySelector(".podio_p2")
let podio_p3 = document.querySelector(".podio_p3")
let contenedor_demas_pilotos = document.getElementById("contenedor_demas_pilotos")

let arrayPilotos = [
    {
        "img_piloto": '../assets/img/img_pilotos/sai.png',
        "apellido": 'SAI',
        "img_escuderia": '../assets/img/logos_teams/ferrari.png',
        "puntos": 184,
        "color":'backgroundFerrari',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/per.png',
        "apellido": 'PER',
        "img_escuderia": '../assets/img/logos_teams/redbull.png',
        "puntos": 143,
        "color":'backgroundRedbull',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/pia.png',
        "apellido": 'PIA',
        "img_escuderia": '../assets/img/logos_teams/mclaren.png',
        "puntos": 222,
        "color":'backgroundMclaren',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/rus.png',
        "apellido": 'RUS',
        "img_escuderia": '../assets/img/logos_teams/mercedes-logo.png',
        "puntos": 143,
        "color":'backgroundMercedes',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/ham.png',
        "apellido": 'HAM',
        "img_escuderia": '../assets/img/logos_teams/mercedes-logo.png',
        "puntos": 166,
        "color":'backgroundMercedes',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/alo.png',
        "apellido": 'ALO',
        "img_escuderia": '../assets/img/logos_teams/aston-martin-logo.png',
        "puntos": 58,
        "color":'backgroundAston_martin',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/tsu.png',
        "apellido": 'TSU',
        "img_escuderia": '../assets/img/logos_teams/rb-logo.png',
        "puntos": 22,
        "color":'backgroundRb',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/str.png',
        "apellido": 'STR',
        "img_escuderia": '../assets/img/logos_teams/aston-martin-logo.png',
        "puntos": 24,
        "color":'backgroundAston_martin',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/alb.png',
        "apellido": 'ALB',
        "img_escuderia": '../assets/img/logos_teams/williams-logo.png',
        "puntos": 12,
        "color":'backgroundWilliams',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/oco.png',
        "apellido": 'OCO',
        "img_escuderia": '../assets/img/logos_teams/alpine-logo.png',
        "puntos": 5,
        "color":'backgroundAlpine',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/mag.png',
        "apellido": 'MAG',
        "img_escuderia": '../assets/img/logos_teams/haas-logo.png',
        "puntos": 6,
        "color":'backgroundHaas',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/zho.png',
        "apellido": 'ZHO',
        "img_escuderia": '../assets/img/logos_teams/kick-sauber-logo.png',
        "puntos": 0,
        "color":'backgroundKick_sauber',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/ric.png',
        "apellido": 'RIC',
        "img_escuderia": '../assets/img/logos_teams/rb-logo.png',
        "puntos": 12,
        "color":'backgroundRb',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/bea.png',
        "apellido": 'BEA',
        "img_escuderia": '../assets/img/logos_teams/ferrari.png',
        "puntos": 7,
        "color":'backgroundFerrari',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/hul.png',
        "apellido": 'HUL',
        "img_escuderia": '../assets/img/logos_teams/haas-logo.png',
        "puntos": 22,
        "color":'backgroundHaas',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/gas.png',
        "apellido": 'GAS',
        "img_escuderia": '../assets/img/logos_teams/alpine-logo.png',
        "puntos": 8,
        "color":'backgroundAlpine',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/bot.png',
        "apellido": 'BOT',
        "img_escuderia": '../assets/img/logos_teams/kick-sauber-logo.png',
        "puntos": 0,
        "color":'backgroundKick_sauber',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/sar.png',
        "apellido": 'SAR',
        "img_escuderia": '../assets/img/logos_teams/williams-logo.png',
        "puntos": 0,
        "color":'backgroundWilliams',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/ver.png',
        "apellido": 'VER',
        "img_escuderia": '../assets/img/logos_teams/redbull.png',
        "puntos": 313,
        "color":'backgroundRedbull',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/lec.png',
        "apellido": 'LEC',
        "img_escuderia": '../assets/img/logos_teams/ferrari.png',
        "puntos": 235,
        "color":'backgroundFerrari',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/nor.png',
        "apellido": 'NOR',
        "img_escuderia": '../assets/img/logos_teams/mclaren.png',
        "puntos": 254,
        "color":'backgroundMclaren',
    },
    {
        "img_piloto": '../assets/img/img_pilotos/col.png',
        "apellido": 'COL',
        "img_escuderia": '../assets/img/logos_teams/williams-logo.png',
        "puntos": 4,
        "color":'backgroundWilliams',
    },
];


arrayPilotos.sort((a,b)=> b.puntos - a.puntos);


arrayPilotos.forEach((piloto, index)=>{
    if (cant_podio_pilotos < 3) {
        insertarPilotoEnPodio(piloto, index+1);
        cant_podio_pilotos++;
    }else{
        insertarPilotoEnTabla(piloto, index+1);
    }

})


function insertarPilotoEnPodio(piloto, posicion) {
    switch (posicion) {
        case 1:
            podio_p1.innerHTML = `
            <div class="fondo_del_piloto fuente_f1_bold">
                <img src="${piloto.img_piloto}" alt="" class="imagen_podios">
                <img src="../assets/img/dorado.png" alt="" class="copa">
                <div class="nombre_piloto">
                    <p>1°</p>
                    <p class="apellido_piloto_resultados">${piloto.apellido}</p>
                </div>
                <div class="segundo_renglon fuente_f1_bold">
                    <img src="${piloto.img_escuderia}" alt="">
                    <div>
                        <p class="num">${piloto.puntos}</p>
                        <p class="pts">PTS</p>
                    </div>
                </div>
            </div>`;
            break;
        case 2:
            podio_p2.innerHTML = `
            <div class="fondo_del_piloto fuente_f1_bold">
                        <img src="${piloto.img_piloto}" alt="" class="imagen_podios">
                        <img src="../assets/img/plata.png" alt="" class="copa">
                        <div class="nombre_piloto">
                            <p>2°</p>
                            <p class="apellido_piloto_resultados">${piloto.apellido}</p>
                        </div>
                        <div class="segundo_renglon fuente_f1_bold">
                            <img src="${piloto.img_escuderia}" alt="">
                            <div>
                                <p class="num">${piloto.puntos}</p>
                                <p class="pts">PTS</p>
                            </div>
                        </div>
                    </div>`
            break;
        case 3:
            podio_p3.innerHTML = `
            <div class="fondo_del_piloto fuente_f1_bold">
                        <img src="${piloto.img_piloto}" alt="" class="imagen_podios">
                        <img src="../assets/img/bronce.png" alt="" class="copa">

                        <div class="nombre_piloto">
                            <p>3°</p>
                            <p class="apellido_piloto_resultados">${piloto.apellido}</p>
                        </div>
                        <div class="segundo_renglon fuente_f1_bold">
                            <img src="${piloto.img_escuderia}" alt="">
                            <div>
                                <p class="num">${piloto.puntos}</p>
                                <p class="pts">PTS</p>
                            </div>
                        </div>
                    </div>`
            break;
    }
}


function insertarPilotoEnTabla(piloto, posicion) {
    contenedor_demas_pilotos.innerHTML += `
    <a href="#" class="otro_piloto piloto_de_resultados">
                    <div class="div1 fuente_f1_bold">
                        <p>${posicion}°</p>
                        <p class="apellido_piloto_resultados">${piloto.apellido}</p>
                    </div>

                    <div class="div2">
                        <img src="${piloto.img_piloto}" alt="" class="piloto_chiquito">
                        <span class="${piloto.color}">.</span>
                        <img src="${piloto.img_escuderia}" alt="" class="logo_team_chiquito">
                    </div>

                    <div class="puntos fuente_f1_bold">
                        <p class="num">${piloto.puntos}</p>
                        <p class="pts">PTS</p>
                    </div>
                </a>`;
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------   FIN  Campeonato Pilotos      ----------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/






window.addEventListener("DOMContentLoaded", ()=>{
    const pilotosDeResultados = document.querySelectorAll(".piloto_de_resultados")
    // console.log(pilotosDeResultados)

    pilotosDeResultados.forEach((piloto)=>{
        piloto.addEventListener("click", (e)=>{
            e.preventDefault();

            let primerasTresLetrasDelApellido = piloto.querySelector(".apellido_piloto_resultados").textContent.substring(0, 3);

            if (primerasTresLetrasDelApellido === "GUA") { // este va pq el piloto es de China y ponen el nombre en vez del apellido
                primerasTresLetrasDelApellido = "ZHO";
            }
                
            console.log(primerasTresLetrasDelApellido)
            localStorage.setItem("pilotoClickeado", primerasTresLetrasDelApellido)
            window.location.href = "pilotoEspecifico.html";
        })
    })
})


