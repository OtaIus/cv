
// Referenciando los enlaces ancla a constantes
const btn_sobreMi = document.getElementById("sobre-mi")
const btn_contacto = document.getElementById("contacto")
const btn_experiencia = document.getElementById("experiencia")
const btn_habilidades = document.getElementById("habilidades")

// Agregando comportamiento a los enlaces ancla
btn_sobreMi.addEventListener("click", function() {
    ocultarHijosInfo()
    mostrarInfo('info-sobre-mi')
})
btn_contacto.addEventListener("click", function() {
    ocultarHijosInfo()
    mostrarInfo('info-contacto')
})
btn_experiencia.addEventListener("click", function() {
    ocultarHijosInfo()
    mostrarInfo('info-experiencia')
})
btn_habilidades.addEventListener("click", function() {
    ocultarHijosInfo()
    mostrarInfo('info-habilidades')
})

/**
 * Establece el tamaño del contenido de "info" según el
 * tamaño de la imagen. De modo que, si el usuario reescala
 * la venana del navegador, el contenido se actualiza
 * mediante el uso de 'window.onresize' el cual recibe
 * una función que llamará cada vez que se reescale la
 * ventana del navegador.
 */
const fotoPerfil = document.querySelector('.perfil img')
const info = document.querySelector('.info')
info.style.height = fotoPerfil.offsetHeight === 0 ? "95%": (""+ fotoPerfil.offsetHeight + "px")
window.onresize = function() {
    info.style.height = ""+ fotoPerfil.offsetHeight + "px"
}



// Funciones utiles

/**
 * "Oculta" todos los tag hijos de <section class="info">
 */
let info_hijos = []
info_hijos.push(document.getElementById('info-sobre-mi'))
info_hijos.push(document.getElementById('info-contacto'))
info_hijos.push(document.getElementById('info-experiencia'))
info_hijos.push(document.getElementById('info-habilidades'))
function ocultarHijosInfo() {
    for (let i = 0; i < 4; i++) {
        info_hijos[i].style.display = "none"
    }
}

/**
 * Muestra el elemento de la id y oculta el resto.
 */
function mostrarInfo(id) {
    ocultarHijosInfo()
    document.getElementById(id).style.display = "block"
    //document.getElementById(id).href = 'info-sobre-mi'
}