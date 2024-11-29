window.alert('Alerta')

console.log('Mensagem do console')
console.log('Largura e altura da janela: ' + window.innerWidth + 'x' + window.innerHeight);
localStorage.setItem('nome', 'Rafael');

let nome = localStorage.getItem('nome');
console.log('Nome: ' + nome);

let div = document.createElement('div');
div.id = 'meuDiv'
document.body.appendChild(div)

div.innerText = 'DIV';
div.style.backgroundColor = 'cyan';
div.style.padding = '30px';
div.style.textAlign = 'center';
div.style.fontSize = '60px';

document.addEventListener('DOMContentLoaded', function() {
    let p = document.querySelector('p');
    if (p) {
    p.innerText = 'Texto P';
    p.style.padding = '30px';
    p.style.textAlign = 'center';
    p.style.fontSize = '60px';
    p.style.backgroundColor = 'cyan';}});

    let img = document.querySelector('img');
    if (img) {
        img.setAttribute('title', 'Imagem dinâmica');}

let botao = document.createElement('button');
botao.innerText = 'Clique aqui';
document.body.appendChild(botao);
botao.addEventListener('click', function() {
    div.innerText = 'Nova DIV';
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Usuario pressionou enter');
    }
});