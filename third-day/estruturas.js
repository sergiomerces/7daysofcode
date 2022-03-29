let game = document.querySelector('div#game');
let trilha = 'trilha';
let aprendizado = [];

function iniciarGame() {
    limparTela();
    escolherTrilha();
}

function limparTela() {
    game.textContent = null;
}

function escolherTrilha() {
    game.style.lineHeight = '100px';
    game.innerHTML = `<p>Qual trilha você deseja seguir?</p>
    <p><button class='btn-opcoes' id='btn-frontend'>Frontend</button>
    <button class='btn-opcoes' id='btn-backend'>Backend</button></p>`;

    const frontend = document.querySelector('button#btn-frontend');
    const backend = document.querySelector('button#btn-backend');
    frontend.addEventListener('click', seguirFrontend);
    backend.addEventListener('click', seguirBackend);
}

function seguirFrontend() {
    trilha = 'Frontend';
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O desenvovedor Frontend trabalha nos elementos de interface com o usuário.</em></p>
    <p>Deseja aprender Lógica de Programação?</p>
    <p><button class='btn-opcoes' id='simLogica'>Sim</button>
    <button class='btn-opcoes' id='naoLogica'>Não</button></p>`;

    const simLogica = document.querySelector('button#simLogica');
    const naoLogica = document.querySelector('button#naoLogica');
    simLogica.addEventListener('click', marcarLogica);
    naoLogica.addEventListener('click', pularLogica);
}

function seguirBackend() {
    trilha = 'Backend';
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O desenvovedor Backend trabalha com o processamento de dados e retinas que rodam no servidor.</em></p>
    <p>Deseja aprender Lógica de Programação?</p>
    <p><button class='btn-opcoes' id='simLogica'>Sim</button>
    <button class='btn-opcoes' id='naoLogica'>Não</button></p>`;

    const simLogica = document.querySelector('button#simLogica');
    const naoLogica = document.querySelector('button#naoLogica');
    simLogica.addEventListener('click', marcarLogicaBack);
    naoLogica.addEventListener('click', pularLogicaBack);
}

function marcarLogica() {
    aprendizado.push('Lógica de Programação');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>A Lógica de Programação é o alicerce do conhecimento de todo programador.</em></p>
    <p>Deseja aprender HTML 5?</p>
    <p><button class='btn-opcoes' id='simHTML'>Sim</button>
    <button class='btn-opcoes' id='naoHTML'>Não</button></p>`;

    const simHTML = document.querySelector('button#simHTML');
    const naoHTML = document.querySelector('button#naoHTML');
    simHTML.addEventListener('click', marcarHTML);
    naoHTML.addEventListener('click', pularHTML);
}

function pularLogica() {
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Sem conhecimentos de Lógica de Progamação o aprendizado pode ficar mais difícil, você pode adicionar mais tarde.</em></p>
    <p>Deseja aprender HTML 5?</p>
    <p><button class='btn-opcoes' id='simHTML'>Sim</button>
    <button class='btn-opcoes' id='naoHTML'>Não</button></p>`;

    const simHTML = document.querySelector('button#simHTML');
    const naoHTML = document.querySelector('button#naoHTML');
    simHTML.addEventListener('click', marcarHTML);
    naoHTML.addEventListener('click', pularHTML);
}

function marcarHTML() {
    aprendizado.push('HTML 5');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O HTML é uma linguagem de marcação que dá sentido semântico ao conteúdo da página web.</em></p>
    <p>Deseja aprender CSS 3?</p>
    <p><button class='btn-opcoes' id='simCSS'>Sim</button>
    <button class='btn-opcoes' id='naoCSS'>Não</button></p>`;

    const simCSS = document.querySelector('button#simCSS');
    const naoCSS = document.querySelector('button#naoCSS');
    simCSS.addEventListener('click', marcarCSS);
    naoCSS.addEventListener('click', pularCSS);
}

function pularHTML() {
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Sem HTML ficará muito difícil você desenvolver conteúdo para web, essa opção pode ser adicionada depois.</em></p>
    <p>Deseja aprender CSS 3?</p>
    <p><button class='btn-opcoes' id='simCSS'>Sim</button>
    <button class='btn-opcoes' id='naoCSS'>Não</button></p>`;

    const simCSS = document.querySelector('button#simCSS');
    const naoCSS = document.querySelector('button#naoCSS');
    simCSS.addEventListener('click', marcarCSS);
    naoCSS.addEventListener('click', pularCSS);
}

