const ingresoTexto = document.getElementById("ingresoTexto")
const btnEncript = document.getElementById("btnEncript")
const btnDesencript = document.getElementById("btnDesencript")
const btnCopiar = document.getElementById("btnCopiar")
const ningunMsj = document.getElementById("ningunMsj")
const diamante = document.getElementById("diamante")
const textEod = document.getElementById("textEod")
const right = document.getElementById("right")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

/*Desencripta nuestro mensaje secreto!
fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!*/

let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const remplazar = (newValor) => {
    ningunMsj.innerHTML = newValor;
    diamante.style.display ="none";
    ingresoTexto.value ="";
    textEod.style.display ="none";
    btnCopiar.style.display="block";
    right.classList.add("ajustar");
    ningunMsj.classList.add("ajustar");
}

btnEncript.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "")
    function encript(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])) {
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
    remplazar(encript(texto))
});

btnDesencript.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "")
    function desencript(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    remplazar(desencript(texto))
});

function sanitizeTextarea() {
    var textarea = document.getElementById("ingresoTexto");
    var text = textarea.value;
  
    text = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  
    text = text.toLowerCase();
  
    textarea.value = text;
}
  
function copyToClipboard() {
    var text = document.getElementById("ningunMsj");
    text.select();
    text.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");
}
  
var copyButton = document.getElementById('btnCopiar');

copyButton.addEventListener('click', function() {

copyButton.innerHTML = '<i class="fas fa-check"></i> Copiado!';

setTimeout(function() {
    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copiar';
    }, 3000);
});