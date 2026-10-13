let vida = 100;
let limiteInferior = 50;
let limiteSuperior = 100; 
let pociones = 5;

let intervalo;
intervalo = setInterval(() => {
    vida = vida - 5;
    console.log ("La vida del jugador es: " + vida);
    
    if(vida <= 0){
      clearInterval(intervalo);
      console.log ("El jugador ha muerto");
       return;
    }

    if(vida < limiteInferior && pociones > 0){
      vida = Math.min(vida + 30, limiteSuperior);
      pociones --;
      
      console.log ("El jugador ha usado una pocion de curacion");
      console.log ("La vida del jugador es: " + vida);
      console.log ("Pociones restantes: " + pociones);

    }

}, 2000);











const mochila_uni = [
  {
    nombre: "Bacardi",
    cantidad: 1,
    tipo: "Bebida"
  },
  {
    nombre: "Monstrer Blanco",
    cantidad: 4,
    tipo: "Bebida"
  },
  {
    nombre: "Donitas Blancas",
    cantidad: 2,
    tipo: "Comida"
  },
  {
    nombre: "Tacos de sal",
    cantidad: 3,
    tipo: "Comida"
  },
  {
    nombre: "Pluma mordida",
    cantidad: 1,
    tipo: "Utiles"
  }
];

function organizarBolsa(elementos) {

  let normales = elementos.filter(elemento => elemento.tipo === "Bebida");
  let tms = elementos.filter(elemento => elemento.tipo === "Comida");
  let consumibles = elementos.filter(elemento => elemento.tipo === "Utiles");

  normales.sort((a, b) => b.cantidad - a.cantidad);
  tms.sort((a, b) => b.cantidad - a.cantidad);
  consumibles.sort((a, b) => b.cantidad - a.cantidad);

  console.log("Elementos para la peda:");
 

  console.log("Elementos rugidos de tripa:");
 

  console.log("Utiles escolares:");
  
}

organizarBolsa(mochila_uni);












const pikachu = {
  nombre: "Pikachu",
  tipo: "Electrico",
  ataque: "Impacto",
  dano: 20,
  vida: 50,
  defensa: 10
};

const charizard = {
  nombre: "Charizard",
  tipo: "Fuego",
  ataque: "Ala ignea",
  dano: 35,
  vida: 70,
  defensa: 10
};

function mostrarEstadisticas(pokemon) {
  console.log("Nombre: " + pokemon.nombre);
  console.log("Tipo: " + pokemon.tipo);
  console.log("Ataque: " + pokemon.ataque);
  console.log("Dano: " + pokemon.dano);
  console.log("Vida: " + pokemon.vida);
  console.log("Defensa: " + pokemon.defensa);
}

function atacar(atacante, enemigo) {

  console.log(atacante.nombre + " ataca a " + enemigo.nombre);
  console.log("Ataque utilizado: " + atacante.ataque);

  let danoFinal = atacante.dano - enemigo.defensa;

  if (danoFinal < 0) {
    danoFinal = 0;
  }

  enemigo.vida = enemigo.vida - danoFinal;

  if (enemigo.vida < 0) {
    enemigo.vida = 0;
  }

  console.log("Dano realizado: " + danoFinal);
  console.log("Vida de " + enemigo.nombre + ": " + enemigo.vida);
}

console.log("ESTADISTICAS INICIALES");

mostrarEstadisticas(pikachu);
mostrarEstadisticas(charizard);

function combate(atacante, enemigo) {

  atacar(atacante, enemigo);

  if (enemigo.vida === 0) {
    console.log(
      "La batalla ha terminado. " +
      enemigo.nombre +
      " esta fuera de combate."
    );
    return;
  }

  setTimeout(function() {
    combate(enemigo, atacante);
  }, 1500);
}

console.log("COMIENZA LA BATALLA");

combate(pikachu, charizard);  

