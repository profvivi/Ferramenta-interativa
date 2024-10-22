criaCartao(
    'Programação',
    'O que é HTML?',
    'O HTML (Linguagem de Marcação de HiperTexto)'
)

criaCartao(
    'Programação',
    'O que é CSS?',
    'O CSS é uma linguagem de estilização.'
)

criaCartao(
    'Programação',
    'O que é JavaScript?',
    'O JavaScript é uma linguagem de programação.'
    cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
        </div>
        </div>
`
`
container.appendChild(cartao)
)

