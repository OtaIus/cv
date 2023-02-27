const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btn-visualizar');
const parrafoExa = document.querySelector('#parrafoExa');
const cardColor = document.querySelector('#cardColor');

btnVisualizar.addEventListener("click", () => {
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    copyToClipboard(inputColor.value);
});

function copyToClipboard(text) {
    navigator.clipboard
        .writeText(text)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
}