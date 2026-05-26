window.onload = function(){
    const texto = document.getElementById("textousuario");
    const btnSalvar = document.getElementById("btnSalvar");
    const areaTexto = document.getElementById("areatexto");
    const novoTexto = document.createElement("p");
    novoTexto.id = "texto";

    const btnAumentar = document.getElementById("aumentar");
    const btnDiminuir = document.getElementById("diminuir");
    const btnNegrito = document.getElementById("negrito");
    const btnItalico = document.getElementById("italico");

    let tamanho = 12;

    btnSalvar.addEventListener('click', function() {
        novoTexto.textContent = texto.value;
        novoTexto.style.fontSize = tamanho + "px";
        areaTexto.append(novoTexto);
        texto.value = "";
    });

    btnAumentar.addEventListener('click', function() {
        const texto = document.getElementById("texto");
        tamanho++;
        texto.style.fontSize = tamanho + "px";
    });

    btnDiminuir.addEventListener('click', function() {
        const texto = document.getElementById("texto");
        tamanho--;
        texto.style.fontSize = tamanho + "px";
    });

    btnNegrito.addEventListener('click', function() {
        const texto = document.getElementById("texto");
        if(texto.style.fontWeight == "bold"){
            texto.style.fontWeight = "";
        }else{
            texto.style.fontWeight = "bold";
        }
    });

    btnItalico.addEventListener('click', function() {
        const texto = document.getElementById("texto");
        if(texto.style.fontStyle == "italic"){
            texto.style.fontStyle = "";
        }else{
            texto.style.fontStyle = "italic";
        }
    });
}