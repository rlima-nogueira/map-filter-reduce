const animaisForEach = [
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


const newArray = [];
animaisForEach.forEach((animais) => {
   if (animais.nome === 'Moana') {
       newArray.push(animais.nome);
   } 
});

console.log(newArray);