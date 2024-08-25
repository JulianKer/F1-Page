

// de todos los pilotos, voy a usar su apellido como id para las etiquetas a que inserte al html, asiq al clickearlas, las paso por
// local storage y hago q mustre la descripcion de cada uno
const arrayDePilotos = [
    {
        "puntos": 295,
        "claseRectangulito":'redbull_piloto',
        "claseBordeEquipo": 'borde_redbull_piloto',
        "nombre": 'Max',
        "apellido": 'VERSTAPPEN',
        "bandera": '../assets/img/country _flags/paises_bajos.png',
        "equipo": 'Redbull Racing',
        "numPiloto": '../assets/img/numeros_pilotos/ver.avif',
        "imgPiloto": '../assets/img/img_pilotos/ver.png',
    },
    {
        "puntos": 139,
        "colorEquipo":'redbull_piloto',
        "claseBordeEquipo": 'borde_redbull_piloto',
        "nombre": 'Sergio',
        "apellido": 'PEREZ',
        "bandera": '../assets/img/country _flags/mexico.png',
        "equipo": 'RedBull Racing',
        "numPiloto": '../assets/img/numeros_pilotos/per.avif',
        "imgPiloto": '../assets/img/img_pilotos/per.png',
    },
    {
        "puntos": 192,
        "claseRectangulito":'ferrari_piloto',
        "claseBordeEquipo": 'borde_ferrari_piloto',
        "nombre": 'Charles',
        "apellido": 'LECLERC',
        "bandera": '../assets/img/country _flags/monaco.png',
        "equipo": 'Ferrari',
        "numPiloto": '../assets/img/numeros_pilotos/lec.avif',
        "imgPiloto": '../assets/img/img_pilotos/lec.png',
    },
    {
        "puntos": 172,
        "claseRectangulito":'ferrari_piloto',
        "claseBordeEquipo": 'borde_ferrari_piloto',
        "nombre": 'Carlos',
        "apellido": 'SAINZ',
        "bandera": '../assets/img/country _flags/spain.png',
        "equipo": 'Ferrari',
        "numPiloto": '../assets/img/numeros_pilotos/sai.avif',
        "imgPiloto": '../assets/img/img_pilotos/sai.png',
    },
    {
        "puntos": 225,
        "claseRectangulito":'mclaren_piloto',
        "claseBordeEquipo": 'borde_mclaren_piloto',
        "nombre": 'Lando',
        "apellido": 'NORRIS',
        "bandera": '../assets/img/country _flags/gran_bretaña.png',
        "equipo": 'McLaren',
        "numPiloto": '../assets/img/numeros_pilotos/nor.avif',
        "imgPiloto": '../assets/img/img_pilotos/nor.png',
    },
    {
        "puntos": 179,
        "claseRectangulito":'mclaren_piloto',
        "claseBordeEquipo": 'borde_mclaren_piloto',
        "nombre": 'Oscar',
        "apellido": 'PIASTRI',
        "bandera": '../assets/img/country _flags/australia.png',
        "equipo": 'McLaren',
        "numPiloto": '../assets/img/numeros_pilotos/pia.avif',
        "imgPiloto": '../assets/img/img_pilotos/pia.png',
    },
    {
        "puntos": 122,
        "claseRectangulito":'mercedes_piloto',
        "claseBordeEquipo": 'borde_mercedes_piloto',
        "nombre": 'George',
        "apellido": 'RUSSELL',
        "bandera": '../assets/img/country _flags/gran_bretaña.png',
        "equipo": 'Mercedes',
        "numPiloto": '../assets/img/numeros_pilotos/rus.avif',
        "imgPiloto": '../assets/img/img_pilotos/rus.png',
    },
    {
        "puntos": 154,
        "claseRectangulito":'mercedes_piloto',
        "claseBordeEquipo": 'borde_mercedes_piloto',
        "nombre": 'Lewis',
        "apellido": 'HAMILTON',
        "bandera": '../assets/img/country _flags/gran_bretaña.png',
        "equipo": 'Mercedes',
        "numPiloto": '../assets/img/numeros_pilotos/ham.avif',
        "imgPiloto": '../assets/img/img_pilotos/ham.png',
    },
    {
        "puntos": 50,
        "claseRectangulito":'aston_martin_piloto',
        "claseBordeEquipo": 'borde_aston_martin_piloto',
        "nombre": 'Fernando',
        "apellido": 'ALONSO',
        "bandera": '../assets/img/country _flags/spain.png',
        "equipo": 'Aston Martin',
        "numPiloto": '../assets/img/numeros_pilotos/alo.avif',
        "imgPiloto": '../assets/img/img_pilotos/alo.png',
    },
    {
        "puntos": 24,
        "claseRectangulito":'aston_martin_piloto',
        "claseBordeEquipo": 'borde_aston_martin_piloto',
        "nombre": 'Lance',
        "apellido": 'STROLL',
        "bandera": '../assets/img/country _flags/canada.png',
        "equipo": 'Aston Martin',
        "numPiloto": '../assets/img/numeros_pilotos/str.avif',
        "imgPiloto": '../assets/img/img_pilotos/str.png',
    },
    {
        "puntos": 22,
        "claseRectangulito":'haas_piloto',
        "claseBordeEquipo": 'borde_haas_piloto',
        "nombre": 'Nico',
        "apellido": 'HULKENBERG',
        "bandera": '../assets/img/country _flags/alemania.png',
        "equipo": 'Haas',
        "numPiloto": '../assets/img/numeros_pilotos/hul.avif',
        "imgPiloto": '../assets/img/img_pilotos/hul.png',
    },
    {
        "puntos": 5,
        "claseRectangulito":'haas_piloto',
        "claseBordeEquipo": 'borde_haas_piloto',
        "nombre": 'Kevin',
        "apellido": 'MAGNUSSEN',
        "bandera": '../assets/img/country _flags/dinamarca.png',
        "equipo": 'HHaas',
        "numPiloto": '../assets/img/numeros_pilotos/mag.avif',
        "imgPiloto": '../assets/img/img_pilotos/mag.png',
    },
    {
        "puntos": 4,
        "claseRectangulito":'williams_piloto',
        "claseBordeEquipo": 'borde_williams_piloto',
        "nombre": 'Alexander',
        "apellido": 'ALBON',
        "bandera": '../assets/img/country _flags/tailandia.png',
        "equipo": 'Williams',
        "numPiloto": '../assets/img/numeros_pilotos/alb.avif',
        "imgPiloto": '../assets/img/img_pilotos/alb.png',
    },
    {
        "puntos": 0,
        "claseRectangulito":'williams_piloto',
        "claseBordeEquipo": 'borde_williams_piloto',
        "nombre": 'Logan',
        "apellido": 'SARGEANT',
        "bandera": '../assets/img/country _flags/eeuu.png',
        "equipo": 'Williams',
        "numPiloto": '../assets/img/numeros_pilotos/sar.avif',
        "imgPiloto": '../assets/img/img_pilotos/sar.png',
    },
    {
        "puntos": 0,
        "claseRectangulito":'kick_sauber_piloto',
        "claseBordeEquipo": 'borde_kick_sauber_piloto',
        "nombre": 'Valtteri',
        "apellido": 'BOTTAS',
        "bandera": '../assets/img/country _flags/finlandia.png',
        "equipo": 'Kick Sauber',
        "numPiloto": '../assets/img/numeros_pilotos/bot.avif',
        "imgPiloto": '../assets/img/img_pilotos/bot.png',
    },
    {
        "puntos": 0,
        "claseRectangulito":'kick_sauber_piloto',
        "claseBordeEquipo": 'borde_kick_sauber_piloto',
        "nombre": 'Zhou',
        "apellido": 'GUANYU',
        "bandera": '../assets/img/country _flags/china.png',
        "equipo": 'Kick Sauber',
        "numPiloto": '../assets/img/numeros_pilotos/zho.avif',
        "imgPiloto": '../assets/img/img_pilotos/zho.png',
    },
    {
        "puntos": 5,
        "claseRectangulito":'alpine_piloto',
        "claseBordeEquipo": 'borde_alpine_piloto',
        "nombre": 'Esteban',
        "apellido": 'OCON',
        "bandera": '../assets/img/country _flags/francia.png',
        "equipo": 'Alpine',
        "numPiloto": '../assets/img/numeros_pilotos/oco.avif',
        "imgPiloto": '../assets/img/img_pilotos/oco.png',
    },
    {
        "puntos": 8,
        "claseRectangulito":'alpine_piloto',
        "claseBordeEquipo": 'borde_alpine_piloto',
        "nombre": 'Pierre',
        "apellido": 'GASLY',
        "bandera": '../assets/img/country _flags/francia.png',
        "equipo": 'Alpine',
        "numPiloto": '../assets/img/numeros_pilotos/gas.avif',
        "imgPiloto": '../assets/img/img_pilotos/gas.png',
    },
    {
        "puntos": 12,
        "claseRectangulito":'rb_piloto',
        "claseBordeEquipo": 'borde_rb_piloto',
        "nombre": 'Daniel',
        "apellido": 'RICCIARDO',
        "bandera": '../assets/img/country _flags/australia.png',
        "equipo": 'RB',
        "numPiloto": '../assets/img/numeros_pilotos/ric.avif',
        "imgPiloto": '../assets/img/img_pilotos/ric.png',
    },
    {
        "puntos": 22,
        "claseRectangulito":'rb_piloto',
        "claseBordeEquipo": 'borde_rb_piloto',
        "nombre": 'Yuki',
        "apellido": 'TSUNODA',
        "bandera": '../assets/img/country _flags/japan.png',
        "equipo": 'RB',
        "numPiloto": '../assets/img/numeros_pilotos/tsu.avif',
        "imgPiloto": '../assets/img/img_pilotos/tsu.png',
    },

    // este es oliver bearman q corrio una carrera pero tiene q estar
    {
        "puntos": 6,
        "claseRectangulito":'ferrari_piloto',
        "claseBordeEquipo": 'borde_ferrari_piloto',
        "nombre": 'Oliver',
        "apellido": 'BEARMAN',
        "bandera": '../assets/img/country _flags/gran_bretaña.png',
        "equipo": 'Ferrari',
        "numPiloto": '../assets/img/numeros_pilotos/bea.avif',
        "imgPiloto": '../assets/img/img_pilotos/bea.png',
    },
]


