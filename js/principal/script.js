const tabEncriptar = document.getElementById("encriptar");
const tabDesencriptar = document.getElementById("desencriptar");
const sectionEncriptar = document.getElementById("sectionEncriptar");
const sectionDesencriptar = document.getElementById("sectionDesencriptar");
const btnDefinir = document.getElementById("btn-Definir");
const h4One = document.getElementById("h4-1");
const h4Two = document.getElementById("h4-2");
const inputCypher = document.getElementById("input");
const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");
const textarea3 = document.getElementById("textarea3");
const textarea4 = document.getElementById("textarea4");
const tds = document.querySelectorAll("td");
const btnCopy1 = document.getElementById("btn-copy1");
const btnClear = document.getElementById("btn-clear");
const alerta = document.getElementById("container-alerta");

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Clique no botão encriptar
tabEncriptar.addEventListener("click", () => {
    //Troca para a section de encriptar
    try {
        tabDesencriptar.classList.add("deactive");
        tabEncriptar.classList.remove("deactive");
        sectionDesencriptar.classList.add("hide");
        sectionEncriptar.classList.remove("hide");
    }catch(e) {
    }
});

//Clique no botão desencriptar
tabDesencriptar.addEventListener("click", () => {
    //Troca para a section de desencriptar
    try {
        tabEncriptar.classList.add("deactive");
        tabDesencriptar.classList.remove("deactive");
        sectionDesencriptar.classList.remove("hide");
        sectionEncriptar.classList.add("hide");
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

    ConfiguracaoAlerta("Tudo Limpo", "fa-circle-check", "verde");
});

//Clique no botão Copiar Texto
btnCopy1.addEventListener("click", () => {
    if(!textarea2.value === "") {
        //Copia o texto para o cilpboard
        const text = textarea2.value;
        navigator.clipboard.writeText(text);

        //Mostra o alerta
        ConfiguracaoAlerta("Texto copiado com sucesso", "fa-copy", "verde");
    }else {
        //Mostra o alerta
        ConfiguracaoAlerta("Não é possível copiar o texto", "fa-triangle-exclamation", "orange");
    }
});

btnDefinir.addEventListener("click", () => {
    preencheTabelaCifra();
});

//Função para preencher a tabela da cifra
function preencheTabelaCifra() {
    //Remove os espaços
    chaveCifra = input.value.replace(/(\s*)/g, "");

    //Mostra o alerta se a chave da cifra estiver vazia
    if(!chaveCifra) {
        ConfiguracaoAlerta("Preencha o campo Chave de Cifra", "fa-triangle-exclamation", "orange");
        return;
    }

    //Chave sem ser formatada
    raw_key = input.value;

    //Converte para letras maiúsculas
    chaveCifra = chaveCifra.toUpperCase();
    //Remove as letras duplicadas
    chaveCifra = removeDuplicados(chaveCifra)

    //Variável para armazenar o as letras dat tabela da cifra
    const letras =[];

    //Preenche o array com as letras da chave
    for (let letra of chaveCifra) {
        letras.push(letra);
      }

    

    /* tds.forEach((td) => {
        td.innerHTML = "";
    }); */
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
    alerta.classList.add("visible");
    //Esconde o alerta
    setTimeout(() => {
        alerta.classList.remove("visible");
    }, 3000);
}