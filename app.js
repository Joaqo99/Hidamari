const carruselRsp = document.getElementById("carrusel-responsive")
const elementoImgRsp = document.getElementById("imagen-carrusel-responsive")

let i = 1
let imgRotation = setInterval(()=>{
    elementoImgRsp.src = `fotos carrusel/foto ${i}.jpeg`

    if(i < 4){
        i++
    }else{
        i = 1
    }

}, 3000)

let app = Vue.createApp({
    data: function(){
        return{
            productos : [
                {titulo : "Cera de soja reficen", foto: "fotos productos/Cera.jpeg" , precios : ["1kg: $690", "10kg: $6000", "20kg: $10300"]},
                {titulo : "Ojalillos", foto: "fotos productos/Ojalillos.jpeg" , precios : ["25 unidades: $200", "50 unidades: $380", "100 unidades: $650"]},
                {titulo : "Pabilo nro 27", foto: "fotos productos/Pabilo.jpeg" , precios : ["5 metros: $320", "10 metros: $590"]},
                {titulo : "Pabilo nro 12 y 18", foto: "fotos productos/Pabilo.jpeg" , precios : ["5 metros: $400", "10 metros: $750", "100 metros: $3000"]},
                {titulo : "Pabilo de madera", foto: "fotos productos/Pabilo.jpeg" , precios : ["250 g (aprox. 50 unidades): $1500"]},
                {titulo : "Varillas de Rattán cortas", foto: "fotos productos/Varillas.jpeg" , precios : ["25 unidades: $500", "50 unidades: $1500", "100 unidades: $2500"]},
                {titulo : "Varillas de Rattán largas", foto: "fotos productos/Varillas.jpeg" , precios : ["25 unidades: $450", "50 unidades: $975", "100 unidades: $1500"]},
            ]
        }
    }
})
app.mount("#app")