const numeroProcurado = 4302;
const nomes = [12, 178, 1223, 109, 845, 350, 4302, 1034, 2104, 2011, 4302];

let numeroAprovado = false;

for (let aprovado of nomes) {
    if (aprovado === numeroProcurado) {
        numeroAprovado = true;
        break;
    }
}       
if (numeroAprovado === true) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}


const numeroInscricao = 4302;
const aprovados = [12, 178, 1223, 109, 845, 350, 4302, 1034, 2104, 2011, 4302];

for (let aprovado of aprovados) {
    if (aprovado === numeroInscricao) {
        numeroAprovado = true;
        break;
    }
}       
if (numeroAprovado === true) {
    return 'APROVADO';
} else {
    return 'REPROVADO';
}
