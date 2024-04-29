// ARRAYS E LOOPS //

//Qualquer Array começa pelo indice 0

const listaUsuarios = ['Julia', 'Ricardo', 'Sandro', 'Arlindo', 'André'];

const idUsuarios = [22, 34, 17, 42, 20];  

console.log(listaUsuarios[4]);
console.log(idUsuarios[4]);  // Aqui eu estou acessando o Array(lista) através do índice do Array...

console.log(idUsuarios); // Aqui eu estou exibindo todo o Array

idUsuarios[2] = 49; // Aqui eu estou alterando o meu ID da posição 2 de 17 para 49 e logo abaixo exibindo o array com a alteração
console.log(idUsuarios);

listaUsuarios[5] = 'Ana'; // Aqui eu estou inserindo na posição 5 que antes não existia, mais um nome chamado Ana e logo abaixo exibindo novamente o Array com a alteração
console.log(listaUsuarios);
