
// llamo al contenedor donde van a ir los equipos
let eContenedorEquipos = document.querySelector(".e_contenedor_equipos")

//creo el array con toodos los equipos y las cosas q necesito de c/u
let arrayEquipos = [
    {
        "id":'redbull',
        "name":'Red Bull Racing',
        "logoEquipo":'../assets/img/logos_teams/redbull.png',
        "points": 456,
        "colorRectangulito": 'backgroundRedbull',
        "piloto1": [{
            "nombre":'Max',
            "apellido":'VERSTAPPEN',
            "img":'../assets/img/img_pilotos/ver.png',
        }],
        "piloto2": [{
            "nombre":'Sergio',
            "apellido":'PEREZ',
            "img":'../assets/img/img_pilotos/per.png',
        }],
        "auto":'../assets/img/cars_equipos/red-bull-racing.avif',
        "bordeEquipo":'borde_redbull_piloto',
    },
    {
        "id":'ferrari',

        "name":'Ferrari',
        "logoEquipo":'../assets/img/logos_teams/ferrari.png',
        "points": 425,
        "colorRectangulito": 'backgroundFerrari',
        "piloto1": [{
            "nombre":'Charles',
            "apellido":'LECLERC',
            "img":'../assets/img/img_pilotos/lec.png',
        }],
        "piloto2": [{
            "nombre":'Carlos',
            "apellido":'SAINZ',
            "img":'../assets/img/img_pilotos/sai.png',
        }],
        "auto":'../assets/img/cars_equipos/ferrari.avif',
        "bordeEquipo":'borde_ferrari_piloto',
    },
    {
        "id":'mclaren',

        "name":'McLaren',
        "logoEquipo":'../assets/img/logos_teams/mcLaren.png',
        "points": 476,
        "colorRectangulito": 'backgroundMclaren',
        "piloto1": [{
            "nombre":'Lando',
            "apellido":'NORRIS',
            "img":'../assets/img/img_pilotos/nor.png',
        }],
        "piloto2": [{
            "nombre":'Oscar',
            "apellido":'PIASTRI',
            "img":'../assets/img/img_pilotos/pia.png',
        }],
        "auto":'../assets/img/cars_equipos/mclaren.avif',
        "bordeEquipo":'borde_mclaren_piloto',
    },
    {
        "id":'mercedes',

        "name":'Mercedes',
        "logoEquipo":'../assets/img/logos_teams/mercedes-logo.png',
        "points": 309,
        "colorRectangulito": 'backgroundMercedes',
        "piloto1": [{
            "nombre":'Lewis',
            "apellido":'HAMILTON',
            "img":'../assets/img/img_pilotos/ham.png',
        }],
        "piloto2": [{
            "nombre":'George',
            "apellido":'RUSSEL',
            "img":'../assets/img/img_pilotos/rus.png',
        }],
        "auto":'../assets/img/cars_equipos/mercedes.avif',
        "bordeEquipo":'borde_mercedes_piloto',
    },
    {
        "id":'astonMartin',

        "name":'Aston Martin',
        "logoEquipo":'../assets/img/logos_teams/aston-martin-logo.png',
        "points": 82,
        "colorRectangulito": 'backgroundAston_martin',
        "piloto1": [{
            "nombre":'Fernando',
            "apellido":'ALONSO',
            "img":'../assets/img/img_pilotos/alo.png',
        }],
        "piloto2": [{
            "nombre":'Lance',
            "apellido":'STROLL',
            "img":'../assets/img/img_pilotos/str.png',
        }],
        "auto":'../assets/img/cars_equipos/aston-martin.avif',
        "bordeEquipo":'borde_aston_martin_piloto',
    },
    {
        "id":'rb',

        "name":'RB',
        "logoEquipo":'../assets/img/logos_teams/rb-logo.png',
        "points": 34,
        "colorRectangulito": 'backgroundRb',
        "piloto1": [{
            "nombre":'Yuki',
            "apellido":'TSUNODA',
            "img":'../assets/img/img_pilotos/tsu.png',
        }],
        "piloto2": [{
            "nombre":'Daniel',
            "apellido":'RICCIARDO',
            "img":'../assets/img/img_pilotos/ric.png',
        }],
        "auto":'../assets/img/cars_equipos/rb.avif',
        "bordeEquipo":'borde_rb_piloto',
    },
    {
        "id":'haas',

        "name":'Haas',
        "logoEquipo":'../assets/img/logos_teams/haas-logo.png',
        "points": 29,
        "colorRectangulito": 'backgroundHaas',
        "piloto1": [{
            "nombre":'Nico',
            "apellido":'HULKENBERG',
            "img":'../assets/img/img_pilotos/hul.png',
        }],
        "piloto2": [{
            "nombre":'Kevin',
            "apellido":'MAGNUSSEN',
            "img":'../assets/img/img_pilotos/mag.png',
        }],
        "auto":'../assets/img/cars_equipos/haas.avif',
        "bordeEquipo":'borde_haas_piloto',
    },
    {
        "id":'alpine',

        "name":'Alpine',
        "logoEquipo":'../assets/img/logos_teams/alpine-logo.png',
        "points": 13,
        "colorRectangulito": 'backgroundAlpine',
        "piloto1": [{
            "nombre":'Pierre',
            "apellido":'GASLY',
            "img":'../assets/img/img_pilotos/gas.png',
        }],
        "piloto2": [{
            "nombre":'Esteban',
            "apellido":'OCON',
            "img":'../assets/img/img_pilotos/oco.png',
        }],
        "auto":'../assets/img/cars_equipos/alpine.avif',
        "bordeEquipo":'borde_alpine_piloto',
    },
    {
        "id":'williams',

        "name":'Williams',
        "logoEquipo":'../assets/img/logos_teams/williams-logo.png',
        "points": 16,
        "colorRectangulito": 'backgroundWilliams',
        "piloto1": [{
            "nombre":'Alex',
            "apellido":'ALBON',
            "img":'../assets/img/img_pilotos/alb.png',
        }],
        "piloto2": [{
            "nombre":'Franco',
            "apellido":'COLAPINTO',
            "img":'../assets/img/img_pilotos/col.png',
        }],
        "auto":'../assets/img/cars_equipos/williams.avif',
        "bordeEquipo":'borde_williams_piloto',
    },
    {
        "id":'kickSauber',

        "name":'Kick Sauber',
        "logoEquipo":'../assets/img/logos_teams/kick-sauber-logo.png',
        "points": 0,
        "colorRectangulito": 'backgroundKick_sauber',
        "piloto1": [{
            "nombre":'Valtteri',
            "apellido":'BOTTAS',
            "img":'../assets/img/img_pilotos/bot.png',
        }],
        "piloto2": [{
            "nombre":'Guanyu',
            "apellido":'Zhou',
            "img":'../assets/img/img_pilotos/zho.png',
        }],
        "auto":'../assets/img/cars_equipos/kick-sauber.avif',
        "bordeEquipo":'borde_kick_sauber_piloto',
    },
]


