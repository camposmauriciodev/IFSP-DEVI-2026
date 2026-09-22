const carrinho = [];
const formularioCarrinho = document.getElementById('formulario-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const parcelas = document.getElementById('parcelas');
const parcelasValor = document.getElementById('parcelas-valor');

function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function atualizarCarrinho() {
    itensCarrinho.replaceChildren();

    if (carrinho.length === 0) {
        const carrinhoVazio = document.createElement('p');
        carrinhoVazio.className = 'carrinho-vazio';
        carrinhoVazio.textContent = 'Seu carrinho está vazio.';
        itensCarrinho.appendChild(carrinhoVazio);
    }

    carrinho.forEach((produto, indice) => {
        const item = document.createElement('div');
        item.className = 'item-carrinho';

        const informacoes = document.createElement('div');
        informacoes.className = 'item-carrinho-info';

        const nome = document.createElement('strong');
        nome.textContent = produto.nome;

        const preco = document.createElement('span');
        preco.textContent = formatarPreco(produto.preco);

        const subtotal = document.createElement('span');
        subtotal.className = 'item-carrinho-subtotal';
        subtotal.textContent = `Subtotal: ${formatarPreco(produto.preco * produto.quantidade)}`;

        informacoes.append(nome, preco, subtotal);

        const stepper = document.createElement('div');
        stepper.className = 'stepper stepper-item';

        const diminuir = document.createElement('button');
        diminuir.type = 'button';
        diminuir.className = 'stepper-menos';
        diminuir.textContent = '-';
        diminuir.setAttribute('aria-label', `Diminuir quantidade de ${produto.nome}`);

        const quantidade = document.createElement('output');
        quantidade.textContent = produto.quantidade;
        quantidade.setAttribute('aria-label', `Quantidade de ${produto.nome}`);

        const aumentar = document.createElement('button');
        aumentar.type = 'button';
        aumentar.className = 'stepper-mais';
        aumentar.textContent = '+';
        aumentar.setAttribute('aria-label', `Aumentar quantidade de ${produto.nome}`);

        diminuir.addEventListener('click', () => {
            if (produto.quantidade > 1) {
                produto.quantidade -= 1;
                atualizarCarrinho();
            }
        });

        aumentar.addEventListener('click', () => {
            produto.quantidade += 1;
            atualizarCarrinho();
        });

        stepper.append(diminuir, quantidade, aumentar);
        const produtoInput = document.createElement('input');
        produtoInput.type = 'hidden';
        produtoInput.name = 'produto[]';
        produtoInput.value = produto.nome;

        const quantidadeInput = document.createElement('input');
        quantidadeInput.type = 'hidden';
        quantidadeInput.name = 'quantidade[]';
        quantidadeInput.value = produto.quantidade;

        item.append(informacoes, stepper, produtoInput, quantidadeInput);
        itensCarrinho.appendChild(item);
    });

    const total = carrinho.reduce((soma, produto) => soma + produto.preco * produto.quantidade, 0);
    totalCarrinho.textContent = formatarPreco(total);
}

function atualizarParcelas(valor) {
    const numeroParcelas = Math.min(12, Math.max(1, valor));
    parcelas.value = numeroParcelas;
    parcelasValor.textContent = `${numeroParcelas}x`;
}

document.querySelectorAll('.adicionar-carrinho').forEach((botao) => {
    botao.addEventListener('click', () => {
        const produtoExistente = carrinho.find((produto) => produto.nome === botao.dataset.produto);

        if (produtoExistente) {
            produtoExistente.quantidade += 1;
        } else {
            carrinho.push({
                nome: botao.dataset.produto,
                preco: Number(botao.dataset.preco.replace('.', '').replace(',', '.')),
                quantidade: 1
            });
        }

        atualizarCarrinho();
    });
});

document.getElementById('abrir-carrinho').addEventListener('click', () => {
    atualizarCarrinho();
    formularioCarrinho.hidden = false;
});

document.getElementById('fechar-carrinho').addEventListener('click', () => {
    formularioCarrinho.hidden = true;
});

document.querySelectorAll('.stepper-parcelas button').forEach((botao) => {
    botao.addEventListener('click', () => {
        const valorAtual = Number(parcelas.value);
        const alteracao = botao.classList.contains('stepper-mais') ? 1 : -1;
        atualizarParcelas(valorAtual + alteracao);
    });
});

formularioCarrinho.addEventListener('submit', (evento) => {
    if (carrinho.length === 0) {
        evento.preventDefault();
        alert('Adicione pelo menos um produto ao carrinho.');
    }
});