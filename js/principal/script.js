const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const h4One = document.getElementById("h4-1");
const h4Two = document.getElementById("h4-2");
const inputCypher = document.getElementById("input");
const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");
const td = document.querySelectorAll("td");
const btnClear = document.getElementById("btn-clear");

console.log(inputCypher);

//Clique no botão encriptar
btnEncriptar.addEventListener("click", () => {
    try {
        btnDesencriptar.classList.add("deactive");
        btnEncriptar.classList.remove("deactive");
        h4One.innerHTML = "Texto para Encriptar";
        h4Two.innerHTML = "Texto Encriptado";
    }catch(e) {
    }
});

//Clique no botão desencriptar
btnDesencriptar.addEventListener("click", () => {
    try {
        btnEncriptar.classList.add("deactive");
        btnDesencriptar.classList.remove("deactive");
        h4Two.innerHTML = "Texto Desencriptado";
        h4One.innerHTML = "Texto Encriptado";
    }catch(e) {
    }
});

//Clique no botão limpar
btnClear.addEventListener("click", () => {
    //Limpa todas as caixas de texto
    inputCypher.value = "";
    textarea1.value = "";
    textarea2.value = "";
    td.innerHTML = "X";
});