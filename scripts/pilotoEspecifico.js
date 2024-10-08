var apellidoRecibido = localStorage.getItem("pilotoClickeado");
console.log(apellidoRecibido);

const misPilotosDePilotoEspecifico = [
    {
        "imgPiloto":'../assets/img/equipos/pilotos/ver.avif',
        "numeroPiloto":'1',
        "nombreCompleto":'Max Verstappen',
        "imgHelmet":'../assets/img/helmets/ver.avif',

        "equipo":'Red Bull Racing',
        "pais":'Paises Bajos',
        "bandera":'../assets/img/country _flags/paises_bajos.png',
        "podios":'107',
        "puntosTotales":'2841.5',
        "gpsJugados":'197',
        "campeonatosMundiales":'3',
        "mejorResultadoEnCarrera":'1 (x61)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'30/09/1997',
        "lugarNacimiento":'Hasselt, Belgium',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/nor.avif',
        "numeroPiloto":'4',
        "nombreCompleto":'Lando Norris',
        "imgHelmet":'../assets/img/helmets/nor.avif',

        "equipo":'McLaren',
        "pais":'Reino Unido',
        "bandera":'../assets/img/country _flags/gran_bretaña.png',
        "podios":'20',
        "puntosTotales":'804',
        "gpsJugados":'116',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x1)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'13/11/1999',
        "lugarNacimiento":'Bristol, England',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/lec.avif',
        "numeroPiloto":'16',
        "nombreCompleto":'Charles Leclerc',
        "imgHelmet":'../assets/img/helmets/lec.avif',

        "equipo":'Ferrari',
        "pais":'Monaco',
        "bandera":'../assets/img/country _flags/monaco.png',
        "podios":'35',
        "puntosTotales":'1224',
        "gpsJugados":'137',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x6)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'16/10/1997',
        "lugarNacimiento":'Monte Carlo, Monaco',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/sai.avif',
        "numeroPiloto":'55',
        "nombreCompleto":'Carlos Sainz',
        "imgHelmet":'../assets/img/helmets/sai.avif',

        "equipo":'Ferrari',
        "pais":'España',
        "bandera":'../assets/img/country _flags/spain.png',
        "podios":'23',
        "puntosTotales":'1128.5',
        "gpsJugados":'196',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x3)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'01/09/1994',
        "lugarNacimiento":'Madrid, España',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/pia.avif',
        "numeroPiloto":'81',
        "nombreCompleto":'Oscar Piastri',
        "imgHelmet":'../assets/img/helmets/pia.avif',

        "equipo":'McLaren',
        "pais":'Australia',
        "bandera":'../assets/img/country _flags/australia.png',
        "podios":'4',
        "puntosTotales":'221',
        "gpsJugados":'34',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'2 (x3)',
        "parrillaMasAlta":'2',
        "fehcaNacimiento":'06/04/2001',
        "lugarNacimiento":'Melbourne, Victoria',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/per.avif',
        "numeroPiloto":'11',
        "nombreCompleto":'Sergio Perez',
        "imgHelmet":'../assets/img/helmets/per.avif',

        "equipo":'Red Bull Racing',
        "pais":'Mexico',
        "bandera":'../assets/img/country _flags/mexico.png',
        "podios":'39',
        "puntosTotales":'1604',
        "gpsJugados":'270',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x6)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'26/01/1990',
        "lugarNacimiento":'Guadalajara, Mexico',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/rus.avif',
        "numeroPiloto":'63',
        "nombreCompleto":'George Russell',
        "imgHelmet":'../assets/img/helmets/rus.avif',

        "equipo":'Mercedes',
        "pais":'Reino Unido',
        "bandera":'../assets/img/country _flags/gran_bretaña.png',
        "podios":'13',
        "puntosTotales":'580',
        "gpsJugados":'116',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x2)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'15/02/1998',
        "lugarNacimiento":'King`s Lynn, England',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/ham.avif',
        "numeroPiloto":'44',
        "nombreCompleto":'Lewis Hamilton',
        "imgHelmet":'../assets/img/helmets/ham.avif',

        "equipo":'Mercedes',
        "pais":'Reino Unido',
        "bandera":'../assets/img/country _flags/gran_bretaña.png',
        "podios":'199',
        "puntosTotales":'4749.5',
        "gpsJugados":'344',
        "campeonatosMundiales":'7',
        "mejorResultadoEnCarrera":'1 (x104)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'07/01/1985',
        "lugarNacimiento":'Stevenage, England',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/alo.avif',
        "numeroPiloto":'14',
        "nombreCompleto":'Fernando Alonso',
        "imgHelmet":'../assets/img/helmets/alo.avif',

        "equipo":'Aston Martin',
        "pais":'España',
        "bandera":'../assets/img/country _flags/spain.png',
        "podios":'106',
        "puntosTotales":'2312',
        "gpsJugados":'392',
        "campeonatosMundiales":'2',
        "mejorResultadoEnCarrera":'1 (x32)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'27/07/1981',
        "lugarNacimiento":'Oviedo, España',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/str.avif',
        "numeroPiloto":'18',
        "nombreCompleto":'Lance Stroll',
        "imgHelmet":'../assets/img/helmets/str.avif',

        "equipo":'Aston Martin',
        "pais":'Canada',
        "bandera":'../assets/img/country _flags/canada.png',
        "podios":'3',
        "puntosTotales":'291',
        "gpsJugados":'155',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'3 (X3)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'29/10/1998',
        "lugarNacimiento":'Montreal, Canada',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/hul.avif',
        "numeroPiloto":'27',
        "nombreCompleto":'Nico Hulkenberg',
        "imgHelmet":'../assets/img/helmets/hul.avif',

        "equipo":'Haas',
        "pais":'Alemania',
        "bandera":'../assets/img/country _flags/alemania.png',
        "podios":'0',
        "puntosTotales":'552',
        "gpsJugados":'218',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'4 (x3)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'19/08/1987',
        "lugarNacimiento":'Emmerich am Rhein, Alemania',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/tsu.avif',
        "numeroPiloto":'22',
        "nombreCompleto":'Yuki Tsunoda',
        "imgHelmet":'../assets/img/helmets/tsu.avif',

        "equipo":'RB',
        "pais":'Japan',
        "bandera":'../assets/img/country _flags/japan.png',
        "podios":'0',
        "puntosTotales":'81',
        "gpsJugados":'78',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'4 (x1)',
        "parrillaMasAlta":'6',
        "fehcaNacimiento":'11/05/2000',
        "lugarNacimiento":'Sagamihara, Japan',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/ric.avif',
        "numeroPiloto":'3',
        "nombreCompleto":'Daniel Ricciardo',
        "imgHelmet":'../assets/img/helmets/ric.avif',

        "equipo":'RB',
        "pais":'Australia',
        "bandera":'../assets/img/country _flags/australia.png',
        "podios":'32',
        "puntosTotales":'1328',
        "gpsJugados":'251',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x8)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'01/07/1989',
        "lugarNacimiento":'Perth, Australia',
    },
    {
        "imgPiloto":'../assets/img/img_pilotos/bea.png',
        "numeroPiloto":'50',
        "nombreCompleto":'Oliver Bearman',
        "imgHelmet":'../assets/img/helmets/lec.avif',

        "equipo":'Ferrari',
        "pais":'Reino Unido',
        "bandera":'../assets/img/country _flags/gran_bretaña.png',
        "podios":'0',
        "puntosTotales":'6',
        "gpsJugados":'1',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'7 (x1)',
        "parrillaMasAlta":'11',
        "fehcaNacimiento":'08/05/2005',
        "lugarNacimiento":'Chelmsford, England',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/gas.avif',
        "numeroPiloto":'10',
        "nombreCompleto":'Pierre Gasly',
        "imgHelmet":'../assets/img/helmets/gas.avif',

        "equipo":'Alpine',
        "pais":'France',
        "bandera":'../assets/img/country _flags/francia.png',
        "podios":'4',
        "puntosTotales":'400',
        "gpsJugados":'142',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x1)',
        "parrillaMasAlta":'2',
        "fehcaNacimiento":'07/02/1996',
        "lugarNacimiento":'Rouen, Francia',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/mag.avif',
        "numeroPiloto":'20',
        "nombreCompleto":'Kevin Magnussen',
        "imgHelmet":'../assets/img/helmets/mag.avif',

        "equipo":'Haas',
        "pais":'Dinamarca',
        "bandera":'../assets/img/country _flags/dinamarca.png',
        "podios":'1',
        "puntosTotales":'191',
        "gpsJugados":'176',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'2 (x1)',
        "parrillaMasAlta":'4',
        "fehcaNacimiento":'05/10/1992',
        "lugarNacimiento":'Roskilde, Dinamarca',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/alb.avif',
        "numeroPiloto":'23',
        "nombreCompleto":'Alexander Albon',
        "imgHelmet":'../assets/img/helmets/alb.avif',

        "equipo":'Williams',
        "pais":'Thailandia',
        "bandera":'../assets/img/country _flags/tailandia.png',
        "podios":'2',
        "puntosTotales":'232',
        "gpsJugados":'93',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'3 (x2)',
        "parrillaMasAlta":'4',
        "fehcaNacimiento":'23/03/1996',
        "lugarNacimiento":'London, England',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/oco.avif',
        "numeroPiloto":'31',
        "nombreCompleto":'Esteban Ocon',
        "imgHelmet":'../assets/img/helmets/oco.avif',

        "equipo":'Alpine',
        "pais":'Francia',
        "bandera":'../assets/img/country _flags/francia.png',
        "podios":'3',
        "puntosTotales":'425',
        "gpsJugados":'145',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x1)',
        "parrillaMasAlta":'3',
        "fehcaNacimiento":'17/09/1996',
        "lugarNacimiento":'Évreux, Normandia',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/zho.avif',
        "numeroPiloto":'24',
        "nombreCompleto":'Zhou Guanyu',
        "imgHelmet":'../assets/img/helmets/zho.avif',

        "equipo":'Kick Sauber',
        "pais":'China',
        "bandera":'../assets/img/country _flags/china.png',
        "podios":'0',
        "puntosTotales":'12',
        "gpsJugados":'56',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'8 (x1)',
        "parrillaMasAlta":'5',
        "fehcaNacimiento":'30/05/1999',
        "lugarNacimiento":'Shangai, China',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/sar.avif',
        "numeroPiloto":'2',
        "nombreCompleto":'Logan Sargeant',
        "imgHelmet":'../assets/img/helmets/sar.avif',

        "equipo":'Williams',
        "pais":'Estados Unidos',
        "bandera":'../assets/img/country _flags/eeuu.png',
        "podios":'0',
        "puntosTotales":'1',
        "gpsJugados":'33',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'10 (x1)',
        "parrillaMasAlta":'6',
        "fehcaNacimiento":'31/12/2000',
        "lugarNacimiento":'Fort Lauderdale, Florida',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/bot.avif',
        "numeroPiloto":'77',
        "nombreCompleto":'Valtteri Bottas',
        "imgHelmet":'../assets/img/helmets/bot.avif',

        "equipo":'Kick Sauber',
        "pais":'Finlandia',
        "bandera":'../assets/img/country _flags/finlandia.png',
        "podios":'67',
        "puntosTotales":'1797',
        "gpsJugados":'234',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'1 (x10)',
        "parrillaMasAlta":'1',
        "fehcaNacimiento":'28/08/1989',
        "lugarNacimiento":'Nastola, Finlandia',
    },
    {
        "imgPiloto":'../assets/img/equipos/pilotos/col.avif',
        "numeroPiloto":'43',
        "nombreCompleto":'Franco Colapinto',
        "imgHelmet":'../assets/img/helmets/.avif',

        "equipo":'Williams',
        "pais":'Argentina',
        "bandera":'../assets/img/country _flags/argentina.png',
        "podios":'0',
        "puntosTotales":'0',
        "gpsJugados":'0',
        "campeonatosMundiales":'0',
        "mejorResultadoEnCarrera":'0 (x0)',
        "parrillaMasAlta":'0',
        "fehcaNacimiento":'27/05/2003',
        "lugarNacimiento":'Buenos Aires, Argentina',
    },
    
]


