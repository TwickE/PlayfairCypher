const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnDefinir = document.getElementById("btn-Definir");
const h4One = document.getElementById("h4-1");
const h4Two = document.getElementById("h4-2");
const inputCypher = document.getElementById("input");
const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");
const tds = document.querySelectorAll("td");
const btnCopy = document.getElementById("btn-copy");
const btnClear = document.getElementById("btn-clear");
const alerta = document.getElementById("container-alerta");

//Chave da cifra
let chaveExi = false;

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
    //Limpa a tabela da cifra
    tds.forEach((td) => {
        td.innerHTML = "";
    });

    ConfiguracaoAlerta("Tudo Limpo!", "fa-circle-check", "verde");
});

//Clique no botão Copiar Texto
btnCopy.addEventListener("click", () => {
    if(!textarea2.value === "") {
        //Copia o texto para o cilpboard
        const text = textarea2.value;
        navigator.clipboard.writeText(text);

        //Mostra o alerta
        ConfiguracaoAlerta("Texto copiado com sucesso!", "fa-copy", "verde");
    }else {
        //Mostra o alerta
        ConfiguracaoAlerta("Não é possível copiar o texto!", "fa-triangle-exclamation", "orange");
    }
});

btnDefinir.addEventListener("click", () => {
    KeySet();
});

//Função para preencher a tabela da cifra
function KeySet() {
    //Remove os espaços
    chaveCifra = input.value.replace(/(\s*)/g, "");

    if(!chaveCifra) {
        ConfiguracaoAlerta("Preencha o campo Chave de Cifra", "fa-triangle-exclamation", "orange");
        chaveExi = false;
        return;
    }

    //Converte para letras maiúsculas
    chaveCifra = chaveCifra.toUpperCase();
    //Remove as letras duplicadas
    chaveCifra = removeDuplicados(chaveCifra)
    console.log(chaveCifra);
}

//Remove as letras duplicadas
function removeDuplicados(key) {
    let novaChave = "";
    for(let i=0; i<key.length; i++){
        let exi = false;
        for(let j=0; j<i; j++) {
            if(key[i]===key[j]) {
                exi = true;
            }
        } 
        if(exi===false) {
            novaChave += key[i];
        } 
    }
    return novaChave;
}

//Função para criar um alerta
function ConfiguracaoAlerta(paragrafoTexto, iconTexto, cor) {
    //limpa o alerta
    alerta.innerHTML = "";
    //Cor do alerta
    if(cor === "verde") {
        alerta.style.backgroundColor = "#C7E2D6";
        alerta.style.border = "3px solid #41b341";
    }else if(cor === "vermelho") {
        alerta.style.backgroundColor = "#F6CCD1";
        alerta.style.border = "3px solid #c62222";
    }else {
        alerta.style.backgroundColor = "#FFF1C2";
        alerta.style.border = "3px solid #de9324";
    }
    //Icon do alerta
    let icon = `<i class="fa-solid ${iconTexto}"></i>`;
    alerta.innerHTML += icon;
    //Texto do alerta
    let texto = `<p id="alertaTexto">${paragrafoTexto}</p>`
    alerta.innerHTML += texto;
    //Mostra o alerta
    alerta.style.display = "flex";
    //Esconde o alerta
    setTimeout(() => {
        alerta.style.display = "none";
    }, 2000);
}