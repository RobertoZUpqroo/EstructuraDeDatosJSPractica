let numbers = [2,5,6,3,10]; //Definir un array y sus valores

console.log(numbers.length); //.length función que permite conocer lo largo de un array

console.log(numbers[0]); //Para llamar los numeros debemos de escribir en un corchete la posición del elemento

console.log(numbers[numbers.length-1]); //Acceder siempre a la ultima posición de un array

console.log(numbers.at(-3)); //Esta es otra manera de llamar un array, pero escribiendolo de esta manera se pueden poner numeros negativos ejemplo -1 para acceder a los ultimos digitos

for(let i=0; i<numbers.length; i++){  //Nos permite imprimir todos los valores del array en posición del 0 a n
    console.log(numbers[i]);
}

for(let i=numbers.length -1; i>=0; i--){  //Nos permite imprimir todos los valores del array en posición del el ultimo al 0
    console.log(numbers[i]);
}

function show(arr){
    for(let i=0; i<arr.length; i++){ //En una función
        console.log(arr[i]);
    }
}

let letras = ["erdinger", "corona", "delirium"]

show(letras)
function show(arr){
    for(let i=0; i<arr.length; i++){ //En una función
        console.log(arr[i]);
    }
}