function marcarCSS() {
    aprendizado.push('CSS 3');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>CSS é uma linguagem de estilização responsável pela aparência de uma página web.</em></p>
    <p>Deseja aprender JavaScript?</p>
    <p><button class='btn-opcoes' id='simJavaScript'>Sim</button>
    <button class='btn-opcoes' id='naoJavaScript'>Não</button></p>`;

    const simJavaScript = document.querySelector('button#simJavaScript');
    const naoJavaScript = document.querySelector('button#naoJavaScript');
    simJavaScript.addEventListener('click', marcarJavaScript);
    naoJavaScript.addEventListener('click', pularJavaScript);
}

function pularCSS() {
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Sem conhecimentos em CSS você não cnseguirá entregar conteúdos com apresentações atrativas.</em></p>
    <p>Deseja aprender JavaScript?</p>
    <p><button class='btn-opcoes' id='simJavaScript'>Sim</button>
    <button class='btn-opcoes' id='naoJavaScript'>Não</button></p>`;

    const simJavaScript = document.querySelector('button#simJavaScript');
    const naoJavaScript = document.querySelector('button#naoJavaScript');
    simJavaScript.addEventListener('click', marcarJavaScript);
    naoJavaScript.addEventListener('click', pularJavaScript);
}

function marcarJavaScript() {
    aprendizado.push('JavaScript');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O JavaScript é uma linguagem de programação client-side responsável pelo comportamento dos elementos da página web.</em></p>
    <p>Deseja aprender controle de versionamento Git?</p>
    <p><button class='btn-opcoes' id='simGit'>Sim</button>
    <button class='btn-opcoes' id='naoGit'>Não</button></p>`;

    const simGit = document.querySelector('button#simGit');
    const naoGit = document.querySelector('button#naoGit');
    simGit.addEventListener('click', marcarGit);
    naoGit.addEventListener('click', pularGit);
}

function pularJavaScript() {
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Sem JavaScript seu código sempre permanecerá estático e limitado.</em></p>
    <p>Deseja aprender controle de versionamento Git?</p>
    <p><button class='btn-opcoes' id='simGit'>Sim</button>
    <button class='btn-opcoes' id='naoGit'>Não</button></p>`;

    const simGit = document.querySelector('button#simGit');
    const naoGit = document.querySelector('button#naoGit');
    simGit.addEventListener('click', marcarGit);
    naoGit.addEventListener('click', pularGit);
}

function marcarGit() {
    aprendizado.push('Git');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O controle de versionameto Git permite gerenciar o código de forma rápida, organizada e eficiente.</em></p>
    <p>Deseja aprender Bootstrap ou JQuery?</p>
    <p><button class='btn-opcoes' id='bootstrap'>Bootstrap</button>
    <button class='btn-opcoes' id='jquery'>JQuery</button></p>`;

    const bootstrap = document.querySelector('button#bootstrap');
    const jquery = document.querySelector('button#jquery');
    bootstrap.addEventListener('click', marcarBootstrap);
    jquery.addEventListener('click', marcarJQquery);
}

function pularGit() {
    game.innerHTML = `<p><em>O controle de versionameto Git permite gerenciar o código de forma rápida, organizada e eficiente.</em></p>
    <p>Deseja aprender Bootstrap ou JQuery?</p>
    <p><button class='btn-opcoes' id='bootstrap'>Bootstrap</button>
    <button class='btn-opcoes' id='jquery'>JQuery</button></p>`;

    const bootstrap = document.querySelector('button#bootstrap');
    const jquery = document.querySelector('button#jquery');
    bootstrap.addEventListener('click', marcarBootstrap);
    jquery.addEventListener('click', marcarJQquery);
}

function marcarBootstrap() {
    aprendizado.push('Bootstrap');
    
    game.style.lineHeight = '30px';
    game.innerHTML = `<p><em>O Bootstrap é um framework que acelera a estilização de páginas com modelos pré-definidos personalizáveis.</em></p>
    <p>Deseja aprender ReactJS, Angular ou VueJS?</p>
    <p><button class='btn-opcoes' id='reactjs'>ReactJS</button>
    <button class='btn-opcoes' id='angular'>Angular</button></p>
    <button class='btn-opcoes' id='vuejs'>VueJS</button></p>`;

    const reactjs = document.querySelector('button#reactjs');
    const angular = document.querySelector('button#angular');
    const vuejs = document.querySelector('button#vuejs');
    reactjs.addEventListener('click', marcarReactjs);
    angular.addEventListener('click', marcarAngular);
    vuejs.addEventListener('click', marcarVueJS);
}

function marcarJQquery() {
    aprendizado.push('JQuery');
    
    game.style.lineHeight = '30px';
    game.innerHTML = `<p><em>O JQuery é uma bibliotecamuito rica e poderosa que acelera as implementações JavaScript.</em></p>
    <p>Deseja aprender ReactJS, Angular ou VueJS?</p>
    <p><button class='btn-opcoes' id='reactjs'>ReactJS</button>
    <button class='btn-opcoes' id='angular'>Angular</button></p>
    <button class='btn-opcoes' id='vuejs'>VueJS</button></p>`;

    const reactjs = document.querySelector('button#reactjs');
    const angular = document.querySelector('button#angular');
    const vuejs = document.querySelector('button#vuejs');
    reactjs.addEventListener('click', marcarReactjs);
    angular.addEventListener('click', marcarAngular);
    vuejs.addEventListener('click', marcarVueJS);
}

function marcarReactjs() {
    aprendizado.push('ReactJS');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>React é uma biblioteca criada no Facebook para facilitar a criação e a atualização de páginas dinâmicas por meio de componentes.</em></p>
    <p>Deseja tornar a trilha FullStack?</p>
    <p><button class='btn-opcoes' id='fullstack'>FullStack</button>
    <button class='btn-opcoes' id='finalizar'>Finalizar</button></p>`;

    const fullstack = document.querySelector('button#fullstack');
    const finalizar = document.querySelector('button#finalizar');
    fullstack.addEventListener('click', seguirBackend);
    finalizar.addEventListener('click', finalizarTrilha);
}

