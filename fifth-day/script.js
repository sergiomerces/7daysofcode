let item = null;
let carrinhoCompra = {
    cereais : [],
    congelados: [],
    doces: [],
    frutas: [],
    higiene: [],
    laticinios: [],
    matinais: [],
    temperos: []
}
let entrada = document.querySelector('section#entrada');

function adicionarItem() {
    entrada.innerHTML = `<p><label for="item">Digite um item  e click sobre a categoria para adicionar:</label></p>
    <p><input type="text" name="item" id="item"></p>
    <div><button id="cereais">cereais</button>
    <button id="congelados">congelados</button>
    <button id="doces">doces</button>
    <button id="frutas">frutas</button>
    <button id="higiene">higiene</button>
    <button id="laticinios">laticínios</button>
    <button id="matinais">matinais</button>
    <button id="temperos">temperos</button>
    <button id="finalizar">finalizar</button></div>`
    
    const btnCereais = document.querySelector('button#cereais');
    const btnCongelados = document.querySelector('button#congelados');
    const btnDoces = document.querySelector('button#doces');
    const btnFrutas = document.querySelector('button#frutas');
    const btnHigiene = document.querySelector('button#higiene');
    const btnLaticinios = document.querySelector('button#laticinios');
    const btnMatinais = document.querySelector('button#matinais');
    const btnTemperos = document.querySelector('button#temperos');
    const btnFinalizar = document.querySelector('button#finalizar');


    btnCereais.addEventListener('click', inserirCereais);
    btnCongelados.addEventListener('click', inserirCongelados);
    btnDoces.addEventListener('click', inserirDoces);
    btnFrutas.addEventListener('click', inserirFrutas);
    btnHigiene.addEventListener('click', inserirHigiene);
    btnLaticinios.addEventListener('click', inserirLaticinios);
    btnMatinais.addEventListener('click', inserirMatinais);
    btnTemperos.addEventListener('click', inserirTemperos);
    btnFinalizar.addEventListener('click', finalizarEntrada);
}

function inserirCereais() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.cereais.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirCongelados() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.congelados.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirDoces() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.doces.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirFrutas() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.frutas.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirHigiene() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.higiene.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirLaticinios() {
    console.log('teste');
    item = document.querySelector('input#item').value;
    carrinhoCompra.laticinios.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirMatinais() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.matinais.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirTemperos() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.temperos.push(item);
    window.alert(`${item} adicionada!`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function finalizarEntrada() {
    entrada.innerHTML = '';
    exibirItem();
}

function exibirItem() {
    entrada.innerHTML = '';

    let listaCompra = document.querySelector('section#lista');
    let categorias = [];
    categorias = Object.keys(carrinhoCompra);

    if(carrinhoCompra.cereais.length > 0) {
        listaCompra.innerHTML = `<h2>${categorias[0]}</h2>`;
        for(let i = 0; i < carrinhoCompra.cereais.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.cereais[i]}</p>`;
        }
    }

    if(carrinhoCompra.congelados.length > 0) {
        listaCompra.innerHTML += `<h2>${categorias[1]}</h2>`;
        for(let i = 0; i < carrinhoCompra.congelados.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.congelados[i]}</p>`;
        }
    }

    if(carrinhoCompra.doces.length > 0) {
        listaCompra.innerHTML += `<h2>${categorias[2]}</h2>`;
        for(let i = 0; i < carrinhoCompra.doces.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.doces[i]}</p>`;
        }
    }

    if(carrinhoCompra.frutas.length > 0) {
        listaCompra.innerHTML += `<h2>${categorias[3]}</h2>`;
        for(let i = 0; i < carrinhoCompra.frutas.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.frutas[i]}</p>`;
        }
    }

    if(carrinhoCompra.higiene.length > 0) {
        listaCompra.innerHTML += `<h2>${categorias[4]}</h2>`;
        for(let i = 0; i < carrinhoCompra.higiene.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.higiene[i]}</p>`;
        }
    }

    if(carrinhoCompra.laticinios.length > 0) {
        listaCompra.innerHTML += `<h2>${categorias[5]}</h2>`;
        for(let i = 0; i < carrinhoCompra.laticinios.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.laticinios[i]}</p>`;
        }   
    }

    if(carrinhoCompra.matinais.length > 0) {
        listaCompra.innerHTML += `<h2>${categorias[6]}</h2>`;
        for(let i = 0; i < carrinhoCompra.matinais.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.matinais[i]}</p>`;
        }
    }

    if(carrinhoCompra.temperos.length > 0) {
        listaCompra.innerHTML += `<h2>${categorias[7]}</h2>`;
        for(let i = 0; i < carrinhoCompra.temperos.length; i++) {
        listaCompra.innerHTML += `<p>${carrinhoCompra.temperos[i]}</p>`;
        }
    }   
}

const botaoSim = document.querySelector('button#sim');
const botaoNao = document.querySelector('button#nao');

botaoSim.addEventListener('click', adicionarItem);
botaoNao.addEventListener('click', exibirItem);