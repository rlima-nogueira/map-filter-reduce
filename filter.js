const pets = [
    {
        nome: 'Rex',
        tipo: 'Cachorro',
        idade: 10
    },
    {
        nome: 'Moana',
        tipo: 'Gato',
        idade: 2
    },
    {
        nome: 'Gup',
        tipo: 'Peixe',
        idade: 3
    },
]
/**USANDO O FILTER */
const eMenorQueCinco = (numero) => {
    return numero < 5; 
};

// passa dentro do objeto e retorna todos pets com idade menor que 5 anos
const verificaIdadesPets = pets.filter(({idade}) => {
    return eMenorQueCinco(idade);
});
/**------------------------------------------ */

console.log('USANDO FILTER ', verificaIdadesPets);
