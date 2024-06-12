// llamo a los 3 contenedores, el de carreras pasadas, el de presente y el de carreras futuras
let contenedorCarrerasPasadas = document.getElementById("contenedor_cronogramas");
let contenedorCarreraSiguiente = document.querySelector(".contenedor_carrera_proxima");
let contenedorCarrerasProximas =  document.querySelector(".contenedor_cronograma_carreras_proximas");

//creo 2 arrays para almacenar carreras pasadas, futuras y una variable para almacenar la carrera presente/proxima a ocurrir
let pasadas = [];
let futuras = [];
let presente = "";

// por defecto digo que NO hay carrera presente;
let hayCarreraPresente = false;

// creo mi array con TODAS las carreras de la temporada
let arrayCarreras = [
    {
        "id": 'Bahrain',
        "ronda": '1',
        "dias": '29-02',
        "mes": 'FEB-MAR',
        "banderaPais": '../assets/img/country _flags/bahrain.png',
        "nombreCircuito": 'Bahrain  ',
        "nombreGP": 'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024',
        "p2NombrePiloto": 'PER',
        "p2ImgPiloto": '../assets/img/pilotos_podio/checo.png',
        "p1NombrePiloto": 'VER',
        "p1ImgPiloto": '../assets/img/pilotos_podio/max.png',
        "p3NombrePiloto": 'SAI',
        "p3ImgPiloto": '../assets/img/pilotos_podio/sainz.png',

        "diaInicio": 29,
        "diaFin": 2,
        "mesInicio": 2,
        "mesFin": 3,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/bahrain.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'Saudi_Arabia',
        "ronda": '2',
        "dias": '07-09',
        "mes": 'MAR',
        "banderaPais": '../assets/img/country _flags/saudi_arabia.png',
        "nombreCircuito": 'Saudi Arabia  ',
        "nombreGP": 'FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024',
        "p2NombrePiloto": 'PER',
        "p2ImgPiloto": '../assets/img/pilotos_podio/checo.png',
        "p1NombrePiloto": 'VER',
        "p1ImgPiloto": '../assets/img/pilotos_podio/max.png',
        "p3NombrePiloto": 'LEC',
        "p3ImgPiloto": '../assets/img/pilotos_podio/leclerc.png',

        "diaInicio": 7,
        "diaFin": 9,
        "mesInicio": 3,
        "mesFin": 3,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/arabia_saudita.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'Australia',
        "ronda": '3',
        "dias": '22-24',
        "mes": 'MAR',
        "banderaPais": '../assets/img/country _flags/australia.png',
        "nombreCircuito": 'Australia ',
        "nombreGP": 'FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2024',
        "p2NombrePiloto": 'LEC',
        "p2ImgPiloto": '../assets/img/pilotos_podio/leclerc.png',
        "p1NombrePiloto": 'SAI',
        "p1ImgPiloto": '../assets/img/pilotos_podio/sainz.png',
        "p3NombrePiloto": 'NOR',
        "p3ImgPiloto": '../assets/img/pilotos_podio/norris.png',

        "diaInicio": 22,
        "diaFin": 24,
        "mesInicio": 3,
        "mesFin": 3,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/australia.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'Japan',
        "ronda": '4',
        "dias": '05-07',
        "mes": 'APR',
        "banderaPais": '../assets/img/country _flags/japan.png',
        "nombreCircuito": 'Japan  ',
        "nombreGP": 'FORMULA 1 MSC CRUISES JAPANESE GRAND PRIX 2024',
        "p2NombrePiloto": 'PER',
        "p2ImgPiloto": '../assets/img/pilotos_podio/checo.png',
        "p1NombrePiloto": 'VER',
        "p1ImgPiloto": '../assets/img/pilotos_podio/max.png',
        "p3NombrePiloto": 'SAI',
        "p3ImgPiloto": '../assets/img/pilotos_podio/sainz.png',

        "diaInicio": 5,
        "diaFin": 7,
        "mesInicio": 4,
        "mesFin": 4,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/japon.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'China',
        "ronda": '5',
        "dias": '19-21',
        "mes": 'APR',
        "banderaPais": '../assets/img/country _flags/china.png',
        "nombreCircuito": 'China  ',
        "nombreGP": 'FORMULA 1 LENOVO CHINESE GRAND PRIX 2024',
        "p2NombrePiloto": 'PER',
        "p2ImgPiloto": '../assets/img/pilotos_podio/norris.png',
        "p1NombrePiloto": 'VER',
        "p1ImgPiloto": '../assets/img/pilotos_podio/max.png',
        "p3NombrePiloto": 'PER',
        "p3ImgPiloto": '../assets/img/pilotos_podio/checo.png',

        "diaInicio": 19,
        "diaFin": 21,
        "mesInicio": 4,
        "mesFin": 4,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/china.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'Miami',
        "ronda": '6',
        "dias": '03-05',
        "mes": 'MAY',
        "banderaPais": '../assets/img/country _flags/eeuu.png',
        "nombreCircuito": 'Miami  ',
        "nombreGP": 'FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024',
        "p2NombrePiloto": 'VER',
        "p2ImgPiloto": '../assets/img/pilotos_podio/max.png',
        "p1NombrePiloto": 'NOR',
        "p1ImgPiloto": '../assets/img/pilotos_podio/norris.png',
        "p3NombrePiloto": 'LEC',
        "p3ImgPiloto": '../assets/img/pilotos_podio/leclerc.png',

        "diaInicio": 3,
        "diaFin": 5,
        "mesInicio": 5,
        "mesFin": 5,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/miami.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'Emilia-Romagna',
        "ronda": '7',
        "dias": '17-19',
        "mes": 'MAY',
        "banderaPais": '../assets/img/country _flags/italia.png',
        "nombreCircuito": 'Emilia-Romagna  ',
        "nombreGP": 'FORMULA 1 MSC CRUISES GRAN PREMIO DEL MADE IN ITALY E DELL EMILIA-ROMAGNA 2024',
        "p2NombrePiloto": 'NOR',
        "p2ImgPiloto": '../assets/img/pilotos_podio/norris.png',
        "p1NombrePiloto": 'VER',
        "p1ImgPiloto": '../assets/img/pilotos_podio/max.png',
        "p3NombrePiloto": 'LEC',
        "p3ImgPiloto": '../assets/img/pilotos_podio/leclerc.png',

        "diaInicio": 17,
        "diaFin": 19,
        "mesInicio": 5,
        "mesFin": 5,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/emilia_romagna.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'Monaco',
        "ronda": '8',
        "dias": '24-26',
        "mes": 'MAY',
        "banderaPais": '../assets/img/country _flags/monaco.png',
        "nombreCircuito": 'Mónaco  ',
        "nombreGP": 'FORMULA 1 GRAND PRIX DE MONACO 2024 ',
        "p2NombrePiloto": 'PIA',
        "p2ImgPiloto": '../assets/img/pilotos_podio/piastri.png',
        "p1NombrePiloto": 'LEC',
        "p1ImgPiloto": '../assets/img/pilotos_podio/leclerc.png',
        "p3NombrePiloto": 'SAI',
        "p3ImgPiloto": '../assets/img/pilotos_podio/sainz.png',

        "diaInicio": 24,
        "diaFin": 26,
        "mesInicio": 5,
        "mesFin": 5,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/monaco.png',
        "imagen_circuito": '../assets/img/circuitos/.png'
    },
    {
        "id": 'Canada',
        "ronda": '9',
        "dias": '07-09',
        "mes": 'JUN',
        "banderaPais": '../assets/img/country _flags/canada.png',
        "nombreCircuito": 'Canadá  ',
        "nombreGP": 'FORMULA 1 AWS GRAND PRIX DU CANADÁ 2024 ',
        "p2NombrePiloto": 'NOR',
        "p2ImgPiloto": '../assets/img/pilotos_podio/norris.png',
        "p1NombrePiloto": 'VER',
        "p1ImgPiloto": '../assets/img/pilotos_podio/max.png',
        "p3NombrePiloto": 'RUS',
        "p3ImgPiloto": '../assets/img/pilotos_podio/russell.png',

        "diaInicio": 7,
        "diaFin": 9,
        "mesInicio": 6,
        "mesFin": 6,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/canada.png',
        "imagen_circuito": '../assets/img/circuitos/canada.png'
    },
    {
        "id": 'spain',
        "ronda": '10',
        "dias": '21-23',
        "mes": 'JUN',
        "banderaPais": '../assets/img/country _flags/spain.png',
        "nombreCircuito": 'España  ',
        "nombreGP": 'FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 21,
        "diaFin": 23,
        "mesInicio": 6,
        "mesFin": 6,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/spain.png',
        "imagen_circuito": '../assets/img/circuitos/spain.png'
    },
    {
        "id": 'Austria',
        "ronda": '11',
        "dias": '28-30',
        "mes": 'JUN',
        "banderaPais": '../assets/img/country _flags/austria.png',
        "nombreCircuito": 'Austria  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS AUSTRIAN GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 28,
        "diaFin": 30,
        "mesInicio": 6,
        "mesFin": 6,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/austria.png',
        "imagen_circuito": '../assets/img/circuitos/austria.png'
    },
    {
        "id": 'Gran_Bretaña',
        "ronda": '12',
        "dias": '05-07',
        "mes": 'JUL',
        "banderaPais": '../assets/img/country _flags/gran_bretaña.png',
        "nombreCircuito": 'Gran Bretaña  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 5,
        "diaFin": 7,
        "mesInicio": 7,
        "mesFin": 7,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/gran_bretaña.png',
        "imagen_circuito": '../assets/img/circuitos/gran_bretaña.png'
    },
    {
        "id": 'Hungría',
        "ronda": '13',
        "dias": '19-21',
        "mes": 'JUL',
        "banderaPais": '../assets/img/country _flags/hungria.png',
        "nombreCircuito": 'Hungría  ',
        "nombreGP": 'FORMULA 1 HUNGARIAN GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio":19 ,
        "diaFin": 21,
        "mesInicio":7 ,
        "mesFin": 7,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/hungria.png',
        "imagen_circuito": '../assets/img/circuitos/hungria.png'
    },
    {
        "id": 'Belgica',
        "ronda": '14',
        "dias": '26-28',
        "mes": 'JUL',
        "banderaPais": '../assets/img/country _flags/belgica.png',
        "nombreCircuito": 'Bélgica  ',
        "nombreGP": 'FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 26,
        "diaFin": 28,
        "mesInicio": 7,
        "mesFin": 7,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/belgica.png',
        "imagen_circuito": '../assets/img/circuitos/belgica.png'
    },
    {
        "id": 'Paises_Bajos',
        "ronda": '15',
        "dias": '23-25',
        "mes": 'AGO',
        "banderaPais": '../assets/img/country _flags/paises_bajos.png',
        "nombreCircuito": 'Paises Bajos  ',
        "nombreGP": 'FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 23,
        "diaFin": 25,
        "mesInicio": 8,
        "mesFin": 8,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/paises_bajos.png',
        "imagen_circuito": '../assets/img/circuitos/paises_bajos.png'
    },
    {
        "id": 'Italia',
        "ronda": '16',
        "dias": '30-01',
        "mes": 'AGO-SEP',
        "banderaPais": '../assets/img/country _flags/italia.png',
        "nombreCircuito": 'Italia  ',
        "nombreGP": 'FORMULA 1 PIRELLI GRAN PREMIO D`ITALIA 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 30,
        "diaFin": 1,
        "mesInicio": 8,
        "mesFin": 9,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/italia.png',
        "imagen_circuito": '../assets/img/circuitos/italia.png'
    },
    {
        "id": 'Azerbaiyán',
        "ronda": '17',
        "dias": '13-15',
        "mes": 'SEP',
        "banderaPais": '../assets/img/country _flags/azerbaiyan.png',
        "nombreCircuito": 'Azerbaiyán  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 13,
        "diaFin": 15,
        "mesInicio": 9,
        "mesFin": 9,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/azerbaijan.png',
        "imagen_circuito": '../assets/img/circuitos/azerbaiyan.png'
    },
    {
        "id": 'Singapur',
        "ronda": '18',
        "dias": '20-22',
        "mes": 'SEP',
        "banderaPais": '../assets/img/country _flags/singapur.png',
        "nombreCircuito": 'Singapur  ',
        "nombreGP": 'FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 20,
        "diaFin": 22,
        "mesInicio": 9,
        "mesFin": 9,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/singapur.png',
        "imagen_circuito": '../assets/img/circuitos/singapur.png'
    },
    {
        "id": 'Estados_Unidos',
        "ronda": '19',
        "dias": '18-20',
        "mes": 'OCT',
        "banderaPais": '../assets/img/country _flags/eeuu.png',
        "nombreCircuito": 'Estados Unidos  ',
        "nombreGP": 'FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 18,
        "diaFin": 20,
        "mesInicio": 10,
        "mesFin": 10,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/eeuu.png',
        "imagen_circuito": '../assets/img/circuitos/eeuu.png'
    },
    {
        "id": 'Mexico',
        "ronda": '20',
        "dias": '25-27',
        "mes": 'OCT',
        "banderaPais": '../assets/img/country _flags/mexico.png',
        "nombreCircuito": 'Mexico  ',
        "nombreGP": 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 25,
        "diaFin": 27,
        "mesInicio": 10,
        "mesFin": 10,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/mexico.png',
        "imagen_circuito": '../assets/img/circuitos/mexico.png'
    },
    {
        "id": 'Brasil',
        "ronda": '21',
        "dias": '01-03',
        "mes": 'NOV',
        "banderaPais": '../assets/img/country _flags/brazil.png',
        "nombreCircuito": 'Brasil  ',
        "nombreGP": 'FORMULA 1 LENOVO GRANDE PRÊMIO DE SÃO PAULO 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 1,
        "diaFin": 3,
        "mesInicio": 11,
        "mesFin": 11,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/brazil.png',
        "imagen_circuito": '../assets/img/circuitos/brazil.png'
    },
    {
        "id": 'Las_Vegas',
        "ronda": '22',
        "dias": '21-23',
        "mes": 'nov',
        "banderaPais": '../assets/img/country _flags/eeuu.png',
        "nombreCircuito": 'Las Vegas  ',
        "nombreGP": 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 21,
        "diaFin": 23,
        "mesInicio": 11,
        "mesFin": 11,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/eeuu.png',
        "imagen_circuito": '../assets/img/circuitos/lasvegas.png'
    },
    {
        "id": 'Qatar',
        "ronda": '23',
        "dias": '29-01',
        "mes": 'NOV-DIC',
        "banderaPais": '../assets/img/country _flags/qatar.png',
        "nombreCircuito": 'Qatar  ',
        "nombreGP": 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 29,
        "diaFin": 1,
        "mesInicio": 11,
        "mesFin": 12,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/qatar.png',
        "imagen_circuito": '../assets/img/circuitos/qatar.png'
    },
    {
        "id": 'Abu Dhabi',
        "ronda": '24',
        "dias": '06-08',
        "mes": 'DIC',
        "banderaPais": '../assets/img/country _flags/abu_dhabi.png',
        "nombreCircuito": 'Abu Dhabi  ',
        "nombreGP": 'FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024 ',
        "p2NombrePiloto": '',
        "p2ImgPiloto": '../assets/img/pilotos_podio/',
        "p1NombrePiloto": '',
        "p1ImgPiloto": '../assets/img/pilotos_podio/',
        "p3NombrePiloto": '',
        "p3ImgPiloto": '../assets/img/pilotos_podio/',

        "diaInicio": 6,
        "diaFin": 8,
        "mesInicio": 12,
        "mesFin": 12,
        "imagen_fondo": '../assets/img/fondos_carreras_proximas/abu_dhabi.png',
        "imagen_circuito": '../assets/img/circuitos/abu_dhabi.png'
    }

    // FALTA AGREGAR LAS CARRERAS DESPUES DE ESPAÑA ASI LAS MUESTRA AUTOMATICAMENTE Y PODRIA FIJARME EL TEMA DE LOS HORARIOS 
    // DE LAS P1 P2 P3 Y Q1 Q2 Y Q3 Y RACE YA QUE NO SON IGUALES PARA TODAS PERO BUENO, ES ALGO MENOR
]


