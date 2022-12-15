/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
let res = lista.toString();
console.log(res);
 */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
let res = lista.join('-');
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
let res = lista.indexOf('Corante');
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
lista.pop();
let res = lista;
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
lista.shift();
let res = lista;
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
lista.push('Leite');
let res = lista;
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
lista[0] = 'ovos';
let res = lista;
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
lista.splice(0,1);
let res = lista;
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
let lista2 = [
    'prato',
    'liquidificador',
    'forno'
];
let res = lista.concat(lista2);
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
lista.sort();
let res = lista;
console.log(res); */

/* let lista = [
    'ovo',
    'Farinha',
    'Corante',
    'Massa'
];
lista.reverse();
let res = lista;
console.log(res); */

/* let lista =[45, 4, 9, 16, 25];
let lista2 = [];
lista2 = lista.map(function(item) {
    return item * 2;
}) 
let res = lista2;
console.log(res);*/

//SEGUNDA MANEIRA DE PREENCHER UM SEGUNDO ARRAY, COM BASE NO PRIMEIRO
/* let lista =[45, 4, 9, 16, 25];
let lista2 = [];
for(let i in lista){
    lista2.push(lista[i] + 10);
}
let res = lista2;
console.log(res); */

/* let lista =[45, 4, 9, 16, 25];
let lista2 = [];
lista2 = lista.filter(function(item) {
    return item < 20;
});
let res = lista2;
console.log(res); */

/* let lista =[45, 4, 9, 16, 25];
let lista2 = [];
lista2 = lista.every(function(item) {
    return item > 3;
});
let res = lista2;
console.log(res); */

/* let lista =[45, 4, 9, 16, 25];
let lista2 = [];
lista2 = lista.some(function(item) {
    return item > 40;
});
let res = lista2;
console.log(res); */

/* let lista =[45, 4, 9, 16, 25];
let lista2 = [];
lista2 = lista.find(function(item) {
    return item < 4;
})
let res = lista2;
console.log(res); */

let lista =[45, 4, 9, 16, 25];
let lista2 = [];
lista2 = lista.findIndex(function(item) {
    return item == 4;
})
let res = lista2;
console.log(res);


