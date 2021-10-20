// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados.Puedes usar este array para probar tu función:
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
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

console.log(removeDuplicates(duplicates));
