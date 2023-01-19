// let nombreMaestro2 = prompt(" ¿cual es tu nombre maestro Pokemon? ");

// function nombreMaestro() {
//   while (nombreMaestro2 == "") {
//     alert("Debes ingresar un nombre");
//     nombreMaestro2 = prompt("¿cual es tu nombre maestro Pokemon?");
//   }
// }
// nombreMaestro();

// if (nombreMaestro2 != "") {
//   alert("Bienvenid@ maestro " + nombreMaestro2);
// }

// // funcion para guardar la respuesta del usuario

// function desafioPokemon() {
//   let pokemonDesafio = prompt(
//     "Maestr@ Pokemon " + nombreMaestro2 + " ,List@ para el desafio(si/no)"
//   );
//   while (pokemonDesafio != "si")  {
//     alert("animate! para ser un maestro pokemon hay que entrenar");
//     pokemonDesafio = prompt(
//       "Maestr@ Pokemon " + nombreMaestro2 + " ,List@ para el desafio(si/no)"
//     );
//   }
// }
// desafioPokemon();

// let preguntaDesafio = prompt("¿cual es el nombre del pokemon que elige Ash?");

// while (preguntaDesafio != "pikachu") {
//   switch (preguntaDesafio) {
//     case "bulbasaur":
//       alert("casi");
//       break;
//     case "charmander":
//       alert("cerca");
//       break;
//     case "squirtle":
//       alert("creo que no viste la serie");
//       break;
//     default:
//       alert("intentalo de nuevo");
//       break;
//   }
//   preguntaDesafio = prompt("¿cual es el nombre del pokemon que elige Ash?");
// }

// alert("Respuesta Correcta");

// let nombres = "";

// for (let i = 1; i <= 3; i++) {
// let pokemonFavoritos = prompt(" ¿cuales son tus tres pokemones favoritos?");
// nombres = nombres + " " + pokemonFavoritos;
// if(i == 3)
// {alert("son muy buenos pokemones!");}
// }

// alert("maestr@ " + nombreMaestro2 + " tus pokemones favoritos son: " + nombres);


//SEGUNDA ENTREGA

/*alert("¿Sabias que al incubar el huevo de un pokemon, puedes encontrar ejemplares especiales?");

//constructor de objetos de clases, debe calcular los pasos que me faltan para que el huevo pokemon evolucione
class EggPokemon {
constructor(entrada){
this.nombre = entrada.nombre;
this.pasos = parseInt(entrada.pasos); 
}

calcularPasos(){
 const pasosFaltante = 300 - this.pasos;

 if(pasosFaltante >= 150 && pasosFaltante <= 300){
    alert('te faltan aun: ' + pasosFaltante + 'pasos');
 }else{
    alert('estas muy cerca, solo te faltan ' + pasosFaltante + 'pasos');
 }
}
}

const nombre = prompt('ingresa el nombre de tu huevo pokemon')
const pasos = prompt ('ingresa la cantidad de pasos que haz reunido para este huevo');

const egg = new EggPokemon ({
nombre: nombre,
pasos:pasos,
})

egg.calcularPasos()*/


class Pokemon {
    constructor (entrada){
      this.nombre = entrada.nombre;
      this.tipo = entrada.tipo

    }

}
//ciclo para crear objetos

let nombre;
let tipo;
const listaPokemon = [];

do{
nombre = prompt('ingresa el nombre de tu pokemon. para finzalizar ingresa fin');

if (nombre !== 'fin'){
   tipo = prompt('ingresa el tipo de pokemon que es'); 
   const pokemon = new Pokemon({nombre:nombre, tipo:tipo})
   listaPokemon.push(pokemon);
}
} while(nombre !== 'fin');


console.log(listaPokemon.map((pokemon) => `se ingreso la palabra "${pokemon.nombre}"`));







