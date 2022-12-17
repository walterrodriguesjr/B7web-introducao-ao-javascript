function verde(){
    document.getElementById('exemplo').classList.remove("vermelho");
    document.getElementById('exemplo').classList.remove("azul");
    document.getElementById('exemplo').classList.add("verde");
}

function vermelho(){
    document.getElementById('exemplo').classList.remove("verde");
    document.getElementById('exemplo').classList.remove("azul");
    document.getElementById('exemplo').classList.add("vermelho");
}

function azul(){
    document.getElementById('exemplo').classList.remove("verde");
    document.getElementById('exemplo').classList.remove("vermelho");
    document.getElementById('exemplo').classList.add("azul");
}

function trocar() {
    if(document.querySelector('#botao2').classList.contains('preto')){
        document.querySelector('#botao2').classList.remove('preto');
        document.querySelector('#botao2').classList.add('amarelo');
    }else{
        document.querySelector('#botao2').classList.remove('amarelo');
        document.querySelector('#botao2').classList.add('preto');

    }
}