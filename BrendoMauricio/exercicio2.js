let nextId = 0;

window.onload = function(){
    const nomeProduto = document.getElementById("nome");
    const estoqueProduto = document.getElementById("estoque");
    const btnSalvar = document.getElementById("btnSalvar");
    const tabela = document.getElementById("produtos");

    const idProduto = document.getElementById("idproduto");
    const qtdeProduto = document.getElementById("qtdeproduto");
    const opcaoAdd = document.getElementsByName("tipo");
    //const opcaoRem = document.getElementById("radioRemover");
    const btnConfirmar = document.getElementById("btnConfirmar");

    btnSalvar.addEventListener('click', function() {
        const novaLinha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const estoque = document.createElement("td");

        id.textContent = ++nextId;
        nome.textContent = nomeProduto.value;
        estoque.textContent = estoqueProduto.value;
        estoque.id = "qtdProd" + nextId;

        novaLinha.append(id,nome,estoque);

        tabela.append(novaLinha);
    });

    btnConfirmar.addEventListener('click', function() {
        if(opcaoRadio[0].checked){
            const estoqueAtual = parseInt(document.getElementById("qtdProd" + idProduto.value).textContent);
            document.getElementById("qtdProd" + idProduto.value).textContent = estoqueAtual + parseInt(qtdeProduto.value);
        }else{
            const estoqueAtual = parseInt(document.getElementById("qtdProd" + idProduto.value).textContent);
            document.getElementById("qtdProd" + idProduto.value).textContent = estoqueAtual - parseInt(qtdeProduto.value);
        }
    })
}
