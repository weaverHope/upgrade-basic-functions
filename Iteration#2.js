// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
var cosas;
cosas = findLongestWord(avengers);
console.log(cosas);

function findLongestWord(param) {
  //console.log(typeof(param));
  if (typeof param == "object") {
    let max = param[0].length;
    // console.log(param);
    // console.log(max);
    // console.log("length is: " + param.length);
    let positionMax;
    for (var index = 0; index < param.length; index++) {
      if (avengers[index].length > max) {
        max = avengers[index].length;
        positionMax = index;
      }
    }
    return param[positionMax];
  } else {
    console.log("El parametro no es un array");
  }
