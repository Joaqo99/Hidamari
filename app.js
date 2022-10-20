const carruselRsp = document.getElementById("carrusel-responsive")
const elementoImgRsp = document.getElementById("imagen-carrusel-responsive")

let i = 1
let imgRotation = setInterval(()=>{
    elementoImgRsp.src = `fotos carrusel/foto ${i}.jpeg`

    if(i < 5){
        i++
    }else{
        i = 1
    }

}, 3000)