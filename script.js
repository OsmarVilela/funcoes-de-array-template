// pratica guiada - Callback

const triplicaNumeros = (arrayNumeros)=>{
  const arraytriplicado = []  
  for(let numero of arrayNumeros){
      const numTriplicado = numero * 3
      arraytriplicado.push(numTriplicado)
    }
    return arraytriplicado
}
//const arrayAleatorio = [5,10,15,20,-11]
const numerosPares = (arrayNumeros)=>{
const arrayPares = []
  for(let numero of arrayNumeros){
    if(numero % 2 === 0){
      arrayPares.push(numero)
    }
  }
  return arrayPares 
}
//console.log(numerosPares([2,4,5,88,7,11]))

//console.log(triplicaNumeros([5,10,15,20,-11]))

// pratica guiada , usando as callbacks

const manipulaNumeros = (arrayNumeros, callback)=>{
  const novoArray = callback(arrayNumeros)
  return novoArray
}

//console.log("Triplicados",manipulaNumeros(arrayAleatorio, triplicaNumeros))
//console.log("Só pares", manipulaNumeros(arrayAleatorio, numerosPares))

const arrayAleatorio = [5,10,15,20,-11,98,73]

const numerosTriplicados = arrayAleatorio.map((elemento, indice, arrayOriginal)=>{
  return elemento * 3
})

const numPar = arrayAleatorio.filter((elemento, indice)=>{
  return elemento % 2 === 0
})

//console.log("Triplicados", numerosTriplicados);
//console.log("Pares", numPar);

/* Com o array de pokémons disponibilizado, faça o que se pede:
Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.
Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. Guarde o novo array numa variável pokemonsDeFogo. */


const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]
 
const inserirVida = (poke)=>{
  poke.vida = 100
  return poke
}
/* console.log(inserirVida(pokemons[0]))
console.log(inserirVida(pokemons[1]))
console.log(inserirVida(pokemons[2]))
console.log(inserirVida(pokemons[3]))
console.log(inserirVida(pokemons[4]))
console.log(inserirVida(pokemons[5])) */

const pokemonsVidaCheia = pokemons.map(inserirVida)
  
console.log(pokemonsVidaCheia);

const pokemonsFogo = pokemons.filter((pokemon)=>{

  return pokemon.tipo === "fogo"
})

//console.log("Pokemons de Fogo", pokemonsFogo);

const pokemonsVida100 = pokemons.map((poke)=>{
  poke.vida = 100
  return poke
})
console.log(pokemonsVida100);