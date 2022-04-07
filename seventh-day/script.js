let display = document.querySelector('input#entrada');
display.value = '0';
display.focus();

function mostrarZero() {
    display.value += '0';
    return;
}

function mostrarUm() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '1';
    return;
}

function mostrarDois() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '2';
    return;
}

function mostrarTres() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '3';
    return;
}

function mostrarQuatro() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '4';
    return;
}

function mostrarCinco() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '5';
    return;
}

function mostrarSeis() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '6';
    return;
}

function mostrarSete() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '7';
    return;
}

function mostrarOito() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '8';
    return;
}

function mostrarNove() {
    if(display.value.substr(0, 1) == '0') {
        display.value = '';
    }

    display.value += '9';
    return;
}

function mostrarPonto() {
    for(let i = 0; i < display.value.length; i++) {
        if(display.value[i] == '.') {
            alert('Tem ponto!');
            return
        }
    }
    
    display.value += '.';
    return;
}

function limparDisplay() {
    display.value = '';
    mostrarZero();
    return;
}

function sairDoPrograma() {
    let sair = window.confirm('Deseja fechar a calculadora?');

    if(sair === true) {
        window.close() 
    }

    limparDisplay();
}

const btnZero = document.querySelector('button#zero');
const btnUm = document.querySelector('button#um');
const btnDois = document.querySelector('button#dois');
const btnTres = document.querySelector('button#tres');
const btnQuatro = document.querySelector('button#quatro');
const btnCinco = document.querySelector('button#cinco');
const btnSeis = document.querySelector('button#seis');
const btnSete = document.querySelector('button#sete');
const btnOito = document.querySelector('button#oito');
const btnNove = document.querySelector('button#nove');
const btnPonto = document.querySelector('button#ponto');
const btnLimpar = document.querySelector('button#limpar');
const btnSair = document.querySelector('button#sair');

btnZero.addEventListener('click', mostrarZero);
btnUm.addEventListener('click', mostrarUm);
btnDois.addEventListener('click', mostrarDois);
btnTres.addEventListener('click', mostrarTres);
btnQuatro.addEventListener('click', mostrarQuatro);
btnCinco.addEventListener('click', mostrarCinco);
btnSeis.addEventListener('click', mostrarSeis);
btnSete.addEventListener('click', mostrarSete);
btnOito.addEventListener('click', mostrarOito);
btnNove.addEventListener('click', mostrarNove);
btnPonto.addEventListener('click', mostrarPonto);
btnLimpar.addEventListener('click', limparDisplay);
btnSair.addEventListener('click', sairDoPrograma);