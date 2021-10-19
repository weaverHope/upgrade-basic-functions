//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sum = 0;
    for (let index = 0; index < param.length; index++) {
        sum += param[index];
    }
    return sum;
}

function average(param) {
    return sumAll(param) / param.length;
}

console.log(average(numbers));
