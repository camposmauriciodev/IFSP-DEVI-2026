<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WendelShops</title>
        <link rel="stylesheet" href="style.css">
        <link rel="icon" href="logo-branco.png" type="image/png">
    </head>
    <body>
        <header>
            <img src="logo.png" alt="WendelShops">
            <button type="button" id="abrir-carrinho" aria-label="Abrir carrinho">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
                </svg>
            </button>
        </header>
        <form id="formulario-carrinho" hidden method="POST" action="processa.php">
            <div class="carrinho-cabecalho">
                <h2>Seu carrinho</h2>
                <button type="button" id="fechar-carrinho" aria-label="Fechar carrinho">&times;</button>
            </div>
            <div id="itens-carrinho">
                <p class="carrinho-vazio">Seu carrinho está vazio.</p>
            </div>
            <div class="resumo-carrinho">
                <p class="total-carrinho"><span>Total</span><strong id="total-carrinho">R$ 0,00</strong></p>
            </div>

            <fieldset>
                <legend>Forma de pagamento</legend>
                <label>
                    <input type="radio" name="pagamento" value="PIX" required>
                    PIX
                </label>
                <label>
                    <input type="radio" name="pagamento" value="Cartão de Credito">
                    Cartão de Crédito
                </label>
            </fieldset>

            <div class="parcelas-campo">
                <label for="parcelas-valor">Número de parcelas</label>
                <div class="stepper stepper-parcelas">
                    <button type="button" class="stepper-menos" data-target="parcelas" aria-label="Diminuir número de parcelas">&minus;</button>
                    <output id="parcelas-valor">1x</output>
                    <button type="button" class="stepper-mais" data-target="parcelas" aria-label="Aumentar número de parcelas">+</button>
                </div>
                <input type="hidden" id="parcelas" name="parcelas" value="1" required>
            </div>

            <button type="submit">Finalizar compra</button>
        </form>
        <main id="categorias" class="hero">
            <p class="hero-minibox">Quase De Graça</p>
            <h1>Encontre A <span class="title-laranja">Melhor Promoção</span> Pro Seu Setup.</h1>
            <p class="hero-descricao">Tudo no precinho pra sua gameplay insana.</p>
            <div id="produtos" class="produtos-grid">
                <div class="produto">
                    <img src="processador.jpg" alt="Processador">
                    <div class="produto-info">
                        <p class="produto-nome">Processador Raízen</p>
                        <p class="produto-quant">5 UNIDADES</p>
                        <div class="produto-acoes">
                            <p class="produto-preco">R$ 3.000,00</p>
                            <button type="button" class="adicionar-carrinho" data-produto="Processador Raízen" data-preco="3.000,00">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="produto">
                    <img src="pente-ram.jpg" alt="Pente de Memória RAM Electrolux">
                    <div class="produto-info">
                        <p class="produto-nome">Pente de Memória RAM Electrolux</p>
                        <p class="produto-quant">12 UNIDADES</p>
                        <div class="produto-acoes">
                            <p class="produto-preco">R$ 18,00</p>
                            <button type="button" class="adicionar-carrinho" data-produto="Pente de Memória RAM Electrolux" data-preco="18,00">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="produto">
                    <img src="gabinete.jpg" alt="Gabinete da Barbie">
                    <div class="produto-info">
                        <p class="produto-nome">Gabinete da Barbie</p>
                        <p class="produto-quant">25 UNIDADES</p>
                        <div class="produto-acoes">
                            <p class="produto-preco">R$ 780,85</p>
                            <button type="button" class="adicionar-carrinho" data-produto="Gabinete da Barbie" data-preco="780,85">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer id="newsletter">
            <div class="footer-identidade">
                <div class="footer-marca">
                    <img src="logo.png" alt="Logo WendelShops">
                    <span>WendelShops</span>
                </div>
                <p>Oferecendo o melhor da tecnologia diretamente do Paraguai.</p>
                <p class="footer-copyright">&copy; 2026 WendelShops. Todos os direitos reservados.</p>
            </div>
        </footer>
        <script src="script.js"></script>
    </body>
</html>