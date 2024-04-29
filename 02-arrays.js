const frutas = ['Maçã', 'Banana', 'Pera', 'Uva', 'Abacaxi', 'Manga']; //Array

console.log(frutas.length); // Aqui eu estou consultando o tamanho desse Array através do .length...

frutas[6] = 'Melão'; // Adicionando uma nova fruta em uma posição não existente

console.log(frutas.length); // Exibindo após adiconar mais uma fruta na posição 6

console.log(frutas[frutas.length - 1]); // Aqui eu estou obtendo o último elemento do meu Array

//ou

let i = frutas.length - 1
console.log(frutas[i]);

// O proximo indice a ser adicionado é sempre o tamanho do array
frutas [frutas.length] = 'Lixia'; // Aqui eu estou passando o tamanho do Array e adicionando a fruta ao final dele...
console.log(frutas);