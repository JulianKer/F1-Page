let equipos = [
    {
        "id":'redbull',

        "nombre":'Red Bull Racing',
        "logo":'../assets/img/equipos/imgs/red-bull/red bull.avif',
        "nombreCompleto":'Oracle Red Bull Racing',
        "base":'Milton Keynes, United Kingdom',
        "jefe":'Christian Horner',
        "jefeTecnico":'Pierre Waché',
        "chasis":'RB20',
        "unidadPotencia":'onda RBPT',
        "aparicion":'1997',
        "campeonatos":'6',
        "poles":'103',
        "vueltasRapidas":'97',
        "piloto1":[
            {
                "idPiloto":'ver',
                "img":'../assets/img/equipos/pilotos/ver.avif',
                "num":'1',
                "nombre":'Max Verstappen',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'per',
                "img":'../assets/img/equipos/pilotos/per.avif',
                "num":'11',
                "nombre":'Sergio Perez',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/red-bull/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/red-bull/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/red-bull/ft3.avif'},
        ],
    },
    {
        "id":'ferrari',

        "nombre":'Ferrari',
        "logo":'../assets/img/equipos/imgs/ferrari/ferrari.avif',
        "nombreCompleto":'Scuderia Ferrari',
        "base":'Maranello, Italy',
        "jefe":'Frédéric Vasseur',
        "jefeTecnico":'Enrico Cardile / Enrico Gualtieri',
        "chasis":'SF-24',
        "unidadPotencia":'Ferrari',
        "aparicion":'1950',
        "campeonatos":'16',
        "poles":'250',
        "vueltasRapidas":'261',
        "piloto1":[
            {
                "idPiloto":'lec',
                "img":'../assets/img/equipos/pilotos/lec.avif',
                "num":'16',
                "nombre":'Charles Leclerc',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'sai',
                "img":'../assets/img/equipos/pilotos/sai.avif',
                "num":'55',
                "nombre":'Carlos Sainz',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/ferrari/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/ferrari/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/ferrari/ft3.avif'},
        ],
    },
    {
        "id":'mclaren',

        "nombre":'McLaren',
        "logo":'../assets/img/equipos/imgs/mclaren/mclaren.avif',
        "nombreCompleto":'McLaren Formula 1 Team',
        "base":'Woking, United Kingdom',
        "jefe":'Andrea Stella',
        "jefeTecnico":'Peter Prodromou / Neil Houldey',
        "chasis":'MCL38',
        "unidadPotencia":'Mercedes',
        "aparicion":'1966',
        "campeonatos":'8',
        "poles":'157',
        "vueltasRapidas":'166',
        "piloto1":[
            {
                "idPiloto":'nor',
                "img":'../assets/img/equipos/pilotos/nor.avif',
                "num":'4',
                "nombre":'Lando Norris',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'pia',
                "img":'../assets/img/equipos/pilotos/pia.avif',
                "num":'81',
                "nombre":'Oscar Piastri',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/mclaren/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/mclaren/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/mclaren/ft3.avif'},
        ],
    },
    {
        "id":'mercedes',

        "nombre":'Mercedes',
        "logo":'../assets/img/equipos/imgs/mercedes/mercedes.avif',
        "nombreCompleto":'Mercedes-AMG PETRONAS F1 Team',
        "base":'Brackley, United Kingdom',
        "jefe":'Toto Wolff',
        "jefeTecnico":'James Allison',
        "chasis":'W15',
        "unidadPotencia":'Mercedes',
        "aparicion":'197',
        "campeonatos":'8',
        "poles":'130',
        "vueltasRapidas":'99',
        "piloto1":[
            {
                "idPiloto":'ham',
                "img":'../assets/img/equipos/pilotos/ham.avif',
                "num":'44',
                "nombre":'Lewis Hamilton',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'rus',
                "img":'../assets/img/equipos/pilotos/rus.avif',
                "num":'63',
                "nombre":'George russel',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/mercedes/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/mercedes/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/mercedes/ft3.avif'},
        ],
    },
    {
        "id":'astonMartin',

        "nombre":'Aston Martin',
        "logo":'../assets/img/equipos/imgs/aston-martin/aston-martin.avif',
        "nombreCompleto":'Aston Martin Aramco F1 Team',
        "base":'Silverstone, United Kingdom',
        "jefe":'Mike Krack',
        "jefeTecnico":'Dan Fallows',
        "chasis":'AMR24',
        "unidadPotencia":'Mercedes',
        "aparicion":'2018',
        "campeonatos":'0',
        "poles":'1',
        "vueltasRapidas":'2',
        "piloto1":[
            {
                "idPiloto":'alo',
                "img":'../assets/img/equipos/pilotos/alo.avif',
                "num":'14',
                "nombre":'Fernando Alonso',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'str',
                "img":'../assets/img/equipos/pilotos/str.avif',
                "num":'18',
                "nombre":'Lance Stroll',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/aston-martin/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/aston-martin/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/aston-martin/ft3.avif'},
        ],
    },
    {
        "id":'rb',

        "nombre":'RB',
        "logo":'../assets/img/equipos/imgs/rb/rb.avif',
        "nombreCompleto":'Visa Cash App RB Formula One Team',
        "base":'Faenza, Italy',
        "jefe":'Laurent Mekies',
        "jefeTecnico":'Jody Egginton',
        "chasis":'VCARB 01',
        "unidadPotencia":'Honda RBPT',
        "aparicion":'1985',
        "campeonatos":'0',
        "poles":'1',
        "vueltasRapidas":'3',
        "piloto1":[
            {
                "idPiloto":'tsu',
                "img":'../assets/img/equipos/pilotos/tsu.avif',
                "num":'22',
                "nombre":'Yuki Tsunoda',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'ric',
                "img":'../assets/img/equipos/pilotos/ric.avif',
                "num":'3',
                "nombre":'Daniel Ricciardo',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/rb/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/rb/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/rb/ft3.avif'},
        ],
    },
    {
        "id":'haas',

        "nombre":'Haas',
        "logo":'../assets/img/equipos/imgs/haas/haas.avif',
        "nombreCompleto":'MoneyGram Haas F1 Team',
        "base":'Kannapolis, United States',
        "jefe":'Ayao Komatsu',
        "jefeTecnico":'Andrea De Zordo',
        "chasis":'VF-24',
        "unidadPotencia":'Ferrari',
        "aparicion":'2016',
        "campeonatos":'0',
        "poles":'1',
        "vueltasRapidas":'2',
        "piloto1":[
            {
                "idPiloto":'hul',
                "img":'../assets/img/equipos/pilotos/hul.avif',
                "num":'27',
                "nombre":'Nico Hulkenberg',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'mag',
                "img":'../assets/img/equipos/pilotos/mag.avif',
                "num":'20',
                "nombre":'Kevin Magnussen',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/haas/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/haas/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/haas/ft3.avif'},
        ],
    },
    {
        "id":'alpine',

        "nombre":'Alpine',
        "logo":'../assets/img/equipos/imgs/alpine/alpine.avif',
        "nombreCompleto":'BWT Alpine F1 Team',
        "base":'Enstone, United Kingdom',
        "jefe":'Bruno Famin',
        "jefeTecnico":'David Sanchez',
        "chasis":'A524',
        "unidadPotencia":'Renault',
        "aparicion":'1986',
        "campeonatos":'2',
        "poles":'20',
        "vueltasRapidas":'15',
        "piloto1":[
            {
                "idPiloto":'gas',
                "img":'../assets/img/equipos/pilotos/gas.avif',
                "num":'10',
                "nombre":'Pierre Gasly',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'oco',
                "img":'../assets/img/equipos/pilotos/oco.avif',
                "num":'31',
                "nombre":'Esteban Ocon',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/alpine/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/alpine/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/alpine/ft3.avif'},
        ],
    },
    {
        "id":'williams',

        "nombre":'Williams',
        "logo":'../assets/img/equipos/imgs/williams/williams.avif',
        "nombreCompleto":'Williams Racing',
        "base":'Grove, United Kingdom',
        "jefe":'James Vowles',
        "jefeTecnico":'Pat Fry',
        "chasis":'FW46',
        "unidadPotencia":'Mercedes',
        "aparicion":'1978',
        "campeonatos":'9',
        "poles":'128',
        "vueltasRapidas":'133',
        "piloto1":[
            {
                "idPiloto":'alb',
                "img":'../assets/img/equipos/pilotos/alb.avif',
                "num":'23',
                "nombre":'Alex Albon',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'sar',
                "img":'../assets/img/equipos/pilotos/sar.avif',
                "num":'2',
                "nombre":'Logan Sargeant',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/williams/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/williams/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/williams/ft3.avif'},
        ],
    },
    {
        "id":'kickSauber',

        "nombre":'Kick Sauber',
        "logo":'../assets/img/equipos/imgs/kick-sauber/kick sauber.avif',
        "nombreCompleto":'Stake F1 Team Kick Sauber',
        "base":'Hinwil, Switzerland',
        "jefe":'Alessandro Alunni Bravi',
        "jefeTecnico":'James Key',
        "chasis":'C44',
        "unidadPotencia":'Ferrari',
        "aparicion":'1993',
        "campeonatos":'0',
        "poles":'1',
        "vueltasRapidas":'7',
        "piloto1":[
            {
                "idPiloto":'bot',
                "img":'../assets/img/equipos/pilotos/bot.avif',
                "num":'77',
                "nombre":'Valtteri Bottas',
            }
        ],
        "piloto2":[
            {
                "idPiloto":'zho',
                "img":'../assets/img/equipos/pilotos/zho.avif',
                "num":'24',
                "nombre":'Guanyu Zhou',
            }
        ],
        "fotos":[
            {"img":'../assets/img/equipos/imgs/kick-sauber/ft1.avif'},
            {"img":'../assets/img/equipos/imgs/kick-sauber/ft2.avif'},
            {"img":'../assets/img/equipos/imgs/kick-sauber/ft3.avif'},
        ],
    },
]



let num_img_actual = 0; 
let imgs = [
    {"img":'../assets/img/equipos/imgs/red-bull/ft1.avif'},
    {"img":'../assets/img/equipos/imgs/red-bull/ft2.avif'},
    {"img":'../assets/img/equipos/imgs/red-bull/ft3.avif'},
]

window.addEventListener("DOMContentLoaded", ()=>{
    let equipo_elegido = buscarEquipoPorId(localStorage.getItem("id_equipo_clickeado"));
    console.log(equipo_elegido)
    insertarEquipoEspecífico(equipo_elegido);



    // --------------- esto de aca es para el slider de imgs -----------------------------------------------------------------
    let flechaDer = document.querySelector(".flecha_der")
    let flechaIzq = document.querySelector(".flecha_izq")
    let img_a_cambiar = document.getElementById("img_a_cambiar");
    let contador_de_imgs = document.querySelector(".contador")
    num_img_actual = 0; 

    flechaIzq.addEventListener("click", ()=>{
        if (num_img_actual === 0) {
            num_img_actual = 2
            contador_de_imgs.textContent = "3/3"
        }else{
            contador_de_imgs.textContent = num_img_actual + "/3"
            num_img_actual--;
        }
        img_a_cambiar.src = equipo_elegido.fotos[num_img_actual].img;
        
    });

    flechaDer.addEventListener("click", ()=>{
        if (num_img_actual === 2) {
            num_img_actual = 0;
            contador_de_imgs.textContent = "1/3"
        }else{
            num_img_actual++
            contador_de_imgs.textContent = (num_img_actual+1) + "/3"
        }
        img_a_cambiar.src = equipo_elegido.fotos[num_img_actual].img;
    })
    // --------------------------------------------------------------------------------------------------------------------
})


function buscarEquipoPorId(idABuscar) {
    let equipoEncontrado = null;

    equipos.forEach((e)=>{
        if (e.id === idABuscar) {
            equipoEncontrado = e;
        }
    })
    return equipoEncontrado
}

function insertarEquipoEspecífico(equipo_elegido) {
    let main = document.querySelector(".main")
    document.title = `Equipo ${equipo_elegido.nombre} | F1`;
    
            main.innerHTML = `
            <h3 class="titulo_del_equipo fuente_f1_reg">${equipo_elegido.nombre}</h3>
        <section class="contenedor_de_sectores">
            <section class="sector1">
                <div class="logo_equipo">
                    <img src="${equipo_elegido.logo}" alt="img_logo_equipo">
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Nombre completo</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.nombreCompleto}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Base</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.base}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Jefe de equipo</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.jefe}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Jefe técnico de equipo</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.jefeTecnico}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Chasis</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.chasis}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Unidad de potencia</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.unidadPotencia}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Primer aparición</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.aparicion}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Campeonatos mundiales</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.campeonatos}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Posiciones de pole</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.poles}</p>
                </div>
                <div class="renglones_de_info">
                    <p class="estadistica fuente_f1_bold">Vueltas rápidas</p>
                    <p class="valor_estadistica fuente_tw_regular">${equipo_elegido.vueltasRapidas}</p>
                </div>
    
            </section>
            <section class="sector2">
                <a href="#" class="piloto1">
                    <img src="${equipo_elegido.piloto1[0].img}" alt="img_piloto">
                    <div class="datos_piloto">
                        <p class="numero fuente_f1_bold">${equipo_elegido.piloto1[0].num}</p>
                        <p class="nombre fuente_f1_reg">${equipo_elegido.piloto1[0].nombre}</p>
                        <p class="nombre_del_equipo fuente_tw_regular">${equipo_elegido.nombre}</p>
                    </div>
                </a>
                <a href="#" class="piloto2">
                    <img src="${equipo_elegido.piloto2[0].img}" alt="img_piloto">
                    <div class="datos_piloto">
                        <p class="numero fuente_f1_bold">${equipo_elegido.piloto2[0].num}</p>
                        <p class="nombre fuente_f1_reg">${equipo_elegido.piloto2[0].nombre}</p>
                        <p class="nombre_del_equipo fuente_tw_regular">${equipo_elegido.nombre}</p>
                    </div>
                </a>
            </section>
        </section>
    
        <section class="galeria">
            <img src="${equipo_elegido.fotos[0].img}" alt="" id="img_a_cambiar">
            <button class="flecha_izq"><</button>
            <button class="flecha_der">></button>
            <div class="contador_fotos fuente_tw_regular">
                <img src="../assets/img/camara_de_fotos.png" alt="photo camera">
                <p class="contador">1/3</p>
            </div>
        </section>`
    }





    
    window.addEventListener("DOMContentLoaded", ()=>{
        const piloto1 = document.querySelector(".piloto1");
        const piloto2 = document.querySelector(".piloto2");
        console.log(piloto1)
        console.log(piloto2)

        piloto1.addEventListener("click",(e)=>{
            e.preventDefault();

            let nombreYApellido = piloto1.querySelector(".nombre");
            // como el apelldio esta con el nombre, primero separo el string con el espacio y selecciono la posicion 2 del array (osea la 1)
            // y de ahi le hago el substring y lo paso a mayuscula pq estaba con camelcase
            let primerasTresLetrasDelApellid = nombreYApellido.textContent.split(" ")[1].substring(0, 3).toUpperCase();

            localStorage.setItem("pilotoClickeado", primerasTresLetrasDelApellid)
            window.location.href = "pilotoEspecifico.html";
        })

        piloto2.addEventListener("click",(e)=>{
            e.preventDefault();

            let nombreYApellido = piloto2.querySelector(".nombre");
            // como el apelldio esta con el nombre, primero separo el string con el espacio y selecciono la posicion 2 del array (osea la 1)
            // y de ahi le hago el substring
            let primerasTresLetrasDelApellid = nombreYApellido.textContent.split(" ")[1].substring(0, 3).toUpperCase();

            localStorage.setItem("pilotoClickeado", primerasTresLetrasDelApellid)
            window.location.href = "pilotoEspecifico.html";
        })
    })
    