window.onload = function () {
    // Lista de links
    const inputDescricao = document.getElementById("inputDescricao"); 
    const inputEndereco = document.getElementById("inputEndereco") ;
    const listaLink = document.getElementById("ulLinks") ;
    const btnSalvarLink = document.getElementById("btnSalvarLink") ;

    btnSalvarLink.addEventListener('click', ()=>{
        // Declarando variaveis para armazenar elementos pelo id
        let descricao = document.createElement("p");
        let link = document.createElement("a");
        let item = document.createElement("li")

        // Criando descricao do link e estilizando
        descricao.textContent = inputDescricao.value;
        descricao.style.margin = 0;

        // Criando link clicável
        link.textContent = inputEndereco.value;
        link.href = inputEndereco.value;

        // Adicionando elementos filhos ao pai
        item.append(descricao);
        item.append(link);
        item.append(document.createElement("hr"));
        listaLink.append(item);

        // Limpando campo de input
        inputDescricao.value = "";
        inputEndereco.value = "";
    })
}