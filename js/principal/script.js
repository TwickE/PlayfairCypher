const tabEncriptar = document.getElementById("encriptar");
const tabDesencriptar = document.getElementById("desencriptar");
const sectionEncriptar = document.getElementById("sectionEncriptar");
const sectionDesencriptar = document.getElementById("sectionDesencriptar");
const btnDefinir = document.getElementById("btn-Definir");
const h4One = document.getElementById("h4-1");
const h4Two = document.getElementById("h4-2");
const inputCypher = document.getElementById("input");
const textarea1 = document.getElementById("textarea1");
const btnRun1 = document.getElementById("btn-run1");
const textarea2 = document.getElementById("textarea2");
const textarea3 = document.getElementById("textarea3");
const textarea4 = document.getElementById("textarea4");
const tds = document.querySelectorAll("td");
const btnCopy1 = document.getElementById("btn-copy1");
const btnClear = document.getElementById("btn-clear");
const alerta = document.getElementById("container-alerta");

const numeroLetras = 25; //Tamnho da tabela da cifra
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //Alfabeto

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

    ConfiguracaoAlerta("Tudo Limpo", "fa-circle-check", "verde"); //Mostra o alerta
});

//Clique no botão Copiar Texto
btnCopy1.addEventListener("click", () => {
    if(!textarea2.value === "") {
        //Copia o texto para o cilpboard
        const text = textarea2.value;
        navigator.clipboard.writeText(text);

        ConfiguracaoAlerta("Texto copiado com sucesso", "fa-copy", "verde"); //Mostra o alerta
    }else {
        ConfiguracaoAlerta("Não é possível copiar o texto", "fa-triangle-exclamation", "laranja"); //Mostra o alerta
    }
});

//Clique no botão definir a chave da cifra
btnDefinir.addEventListener("click", () => {
    //Preenche a tabela da cifra
    preencheTabelaCifra();
});

//Função para preencher a tabela da cifra
function preencheTabelaCifra() {
    chaveCifra = input.value.replace(/(\s*)/g, ""); //Remove os espaços
    chaveCifra = chaveCifra.toUpperCase(); //Converte para letras maiúsculas
    chaveCifra = removeDuplicados(chaveCifra); //Remove as letras duplicadas

    //Mostra o alerta se a chave da cifra estiver vazia
    if(!chaveCifra) {
        ConfiguracaoAlerta("Preencha o campo Chave de Cifra", "fa-triangle-exclamation", "laranja");
        return;
    }

    //Remove caracteres especiais
    for(let i = 0; i < chaveCifra.length; i++) {
        if(!alfabeto.includes(chaveCifra[i])) {
            ConfiguracaoAlerta("Caracteres inválidos, introduza caracteres de A-Z", "fa-triangle-exclamation", "laranja");
            return;
        }
    }

    const letras = []; //Variável para armazenar o as letras da tabela da cifra

    //Preenche o array com as letras da chave
    for(let letra of chaveCifra) {
        letras.push(letra);
    }

    let numeroLetras2 = numeroLetras - letras.length; //Gurada o número de letras que falta preencher

    //Preenche o array com as letras do alfabeto restantes
    for(let i=0; i<=numeroLetras2; i++) {
        for(let letra of alfabeto) {
            if(!letras.includes(letra)) {
                //Remove a letra J
                if(letra != "J") {
                    letras.push(letra);
                }
            }
        }
    }

    let i = 0; //Variável contadora
    //Preenche a tabela da cifra
    tds.forEach((td) => {
        td.innerHTML = letras[i];
        i++;
    });
}

//Remove as letras duplicadas
function removeDuplicados(texto) {
    let novoTexto = ""; //Variável para armazenar o texto sem letras duplicadas

    //Percorre o texto
    for(let letra of texto) {
        if(!novoTexto.includes(letra)) {
            novoTexto += letra;
        }
    }
    return novoTexto;
}

//Prepara o texto para ser encriptado
function preparaTexto(texto) {
    texto = texto.toUpperCase(); //Converte para letras maiúsculas
    texto = texto.replace(/(\s*)/g, ""); //Remove os espaços
    
    const ArrayTexto = []; //Variável para armazenar o texto final dividido em pares
    let letra1 = ""; //Variável para armazenar a primeira letra
    let letra2 = ""; //Variável para armazenar a segunda letra

    //Divide o texto em pares de letras
    for(let i=0; i<texto.length; i++) {
        letra1 = texto[i];
        letra2 = texto[i+1];

        if(letra1 == letra2) { //Verifica se a letra2 é igual a letra1
            ArrayTexto.push(letra1 + "X"); //Adiciona a letra1 e a letra X

        }else if(letra2 == undefined) { //Verifica se a letra2 não existe
            ArrayTexto.push(letra1 + "X"); //Adiciona a letra1 e a letra X

        }else {
            ArrayTexto.push(letra1 + letra2); //Adiciona a letra1 e a letra2
            i++;
        }
    }

    console.log(ArrayTexto);
    return ArrayTexto;
}

preparaTexto("menssagem");

//Função para criar um alerta
function ConfiguracaoAlerta(paragrafoTexto, iconTexto, cor) {
    alerta.innerHTML = ""; //limpa o alerta

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
    
    alerta.classList.add("visible"); //Mostra o alerta

    //Esconde o alerta
    setTimeout(() => {
        alerta.classList.remove("visible");
    }, 3000);
}