//recorro TODAS mis carreras de la temporada
arrayCarreras.forEach((carrera)=>{

    // veo su estado si ya paso, esta pasando o si pasará segun su FECHA comparada a la de HOY
    estado = calcularFechaDeLaCarrera(carrera);

    // segun su estado, elijo un caso
    switch (estado) {
        case "pasada":
            // si pasó, la meto al array de pasadas y la muestro en el contenedor de carreras pasadas
            pasadas.push(carrera);
            insertarCarreraPasada(carrera);
            break;

        case "presente":
            // si esta sucediendo ahora, digo que YA hay una carrera sucediendo en este momento y la muestro en el contenedor de carrera siguiente
            hayCarreraPresente = true;
            insertarCarreraPresente(carrera);
            break;

        case "futura":
            // si todavia NO pasó, la meto al array de futuras y la muestro en el contenedor de carreras futuras
            futuras.push(carrera)
            insertarCarreraFutura(carrera);
            break;
    }
})

//luego de hacer lo que corresponde segun su estado, verifico si hay o NO una carrera presente, en caso de que YA HAYA, NO entro al if
// pero en caso de que SI HAYA, veo que tenga carreras fututras, si hay almenos una, entonces entro al if.
if (hayCarreraPresente === false && futuras.length > 0) {

    //como se que SI hay carreras futuras, elimino la primer carrera futura de su array (porque es la carrera mas proxima)
    // y la guardo en una variable
    let eliminadaDelArrayFuturas = futuras.shift();
    //luego busco en el contenedor de carreras futuras, la carrera con el id que elimine del array
    let carreraAEliminarDelHtml = document.getElementById(eliminadaDelArrayFuturas.id);

    // si la encontré, entro
    if (carreraAEliminarDelHtml != null) {
        // y al contenedor de carreras futuras, le remuevo la primer carrera (q repito, es la mas próxima)
        contenedorCarrerasProximas.removeChild(carreraAEliminarDelHtml);
        // una vez la haya eliminado del contenedor de carreras futuras y de su debido array de futuras, la inserto como carrera presente
        // que YO se que NO ESTÁ sucediendo AHORA, pero es la mas proxima a suceder
        insertarCarreraPresente(eliminadaDelArrayFuturas);
    }

    }

