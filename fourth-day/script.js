function adivinharNumero() {
    let numero = Math.trunc(Math.random() * 11);
    let palpite = Number(document.querySelector('input#palpite').value);

    if(palpite == '' || palpite == null) {
        window.alert('Chute um número para continuar!');
        palpite.focus();
        return;
    } else if(palpite < 0 || palpite > 10) {
        window.alert('O chute de ser um número maior 0 e menor que 10!');
        palpite.focus();
        return;
    } else if(isNaN(palpite)) {
        window.alert('Letras e símbolos não valem,chuete um número!');
        palpite.focus();
        return;
    }

    for(let i = 0; i < 4; i++) {
        if(numero === palpite) {
            document.querySelector('h2#display').textContent = `Você acertou o número é ${numero}`;
        } else {
            window.alert(`O número não é ${palpite}!`);
            palpite.focus();
        }
    }

    document.querySelector('h2#display').textContent = 'Game Over!'
}

const botao = document.querySelector('button#chutar');
botao.addEventListener('click', adivinharNumero);