const imagenes=document.querySelectorAll('.img-galeria')
const imagenesLight=document.querySelector('.agregar-imagen')
const contenedorlight=document.querySelector('.imagen-light')
const hamburguesa1 = document.querySelector('.hamburguesa'); 

/*console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorlight)*/

imagenes.forEach(imagen=>{
    imagen.addEventListener('click', ()=>{
    aparecerima(imagen.getAttribute('src'));
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorlight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguesa1.Syle.opacity   = '1'
    }
})

        const aparecerima=(imagen)=> {
        imagenesLight.src=imagen
        contenedorlight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguesa1.Syle.opacity   = '1'
        
    }