// if (hayCarreraPresente === false && futuras.length > 0) {
//     console.log("Tuve que poner la del FUTURA en PRESENTE");
//     let futuraParaPresente = futuras.shift();
//     insertarCarreraPresente(futuraParaPresente);
//     hayCarreraPresente = true; // Actualiza la variable después de realizar el cambio
// }



function calcularFechaDeLaCarrera(carrera) {
    // creo una bandera para despues devolver el estado en un solo return
    let estado = "";

    // Obtenengo la fecha actual (sin la parte de la hora)
    let ahora = new Date();

    //obtengo el año actual
    anioActual = ahora.getFullYear();

    // Establezco la hora a 00:00:00:000 para comparar solo fechas
    ahora.setHours(0, 0, 0, 0);

    // creo la fecha de inicio del gp con los datos de cada carrera
    let fechaInicio = new Date(anioActual, carrera.mesInicio-1, carrera.diaInicio);
    // creo la fecha de fin del gp con los datos de cada carrera
    let fechaFin = new Date(anioActual, carrera.mesFin-1, carrera.diaFin);

    // console.log('Fecha de inicio: ' + fechaInicio.getDate() + ' ' + fechaInicio.getMonth() + ' ' + fechaInicio.getFullYear());
    // console.log('Fecha de fin: ' + fechaFin.getDate() + ' '  + fechaFin.getMonth() + ' ' + fechaFin.getFullYear());

    // si la fecha actual es MENOR que el inicio del gp, es pq todavia NO PASO, por ende el gp es FUTURO
    if (ahora < fechaInicio) {
        estado = "futura";
    // si la fecha actual es MAYOR o IGUAL que la fecha que inicio el gp y ademas la fecha actual es MENOR o IGUAL a la fecha
    // fin del gp, es porque ESTÁ SUCEDIENDO AHORA el gp, por ende es PRESENTE
    } else if (ahora >= fechaInicio && ahora <= fechaFin) {
        estado = "presente";

    // si NO cumplió ninguna de las anterioires condiciones, es pq la fecha del fin del gp es MENOR a la fecha actual, por ende
    // el gp YA PASÓ, es PASADO
    } else {
        estado = "pasada";
    }

    // devuelvo la bandera del estado
    return estado;
}