const main = document.querySelector(".main");

misPilotosDePilotoEspecifico.forEach((p)=>{

    let apellidoDeTresLetras = p.nombreCompleto.split(" ")[1].substring(0,3).toUpperCase();

    if (apellidoDeTresLetras === "GUA") {
        apellidoDeTresLetras = "ZHO";
    }

    if (apellidoDeTresLetras === apellidoRecibido) {
        document.title = p.nombreCompleto + " | F1";

        main.innerHTML = `<section class="primer_seccion">
            <div class="contenedor_imagen_piloto">
                <img src="${p.imgPiloto}" alt="img_piloto">
            </div>

            <div class="contenedor_num_bandera_nombre">
                <div class="contenedor_num_bandera">
                    <p class="numero fuente_f1_reg">${p.numeroPiloto}</p>
                    <img src="${p.bandera}" alt="bandera_pais">
                </div>
                <p class="nombre_del_piloto fuente_f1_bold">${p.nombreCompleto}</p>
            </div>
        </section>




        <section class="segunda_seccion">
            <img src="${p.imgHelmet}" alt="img_casco_piloto">
            <section class="contenedor_general_datos">
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Equipo</p>
                    <p class="dato fuente_tw_regular">${p.equipo}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Pais</p>
                    <p class="dato fuente_tw_regular">${p.pais}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Podios</p>
                    <p class="dato fuente_tw_regular">${p.podios}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Puntos</p>
                    <p class="dato fuente_tw_regular">${p.puntosTotales}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Grandes Premios en los que participó</p>
                    <p class="dato fuente_tw_regular">${p.gpsJugados}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Campeonatos mundiales</p>
                    <p class="dato fuente_tw_regular">${p.campeonatosMundiales}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Mejor resultado en carrera</p>
                    <p class="dato fuente_tw_regular">${p.mejorResultadoEnCarrera}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Posicíon más alta en la parrilla</p>
                    <p class="dato fuente_tw_regular">${p.parrillaMasAlta}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Fecha de nacimiento</p>
                    <p class="dato fuente_tw_regular">${p.fehcaNacimiento}</p>
                </div>
                <div class="contenedor_cada_dato">
                    <p class="tipo_dato fuente_tw_bold">Lugar de nacimiento</p>
                    <p class="dato fuente_tw_regular">${p.lugarNacimiento}</p>
                </div>
            </section>
        </section>`;




    }



})