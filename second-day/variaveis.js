/*
O programa deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
*/

function fazerLogin() {
    let nome = document.querySelector('input#nome').value;
    let idade = document.querySelector('input#idade').value;
    let linguagem = document.querySelector('input#linguagem').value;

    document.getElementById('nome').value = null;
    document.getElementById('idade').value = null;
    document.getElementById('linguagem').value = null;

    document.getElementById('display').textContent = null;
    document.getElementById('display').textContent = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

    limparEntradas();
}

const login = document.querySelector('button#login');
login.addEventListener('click', fazerLogin);