// los oredeno por sus puntos
arrayEquipos.sort((a,b)=> b.points - a.points)


// lo recorro para insertarlos en el contenedor
arrayEquipos.forEach((equipo, index)=>{
    let posicion = index+1;

    eContenedorEquipos.innerHTML += `
            <a href="equipoEspecifico.html" class="e_equipo ${equipo.bordeEquipo}" id="${equipo.id}">
                <section class="reng_1 fuente_f1_bold">
                    <p>${posicion}</p>
                    <div>
                        <p class="num">${equipo.points}</p>
                        <p class="pts">PTS</p>
                    </div>
                </section>

                <section class="reng_2">
                    <p class="fuente_f1_bold"><span class="${equipo.colorRectangulito}">.</span> ${equipo.name}</p>
                    <img src="${equipo.logoEquipo}" alt="">
                </section>

                <section class="reng_3">
                    <div>
                        <p class="fuente_f1_reg">${equipo.piloto1[0].nombre} <span class="fuente_f1_bold">${equipo.piloto1[0].apellido}</span></p>
                        <img src="${equipo.piloto1[0].img}" alt="">
                    </div>
                    <div>
                        <p class="fuente_f1_reg">${equipo.piloto2[0].nombre} <span class="fuente_f1_bold">${equipo.piloto2[0].apellido}</span></p>
                        <img src="${equipo.piloto2[0].img}" alt="">
                    </div>
                </section>

                <section class="reng_4">
                    <img src="${equipo.auto}" alt="">
                </section>
            </a>`
})



// esto envia el id al local storage del equipo que tocaste para dirigirte a 'equipoEspecifico' y mostrarte dicho equipo clickeado
window.addEventListener("DOMContentLoaded", ()=>{
    let equipos = document.querySelectorAll(".e_equipo");
    equipos.forEach((equipo)=>{

        equipo.addEventListener("click", (e)=>{
            e.preventDefault();
            localStorage.setItem("id_equipo_clickeado", equipo.id);
            window.location.href = equipo.href;
        })
    })
})
