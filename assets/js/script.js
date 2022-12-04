//01-MÓDULO

/* alert("Hello World");
console.log("imprimindo no log"); */


/* let idade = 90;
let nome = "Walter";
console.log(nome);
console.log(idade); */


/* let nome = "Rodrigues";
let idade = 36;
let logado = true;
let lista = ['ovo', 'cenoura', 'leite', 'chocolate'];
let nomeCompleto = {nome: "Walter rodrigues Junior", idade: 36, cidade: "Curitiba"};

console.log(nome);
console.log(idade);
console.log(logado);
console.log(lista);
console.log(nomeCompleto); */


// ESTE É UM COMENTÁRIO 


/* exercício de variáveis #1 */
/* let car = "Ferrari"; 
console.log(car);

let precoBolo = 19.99;
console.log(precoBolo);

let cidade = "São Paulo";
console.log(cidade); */


/* let x = 2;
let y = 5;

let nome = "Walter";
let sobreNome = "Rodrigues";
let nomeCompleto = nome + ' ' + sobreNome;

console.log(x + y);
console.log(nomeCompleto); */


/* let nome = "Walter";
let sobreNome = "Rodrigues";

let nomeCompleto = `${nome} ${sobreNome}`;
console.log(nomeCompleto); */


/* let idade = 10;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
} */


/* let idade = 20;

if (idade < 16) {
    console.log("Você é uma criança.");
} else if (idade >= 16 && idade < 18) {
    console.log("Você é um adolescente.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
} */


/* exercício de condiconal #2 */
/* let x = 10;
let y = 5;
console.log(x > y);

let a = '10';
let b = 10;
console.log(a === b);

let preco = 48;
if(preco <= 45){
    console.log("O preço da carne está barato.");
}else{
    console.log("O preço da carne está cara.");
} */


/* let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro.' : 'Você não é membro.');

console.log("Frete: " + shipping); */


/* let profession = "bombeiro";
switch (profession) {
    case 'fiscal':
        console.log("sua camisa será verde.");
        break;
    case 'policial':
        console.log("sua camisa será azul.");
        break;
    case 'bombeiro':
        console.log("sua camisa será vermelha.");
        break;
    default:
        console.log("sem camisa definida.");
        break;
} */


//02-MÓDULO

/* function gravidade(){
    console.log('A gravidade do planeta é:');
    console.log(9.8);
}

gravidade(); */

/* function somar(n1, n2){
    let resultado = n1+n2;
    console.log("A soma dos números " + n1 + " e " + n2 + ' é: ' + (resultado));
    console.log(`A soma dos números ${n1} e ${n2} é: ${resultado}`);
}
somar(3, 4); */


/* function nomeCompleto(nome, sobrenome){
    return `O nome completo é: ${nome} ${sobrenome}.`;
}
let nome = nomeCompleto("Walter", "Rodrigues");
console.log(nome); */


/* function maiorDeIdade(idade){
    if(idade >=18){
        return `Você tem ${idade} anos de idade, é maior de idade.`;
    }else{
        return `Você tem ${idade} anos de idade, é menor de idade.`;
    }
}

let result = maiorDeIdade(20);
console.log(result); */

/* function validar(usuario, senha){
    if(usuario === 'pedro' && senha === '123'){
        return true;
    }else{
        return false;
    }
}

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);
if(validacao){
    console.log('Acesso concedido!');
}else{
    console.log('Acesso negado');
} */


/* const somar = (x, y) => {
    return x + y;
}

console.log(somar(10,5)); */

/* let count = 0;

function add(){
    count++;
}
add();
add();

console.log(count); */


/* function addSquares(a,b){
    function square(x){
        return x * x;
    }
    
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquares(2,3)); */


/* let colors = [
    'azul',
    'verde',
    'amarelo',
];
console.log(colors); */

/* let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'açucar',
];
ingredientes.pop();
ingredientes.shift();
ingredientes.push('cebola');
console.log(`Total de ingredientes: ${ingredientes.length}`);
console.log(ingredientes); */


/* let carros = [
    'BMW',
    'Ferrari',
    'Mercedes',
];

console.log('1. ' + carros[1]);

carros[1] = 'Audi';

console.log(carros);

carros.push('Volvo');
console.log(carros);

console.log(carros.length); */


/* let personagem = {
    nome: 'Walter',
    idade: 36,
    pais: 'Brasil'
};


console.log(personagem);
console.log(`${personagem.nome} tem ${personagem.idade} anos de idade.`); */


/* let pessoa = {
    nome: "Walter",
    sobrenome: "Rodrigues",
    idade: 36,
    nomeCompleto: function() {
        return `Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade.`;
    }
}
console.log(pessoa.nomeCompleto()); */


