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