function insertarCarreraPasada(carrera){

    // basicamente recibe la carrera a mostrar y la inserta en el contenedor correspondiente rellenando con sus atributos
    contenedorCarrerasPasadas.innerHTML += `
    <a href="#" class="carrera" id="${carrera.id}">
        <h6 class="titulo_rondas fuente_tw_regular">RONDA ${carrera.ronda}</h6>
        <div class="contenedor_dias_mes_img">
            <div class="contenedor_dia_mes">
                <p class="dias fuente_f1_reg">${carrera.dias}</p>
                <p class="mes fuente_tw_regular">${carrera.mes}</p>
            </div>
            <div class="contenedor_imgs">
                <img class="img_country" src="${carrera.banderaPais}" alt="">
                <img class="img_win_flag" src="../assets/img/win_flag.png" alt="">
            </div>
        </div>
        <p class="nombre_circuito fuente_f1_bold">${carrera.nombreCircuito} <span>></span></p>
        <p class="nombre_gp fuente_f1_reg">${carrera.nombreGP}</p>
        <div class="podio">
            <div class="podio_2">
                <img src="${carrera.p2ImgPiloto}" alt="">
                <p class="fuente_tw_bold">2° ${carrera.p2NombrePiloto}</p>
            </div>
            <div class="podio_1">
                <img src="${carrera.p1ImgPiloto}" alt="">
                <p class="fuente_tw_bold">1° ${carrera.p1NombrePiloto}</p>
            </div>
            <div class="podio_3">
                <img src="${carrera.p3ImgPiloto}" alt="">
                <p class="fuente_tw_bold">3° ${carrera.p3NombrePiloto}</p>
            </div>
        </div>
    </a>`
}

