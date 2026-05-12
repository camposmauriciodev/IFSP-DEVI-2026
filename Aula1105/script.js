// scripts.js
window.onload = function() {
    // criar uma nova div
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("nova-div");

    // criar um novo título em H1
    const novoH1 = document.createElement("h1");
    novoH1.textContent = "Aula 11/05";
    novaDiv.append(novoH1);

    // criar um novo parágrafo (p)
    const novoParag = document.createElement("p");
    novoParag.textContent = "sou um novo parágrafo!";

    // inserir o parágrafo dentro da novaDiv
    novaDiv.append(novoParag);

    // inserir a novaDiv dentro da div conteudo que já existe!
    const divConteudo = document.getElementById("conteudo");
    divConteudo.append(novaDiv);

    // evento para o btnSalvar
    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.addEventListener('click', function(){
        const texto = document.getElementById("texto");
        const novoP = document.createElement("p");
        novoP.textContent = texto.value;

        const painelTextos = document.getElementById("painelTextos");
        painelTextos.append(novoP);
        painelTextos.append(document.createElement("hr"));

        // limpar o textarea
        texto.value = "";
    });
}