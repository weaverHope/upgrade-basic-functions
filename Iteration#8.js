// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function removeDuplicates(param) {
    let removed = [];

    //Para cada element de duplicates
    //si el elemento no esta en removed, lo meto
    param.forEach(element => {
        if (!removed.includes(element)) {
            removed.push(element);
        }
    });
    return removed;
}

function repeatCounter(array, word) {
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == word) {
            counter++;
        }
    }
    return counter;
}

function repeatArray(array) {
    let repeat = [];
    repeat = removeDuplicates(array);
    for (let index = 0; index < repeat.length; index++) {
        repeat[index] = { value: repeat[index], counter: repeatCounter(array, repeat[index]) };
    }
    return repeat;
}

let repeat = [];
repeat = repeatArray(counterWords);
console.log(repeat);


