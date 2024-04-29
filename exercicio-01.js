const listaTeste = ['Matheus', 'Lucas', 'Jorge', 'Sandro'];
console.log(listaTeste); // LISTA SEM ALTERAÇÕES

listaTeste [listaTeste.length] = 'Julia';
console.log(listaTeste); // ADICIONANDO A JULIA NA ULTIMA POSIÇÃO

listaTeste[1] = 'Machado';
console.log(listaTeste); // ESTOU SUBSTITUINDO NO INDICE 1 DO ARRAY QUE É O LUCAS POR MACHADO

console.log('O nome no índice 1 é: '+listaTeste[2]);