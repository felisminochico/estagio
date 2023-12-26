// alert('Olá, Mundo');

function carregar(){
    let hora = new Date().getHours();
    let cabecalho = window.document.getElementsByTagName('header')[0];
    let titulo = window.document.getElementsByTagName('h1')[1];
    let rodape = window.document.getElementsByTagName('footer')[0];

    hora = 1

    if(hora > 18 || hora <= 6){
        cabecalho.style.backgroundColor = '#012E40'
        titulo.style.color = '#012E40';
        rodape.style.backgroundColor = '#012E40'
    }
}