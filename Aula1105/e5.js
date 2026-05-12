window.onload = function(){
    const btnAdicionar = document.getElementById("btnAdicionar");
    btnAdicionar.addEventListener('click', function(){
        const descricao = document.getElementById("descricao");
        const valor = document.getElementById("valor");
        const selecao = document.getElementById("produtos");
        const novaOpcao = document.createElement("option");

        novaOpcao.textContent= descricao.value;
        novaOpcao.value = valor.value;

        selecao.append(novaOpcao);

        descricao.value = "";
        valor.value = "";
    });
};