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