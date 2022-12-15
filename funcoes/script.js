function alterar(titulo, campo) {
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = campo;
}

alterar("alterei o título", "alterei o campo");

function somar(x, y) {
    let total = x + y;
    document.getElementById('campo').value = total;
}

function multiplicar(x, y) {
    let total = x * y;
    return total;
}

var resultado = multiplicar(2, 3);
console.log(resultado);

document.getElementById('campo').value = resultado;



