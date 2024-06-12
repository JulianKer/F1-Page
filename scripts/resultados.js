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
        "name":'Red Bull Racing',
        "url":'../assets/img/logos_teams/redbull.png',
        "points": 301,
        "color": 'backgroundRedbull',
    },
    {
        "name":'Ferrari',
        "url":'../assets/img/logos_teams/ferrari.png',
        "points": 252,
        "color": 'backgroundFerrari',

    },
    {
        "name":'McLaren',
        "url":'../assets/img/logos_teams/mcLaren.png',
        "points": 212,
        "color": 'backgroundMclaren',

    },
    {
        "name":'Mercedes',
        "url":'../assets/img/logos_teams/mercedes-logo.png',
        "points": 124,
        "color": 'backgroundMercedes',

    },
    {
        "name":'Aston Martin',
        "url":'../assets/img/logos_teams/aston-martin-logo.png',
        "points": 58,
        "color": 'backgroundAston_martin',

    },
    {
        "name":'RB',
        "url":'../assets/img/logos_teams/rb-logo.png',
        "points": 28,
        "color": 'backgroundRb',

    },
    {
        "name":'Haas',
        "url":'../assets/img/logos_teams/haas-logo.png',
        "points": 7,
        "color": 'backgroundHaas',

    },
    {
        "name":'Alpine',
        "url":'../assets/img/logos_teams/alpine-logo.png',
        "points": 5,
        "color": 'backgroundAlpine',

    },
    {
        "name":'Williams',
        "url":'../assets/img/logos_teams/williams-logo.png',
        "points": 2,
        "color": 'backgroundWilliams',

    },
    {
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
    <a href="" class="podio_c">
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
    <a href="" class="demas_equipos">
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