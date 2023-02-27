/* Existen tres formas de escribir una funcion */

function sumar(a, b) {
    return a+b;
}

const saludar = function() {
    console.log("Hola");
}

const despedir = () => {
    console.log("Adios");
}

const persona = (nombre) => {
    console.log("Hola " + nombre)
}

const sinReturn = () => console.log("sin return y en una sola linea")

sumar(1,1)
saludar()
despedir()
persona("Juan")
sinReturn()