function insertarCarreraPresente(carrera) {

    // basicamente recibe la carrera a mostrar y la inserta en el contenedor correspondiente rellenando con sus atributos
    contenedorCarreraSiguiente.innerHTML = `
    <a href="#" class="carrera_proxima" id="${carrera.id}">
                <div class="contenedor_descripcion">
                    <h6 class="titulo_ronda_siguiente fuente_tw_regular">RONDA ${carrera.ronda} - SIGUIENTE</h6>
                    <div class="contenedor_dias_mes_img">
                        <div class="contenedor_dia_mes">
                            <p class="dias fuente_f1_reg">${carrera.dias}</p>
                            <p class="mes fuente_f1_bold">${carrera.mes}</p>
                        </div>
                        <div class="contenedor_imgs">
                            <img class="img_country" src="${carrera.banderaPais}" alt="">
                        </div>
                    </div>
                    <p class="nombre_circuito fuente_f1_bold">${carrera.nombreCircuito} <span>></span></p>
                    <p class="nombre_gp fuente_f1_reg">${carrera.nombreGP}</p>
                    <div class="div_img_circuito">
                        <img src="${carrera.imagen_circuito}" alt="">
                    </div>
                </div>

                <div class="contenedor_img_fondo_carrera_proxima">
                    <div class="horarios fuente_f1_reg">
                        <div class="p1">
                            <p>PRÁCTICA 1</p>
                            <p>VIE</p>
                            <div>13:30 - 14:30</div>
                        </div>
                        <div class="p2">
                            <p>PRÁCTICA 2</p>
                            <p>VIE</p>
                            <div>17:00 - 18:00</div>
                        </div>
                        <div class="p3">
                            <p>PRÁCTICA 3</p>
                            <p>SAB</p>
                            <div>12:30 - 13:30</div>
                        </div>
                        <div class="qualy">
                            <p>CLASIFICACIÓN</p>
                            <p>SAB</p>
                            <div>16:00 - 17:00</div>
                        </div>
                        <div class="race">
                            <p>CARRERA</p>
                            <p>DOM</p>
                            <div>15:00</div>
                        </div>
                    </div>
                    <img src="${carrera.imagen_fondo}" alt="">
                </div>
            </a>`
}

function insertarCarreraFutura(carrera) {
    // basicamente recibe la carrera a mostrar y la inserta en el contenedor correspondiente rellenando con sus atributos
    contenedorCarrerasProximas.innerHTML += `
 <a href="#" class="carrera" id="${carrera.id}">
    <h6 class="titulo_rondas fuente_tw_regular">RONDA ${carrera.ronda}</h6>
    <div class="contenedor_dias_mes_img">
        <div class="contenedor_dia_mes">
            <p class="dias fuente_f1_reg">${carrera.dias}</p>
            <p class="mes fuente_tw_regular">${carrera.mes}</p>
        </div>
        <img class="img_country" src="${carrera.banderaPais}" alt="">
    </div>
    <p class="nombre_circuito fuente_f1_bold">${carrera.nombreCircuito} <span>></span></p>
    <p class="nombre_gp fuente_f1_reg">${carrera.nombreGP}</p>
    <div class="contenedor_circuito_img">
        <img src="${carrera.imagen_circuito}" alt="">
    </div>
</a>`
}