const contenedorDeTodosLosPilotos = document.getElementById("contenedor_de_todos_los_pilotos");
// console.log(contenedorDeTodosLosPilotos)

arrayDePilotos.sort((a,b) => b.puntos - a.puntos);
// console.log(arrayDePilotos)


arrayDePilotos.forEach((piloto, index)=>{
    let posicion = index+1;

    contenedorDeTodosLosPilotos.innerHTML += `
    <a href="#" class="piloto_por_separado ${piloto.claseBordeEquipo}" id="${piloto.apellido}">
                    <section class="piloto_part1 fuente_f1_bold">
                        <p class="posicion">${posicion}</p>
                        <div class="cont_puntos">
                            <p class="num_pts">${piloto.puntos}</p>
                            <p class="pts">PTS</p>
                        </div>
                    </section>
    
                    <section class="piloto_part2">
                        <p class="color_piloto ${piloto.claseRectangulito}">.</p>
                        <div>
                            <div class="fuente_f1_bold">
                                <p class="piloto_nombre fuente_tw_regular">${piloto.nombre}</p>
                                <p class="piloto_apellido fuente_f1_bold">${piloto.apellido}</p>
                            </div>
                            <img src="${piloto.bandera}" alt="img_pais" class="img_pais">
                        </div>
                    </section>
    
                    <section class="piloto_part3">
                        <p class="fuente_f1_reg">${piloto.equipo}</p>
                        <div>
                            <img class="img_del_num_del_piloto" src="${piloto.numPiloto}" alt="num_piloto">
                            <img class="img_del_piloto" src="${piloto.imgPiloto}" alt="img_piloto">
                        </div>
                    </section>
                </a>`
})





document.addEventListener("DOMContentLoaded", ()=>{
    let pilotos = document.querySelectorAll(".piloto_por_separado");
    // console.log(pilotos)

    pilotos.forEach((piloto)=>{

        piloto.addEventListener("click", (e)=>{
            e.preventDefault();

            let primerasTresLetrasDelApellido = piloto.querySelector(".piloto_apellido").textContent.substring(0, 3);

            if (primerasTresLetrasDelApellido === "GUA") { // este va pq el piloto es de China y ponen el nombre en vez del apellido
                primerasTresLetrasDelApellido = "ZHO";
            }
                
            console.log(primerasTresLetrasDelApellido)
            localStorage.setItem("pilotoClickeado", primerasTresLetrasDelApellido)
            window.location.href = "pilotoEspecifico.html"
        })
    })
});





