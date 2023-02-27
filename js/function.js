/*
document.getElementById('boton').onclick = function () {
    console.log("Capturamos el elemento click")
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS";
}
*/
/*
document.addEventListener('click', function () {
    console.log("Hola mundo desde EventListener");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS";
});
*/

document.getElementById('boton').addEventListener('click', function () {
    console.log("Hola mundo desde EventListener");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS";
});

document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
});