let counter = 0;
const username = prompt("Ingrese su nombre de usuario:");
const age = prompt("Ingrese su edad:");
const movies = [];
for(let i = 0; i < 3; i++){
    movies.push(prompt(`Ingrese la pelicula numero ${i+1}:`));
}

console.log(`Hola, soy${username} tengo ${age} años y mis peliculas favoritas son:`);

while(counter < movies.length){
    console.log(`Mi pelicula favorita número ${counter+1} es: ${movies[counter]}`);
    counter++;
}