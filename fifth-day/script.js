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
let lista = document.querySelector('section#lista');

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
    btnFinalizar.addEventListener('click', exibirItem);
}

function inserirCereais() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.cereais.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirCongelados() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.congelados.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirDoces() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.doces.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirFrutas() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.frutas.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirHigiene() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.higiene.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirLaticinios() {
    console.log('teste');
    item = document.querySelector('input#item').value;
    carrinhoCompra.laticinios.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirMatinais() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.matinais.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function inserirTemperos() {
    item = document.querySelector('input#item').value;
    carrinhoCompra.temperos.push(item);
    window.alert(`Adicionado item: ${item}`);
    document.getElementById('item').value = '';
    document.querySelector('input#item').focus();
}

function exibirItem() {
    entrada.innerHTML = '';
    lista.innerHTML = '';

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

function removerItem() {
    entrada.innerHTML = '';
    lista.innerHTML = '';
    item = '';

    entrada.innerHTML = `<p><label for="item">Digite um item  e click em remover:</label></p>
    <p><input type="text" name="item" id="item"></p>
    <div><button id="excluir">Excluir</button>
    <button id="finalizar">finalizar</button></div>`

    const btnFinalizar = document.querySelector('button#finalizar');
    const btnExcluir = document.querySelector('button#excluir');

    btnFinalizar.addEventListener('click', exibirItem);
    btnExcluir.addEventListener('click', buscarItem);
}

function buscarItem() {
    item = document.querySelector('input#item').value;
    window.alert('Remover item: ' + item);
    let indice = '';

    if(carrinhoCompra.cereais.indexOf(item) > -1) {  
        indice = carrinhoCompra.cereais.indexOf(item);  
        carrinhoCompra.cereais.splice(indice, 1);
        exibirItem();
    } else if(carrinhoCompra.congelados.indexOf(item) > -1) {  
        indice = carrinhoCompra.congelados.indexOf(item);  
        carrinhoCompra.congelados.splice(indice, 1);
        exibirItem();
    } else if(carrinhoCompra.doces.indexOf(item) > -1) {  
        indice = carrinhoCompra.doces.indexOf(item);  
        carrinhoCompra.doces.splice(indice, 1);
        exibirItem();
    } else if(carrinhoCompra.frutas.indexOf(item) > -1) {  
        indice = carrinhoCompra.frutas.indexOf(item);  
        carrinhoCompra.frutas.splice(indice, 1);
        exibirItem();
    } else if(carrinhoCompra.higiene.indexOf(item) > -1) {  
        indice = carrinhoCompra.higiene.indexOf(item);  
        carrinhoCompra.higiene.splice(indice, 1);
        exibirItem();
    } else if(carrinhoCompra.laticinios.indexOf(item) > -1) {  
        indice = carrinhoCompra.laticinios.indexOf(item);  
        carrinhoCompra.laticinios.splice(indice, 1);
        exibirItem();
    } else if(carrinhoCompra.matinais.indexOf(item) > -1) {  
        indice = carrinhoCompra.matinais.indexOf(item);  
        carrinhoCompra.matinais.splice(indice, 1);
        exibirItem();
    } if(carrinhoCompra.temperos.indexOf(item) > -1) {  
        indice = carrinhoCompra.temperos.indexOf(item);  
        carrinhoCompra.temperos.splice(indice, 1);
        exibirItem();
    } else {
        window.alert('Esse item não está registrado na lista!');
        exibirItem();
    }
}

const botaoSim = document.querySelector('button#sim');
const botaoNao = document.querySelector('button#nao');
const botaoRemoverItem = document.querySelector('button#remover');

botaoSim.addEventListener('click', adicionarItem);
botaoNao.addEventListener('click', exibirItem);
botaoRemoverItem.addEventListener('click', removerItem);