function marcarAngular() {
    aprendizado.push('Angular');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Angular é um framework JavaScript modular que facilita a manutenção de layouts complexos.</em></p>
    <p>Deseja tornar a trilha FullStack?</p>
    <p><button class='btn-opcoes' id='fullstack'>FullStack</button>
    <button class='btn-opcoes' id='finalizar'>Finalizar</button></p>`;

    const fullstack = document.querySelector('button#fullstack');
    const finalizar = document.querySelector('button#finalizar');
    fullstack.addEventListener('click', seguirBackend);
    finalizar.addEventListener('click', finalizarTrilha);
}

function marcarVueJS() {
    aprendizado.push('VueJS');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Vue é um framework para construir interfaces de  usuário com ênfase na versatilidade e desempenho.</em></p>
    <p>Deseja tornar a trilha FullStack?</p>
    <p><button class='btn-opcoes' id='fullstack'>FullStack</button>
    <button class='btn-opcoes' id='finalizar'>Finalizar</button></p>`;

    const fullstack = document.querySelector('button#fullstack');
    const finalizar = document.querySelector('button#finalizar');
    fullstack.addEventListener('click', seguirBackend);
    finalizar.addEventListener('click', finalizarTrilha);
}

//Backend ================================================

function marcarLogicaBack() {
    aprendizado.push('Lógica de Programação');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>A Lógica de Programação é o alicerce do conhecimento de todo programador.</em></p>
    <p>Deseja aprender Controle de Versionamento Git?</p>
    <p><button class='btn-opcoes' id='simGitBack'>Sim</button>
    <button class='btn-opcoes' id='naoGitBack'>Não</button></p>`;

    const simGitBack = document.querySelector('button#simGitBack');
    const naoGitBack = document.querySelector('button#naoGitBack');
    simGitBack.addEventListener('click', marcarGitBack);
    naoGitBack.addEventListener('click', pularGitBack);
}

function pularLogicaBack() {
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Sem conhecimentos de Lógica de Progamação o aprendizado pode ficar mais difícil, você pode adicionar mais tarde.</em></p>
    <p>Deseja aprender Controle de Versionamento Git?</p>
    <p><button class='btn-opcoes' id='simGitBack'>Sim</button>
    <button class='btn-opcoes' id='naoGitBack'>Não</button></p>`;

    const simGitBack = document.querySelector('button#simGitBack');
    const naoGitBack = document.querySelector('button#naoGitBack');
    simGitBack.addEventListener('click', marcarGitBack);
    naoGitBack.addEventListener('click', pularGitBack);
}

function marcarGitBack() {
    aprendizado.push('Git');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O controle de versionameto Git permite gerenciar o código de forma rápida, organizada e eficiente.</em></p>
    <p>Deseja aprender Java ou C#?</p>
    <p><button class='btn-opcoes' id='java'>Java</button>
    <button class='btn-opcoes' id='csharp'>C#</button></p>`;

    const java = document.querySelector('button#java');
    const csharp = document.querySelector('button#csharp');
    java.addEventListener('click', marcarJava);
    csharp.addEventListener('click', marcarCsharp);
}

function pularGitBack() {
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O controle de versionameto Git permite gerenciar o código de forma rápida, organizada e eficiente.</em></p>
    <p>Deseja aprender Java ou C#?</p>
    <p><button class='btn-opcoes' id='java'>Java</button>
    <button class='btn-opcoes' id='csharp'>C#</button></p>`;

    const java = document.querySelector('button#java');
    const csharp = document.querySelector('button#csharp');
    java.addEventListener('click', marcarJava);
    csharp.addEventListener('click', marcarCsharp);
}