/* for(let n = 0; n < 10; n++){
console.log(`O número é: ${n}`);
}
 */


/* let cores = [
    'preto',
    'branco',
    'azul',
    'vermelho'
];

let cores2 = [
    {nome: 'preto', qt: 5},
    {nome: 'verde', qt: 10},
    {nome: 'amarelo', qt: 15},
]
 */
/* for(let n = 0; n < cores.length; n++){
console.log(cores[n]);
} */

/* for(let i in cores){
    console.log(cores[i]);
} */

/* for(let cor of cores){
    console.log(cor);
} */

/* for(let cor of cores2){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
} */


/* let numero = 0;
while (numero < 10){
    console.log(`O número da vez é: ${numero}`);
    numero++;
} */

/* let fruits = [
    'Maça',
    'Uva',
    'Banana',
];


for(let fruit of fruits){
    console.log(fruit);
}

let cont = 0;
while (cont <= 100) {
    console.log(cont);
    cont++;
} */


/* let fruits = [
    'Maça',
    'Uva',
    'Laranja',
    'Banana',
]

fruits.push('Pera');
console.log(fruits); */


/* let fruits = [
    'Maça',
    'Uva',
    'Laranja',
    'Banana',
]

fruits.sort();
fruits.reverse();

console.log(fruits);| */

/* let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrai', year: 2020},
]

cars.sort((a, b) => a.year - b.year);
console.log(cars); */


/* let fruits = [
    'Maça',
    'Uva',
    'Laranja',
    'Banana',
] */

/* let bigFruits = fruits.filter((item) => {
    if(item.length > 4){
        return true;
    }else{
        return false;
    }
}); */

/* console.log(bigFruits); */

/* var x = document.getElementById("teste").textContent;
console.log(x);

var li = document.querySelector("#teste ul li").textContent;
console.log(li); */



 /* let botao = document.querySelector('.botao');
botao.addEventListener("click", clic); */

/* function clic() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');
    
    let newli = document.createElement("li");
    newli.innerText = "item adicionado";

    ul.appendChild(newli);
    ul.prepend(newli);

    ul.innerHTML += "<li>item adicionado 2</li>";

  }  */

/*   let botao = document.querySelector('.botao');
  botao.addEventListener("click", clic);

  function clic() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul'); */

    /* const newButton = document.createElement('button');
    newButton.innerHTML = "novo botão"; */

    /* let newUl = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item numero: " + (i + 1);
        newUl.append(newLi);
    }
    ul.after(newUl); */

    /* ul.after(newButton);

    ul.before("antes")
    ul.after("depois"); */
  //}


/* document.querySelector(".botao").addEventListener("click", clic);

function clic(){
    let teste = document.querySelector("#teste");
    let li = teste.children[0].children[0];
    li.style.backgroundColor = 'blue';
} */


/* document.querySelector(".botao").addEventListener("click", clic);

function clic(){
    const botao = document.querySelector(".botao");
    botao.classList.add("nova");
    console.log(botao);
    botao.classList.

    
} */

/* document.querySelector(".input").addEventListener("keydown", apertou);
document.querySelector(".input").addEventListener("keyup", soltou);
document.querySelector(".input").addEventListener("keypress", segurou)



function apertou(){
    console.log("apertou");
}

function segurou(){
    console.log("segurou");
}

function soltou(){
    console.log("soltou");
} */


/* function soltou(e){

    console.log(e.key);
}

const input = document.querySelector(".input");
input.addEventListener('keyup', soltou); */


/* let input = document.querySelector(".input");
let lista = document.querySelector("#teste");

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e){
    if(e.key === 'Enter'){
      let newLi = document.createElement('li');
      newLi.innerHTML = input.value;
      lista.children[0].appendChild(newLi);
      input.value = '';
    }
} */


/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
} */


/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("Walter", 36);
let p2 = new Person("Charlene", 34);
let p3 = new Person("Renan", 34);

console.log(`Meu nome é ${p1.name} e tenho ${p1.age} anos de idade.`); */


class Person {

    steps = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        this.age = newAge;
    }

}

let p1 = new Person("Walter", 36);
let p2 = new Person("Charlene", 34);
let p3 = new Person("Renan", 34);

p1.setAge(20);

console.log(`Meu nome é ${p1.name} e tenho ${p1.age} anos de idade.`);
console.log(`Meu nome é ${p2.name} e tenho ${p2.age} anos de idade.`);
console.log(`Meu nome é ${p3.name} e tenho ${p3.age} anos de idade.`);

p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);




















