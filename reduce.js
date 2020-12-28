const animaisReduce = [
    {
        nome: 'Rex',
        tipo: 'Cachorro',
        idade: 10,
        peso: 3,
    },
    {
        nome: 'Moana',
        tipo: 'Gato',
        idade: 2,
        peso: 3,
    },
    {
        nome: 'Gup',
        tipo: 'Peixe',
        idade: 3,
        peso: 3,
    },
    {
        nome: 'Rex',
        tipo: 'Cachorro',
        idade: 10,
        peso: 3,
    },
    {
        nome: 'Moana',
        tipo: 'Gato',
        idade: 2,
        peso: 3,
    },
    {
        nome: 'Gup',
        tipo: 'Peixe',
        idade: 3,
        peso: 3,
    },
    {
        nome: 'Rex',
        tipo: 'Cachorro',
        idade: 10,
        peso: 3,
    },
    {
        nome: 'Moana',
        tipo: 'Gato',
        idade: 2,
        peso: 3,
    },
    {
        nome: 'Gup',
        tipo: 'Peixe',
        idade: 3,
        peso: 3,
    },
]


// o valor inicial é ZERO por isso que ele é setado ali embaixo
const somaIdadesAnimais = animaisReduce.reduce((totalSoma, animaisReduce) => {
    return totalSoma + animaisReduce.idade;
}, 0);

console.log(somaIdadesAnimais);

const objetoIdadeMaisPesoAnimais = animaisReduce.reduce((total, animaisReduce) => {
    return {
        totalPeso: total.totalPeso + animaisReduce.peso,
        totalIdade: total.totalIdade + animaisReduce.idade
    }
}, {totalPeso: 0, totalIdade: 0 });

console.log(objetoIdadeMaisPesoAnimais);


const somarPesoCachorros = animaisReduce.reduce((total, animaisReduce) => {
    if(!animaisReduce.tipo === 'cachorro') {
        return total;
    }
    return total + animaisReduce.peso;
}, 0)

console.log(somarPesoCachorros);

// encadear filter com reduce

const totalSomaPesoCachorros = animaisReduce
    .filter((pet) => {
        return pet.tipo === 'Cachorro';
    })
    .reduce((total, pet) => {
        return total + pet.peso;
    }, 0);

console.log(totalSomaPesoCachorros);    
