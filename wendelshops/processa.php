<?php
$produtos = [
    'Processador Raízen' => 3000.00,
    'Pente de Memória RAM Electrolux' => 18.00,
    'Gabinete da Barbie' => 780.85
];

$nomes = $_POST['produto'] ?? [];
$quantidades = $_POST['quantidade'] ?? [];
$pagamento = $_POST['pagamento'] ?? '';
$parcelas = (int) ($_POST['parcelas'] ?? 1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || empty($nomes)) {
    exit('<h1>Pedido inválido</h1><a href="index.php">Voltar para a loja</a>');
}

$subtotal = 0;
$itens = [];

foreach ($nomes as $indice => $nome) {
    if (!isset($produtos[$nome])) {
        continue;
    }

    $quantidade = max(1, (int) ($quantidades[$indice] ?? 1));
    $valorUnitario = $produtos[$nome];
    $valor = $valorUnitario * $quantidade;
    $subtotal += $valor;
    $itens[] = [$nome, $quantidade, $valorUnitario, $valor];
}

if (empty($itens)) {
    exit('<h1>Nenhum produto válido</h1><a href="index.php">Voltar para a loja</a>');
}

$desconto = 0;
$juros = 0;

if ($pagamento === 'PIX') {
    $desconto = $subtotal * 0.05;
    $total = $subtotal - $desconto;
    $valorParcela = $total;
} else {
    $parcelas = min(12, max(1, $parcelas));
    $juros = $parcelas > 3 ? $subtotal * 0.015 * $parcelas : 0;
    $total = $subtotal + $juros;
    $valorParcela = $total / $parcelas;
}

function moeda($valor): string
{
    return 'R$ ' . number_format($valor, 2, ',', '.');
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resumo da compra</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body class="pagina-resultado">
        <main class="resultado-compra">
            <div class="resultado-marca">
                <img src="logo.png" alt="Logo WendelShops">
                <span>WendelShops</span>
            </div>
            <p class="resultado-etiqueta">Compra concluída</p>
            <h1>Resumo da compra</h1>
            <div class="resultado-itens">
                <?php foreach ($itens as [$nome, $quantidade, $valorUnitario, $valor]): ?>
                    <p>
                        <span><?= htmlspecialchars($nome, ENT_QUOTES, 'UTF-8') ?> <small><?= $quantidade ?>x</small></span>
                        <strong>Unitário: <?= moeda($valorUnitario) ?><br>Subtotal: <?= moeda($valor) ?></strong>
                    </p>
                <?php endforeach; ?>
            </div>
            <div class="resultado-detalhes">
                <p><span>Subtotal</span><strong><?= moeda($subtotal) ?></strong></p>
            <?php if ($desconto > 0): ?>
                <p><span>Desconto PIX</span><strong><?= moeda($desconto) ?></strong></p>
            <?php endif; ?>
            <?php if ($juros > 0): ?>
                <p><span>Juros do cartão</span><strong><?= moeda($juros) ?></strong></p>
            <?php endif; ?>
            </div>
            <div class="resultado-total">
                <span>Total</span>
                <strong><?= moeda($total) ?></strong>
            </div>
            <div class="resultado-pagamento">
                <p><span>Forma de pagamento</span><strong><?= htmlspecialchars($pagamento, ENT_QUOTES, 'UTF-8') ?></strong></p>
                <?php if ($pagamento === 'PIX'): ?>
                    <p><span>Pagamento</span><strong>À vista</strong></p>
                <?php else: ?>
                    <p><span>Parcelas</span><strong><?= $parcelas ?>x de <?= moeda($valorParcela) ?></strong></p>
                <?php endif; ?>
            </div>
            <a class="resultado-voltar" href="index.php">Voltar para a loja</a>
        </main>
    </body>
</html>