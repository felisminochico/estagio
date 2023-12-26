// alert('Olá, Mundo');

function carregar(){
    let hora = new Date().getHours();
    let cabecalho = window.document.getElementsByTagName('header');

    if(hora > 10){
        cabecalho.style.backgroundColor = '#012E40'
    }
}