function marcarJava() {
    aprendizado.push('Java');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>Java é uma linguagem compilada, muito poderosa, usada para aplicações desktops, web e mobile.</em></p>
    <p>Deseja aprender NodeJS ou PHP?</p>
    <p><button class='btn-opcoes' id='nodejs'>NodeJS</button>
    <button class='btn-opcoes' id='php'>PHP</button></p>`;

    const nodejs = document.querySelector('button#nodejs');
    const php = document.querySelector('button#php');
    nodejs.addEventListener('click', marcarNodeJS);
    php.addEventListener('click', marcarPHP);
}

function marcarCsharp() {
    aprendizado.push('C#');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>C# é uma linguagem compilada, criada pela Microsoft, usada para aplicações desktops, web e mobile.</em></p>
    <p>Deseja aprender NodeJS ou PHP?</p>
    <p><button class='btn-opcoes' id='nodejs'>NodeJS</button>
    <button class='btn-opcoes' id='php'>PHP</button></p>`;

    const nodejs = document.querySelector('button#nodejs');
    const php = document.querySelector('button#php');
    nodejs.addEventListener('click', marcarNodeJS);
    php.addEventListener('click', marcarPHP);
}

function marcarNodeJS() {
    aprendizado.push('NodeJS');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>NodeJS é um ambiente que torna possível a execução do JavaScript como server-side.</em></p>
    <p>Deseja aprender MariaDB ou MongoDB?</p>
    <p><button class='btn-opcoes' id='maria'>MariaDB</button>
    <button class='btn-opcoes' id='mongo'>MongoDB</button></p>`;

    const maria = document.querySelector('button#maria');
    const mongo = document.querySelector('button#mongo');
    maria.addEventListener('click', marcarMariaDB);
    mongo.addEventListener('click', marcarMongoDB);
}

function marcarPHP() {
    aprendizado.push('PHP');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O PHP permite o tratamnto de dados de formulários e a integração cm banco de dados.</em></p>
    <p>Deseja aprender MariaDB ou MongoDB?</p>
    <p><button class='btn-opcoes' id='maria'>MariaDB</button>
    <button class='btn-opcoes' id='mongo'>MongoDB</button></p>`;

    const maria = document.querySelector('button#maria');
    const mongo = document.querySelector('button#mongo');
    maria.addEventListener('click', marcarMariaDB);
    mongo.addEventListener('click', marcarMongoDB);
}

function marcarMariaDB() {
    aprendizado.push('MariaDB');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O MariaDB é um banco de dados relacional opensource fork do MySQL.</em></p>
    <p>Deseja seguir a trilha FullStack ou finalizar?</p>
    <p><button class='btn-opcoes' id='fullstack'>FullStack</button>
    <button class='btn-opcoes' id='finalizar'>Finalizar</button></p>`;

    const fullstack = document.querySelector('button#fullstack');
    const finalizar = document.querySelector('button#finalizar');
    fullstack.addEventListener('click', seguirFrontend);
    finalizar.addEventListener('click', finalizarTrilha);
}

function marcarMongoDB() {
    aprendizado.push('MongoDB');
    
    game.style.lineHeight = '50px';
    game.innerHTML = `<p><em>O MongoDB é um banco de dados não relacional opensource.</em></p>
    <p>Deseja seguir a trilha FullStack ou finalizar?</p>
    <p><button class='btn-opcoes' id='fullstack'>FullStack</button>
    <button class='btn-opcoes' id='finalizar'>Finalizar</button></p>`;

    const fullstack = document.querySelector('button#fullstack');
    const finalizar = document.querySelector('button#finalizar');
    fullstack.addEventListener('click', seguirFrontend);
    finalizar.addEventListener('click', finalizarTrilha);
}

function finalizarTrilha() {
    limparTela();
    game.style.height = 'auto';
    game.style.lineHeight = '20px';
    game.innerHTML = `<h2>Trilha de Aprendizado: ${trilha}</h2>`;

    aprendizado.forEach(elemento => {
        game.innerHTML += `<p>${elemento}</p>`
    });

    game.innerHTML += `<p><button class='btn-competencia' id='competencia'>Nova Competência</button>`

    const competencia = document.querySelector('button#competencia');
    competencia.addEventListener('click', inserirNovaCompetencia);
}

function inserirNovaCompetencia() {
    let novaCompetencia = window.prompt('Insira uma linguagem ou tecnologia por vez');
    aprendizado.push(novaCompetencia);

    finalizarTrilha();
}

const start = document.querySelector('button#btn-inicio');
start.addEventListener('click', iniciarGame);