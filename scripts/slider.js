let num_img_actual = 0; 
let imgs = [
    {"img":'../assets/img/equipos/imgs/red-bull/ft1.avif'},
    {"img":'../assets/img/equipos/imgs/red-bull/ft2.avif'},
    {"img":'../assets/img/equipos/imgs/red-bull/ft3.avif'},
]

window.addEventListener("DOMContentLoaded", ()=>{
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
        img_a_cambiar.src = imgs[num_img_actual].img;
        
    });

    flechaDer.addEventListener("click", ()=>{
        if (num_img_actual === 2) {
            num_img_actual = 0;
            contador_de_imgs.textContent = "1/3"
        }else{
            num_img_actual++
            contador_de_imgs.textContent = (num_img_actual+1) + "/3"
        }
        img_a_cambiar.src = imgs[num_img_actual].img;
    })
})