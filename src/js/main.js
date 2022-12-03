import '../css/style.css'

/*SELECIONANDO ELEMENTOS DO DOM  */
const inputPesquisa = document.querySelector("#inputPesquisa")
const btnLocalizar = document.querySelector("#btnLocalizar")
const pokedexDisplay = document.querySelector("#display")

/*ADICIONANDO EVENTO */

btnLocalizar.addEventListener("click",async function () {
    /*Buscar os dados na API */
    const dadosDoPokemon = await localizarPokemon(inputPesquisa.value)
    /*CRIAR CARTAO DO POKEMON  */
    criarCartao(dadosDoPokemon)

})

async function localizarPokemon(termoBusca) {
    const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`
    const response = await fetch(url)
    const pokemon = await response.json()
    //console.log(pokemon)
    return pokemon
}

function criarCartao(pokemon) { /*Criar cartao */
    const cartaoPokemon = document.createElement("div") /*Criando na memoria para usar o cartao */
    cartaoPokemon.className = 'cartaoPokemon'
    cartaoPokemon.innerHTML=` <img class="pokemonSprite" src="${pokemon.sprites.front_default}"/
    <h2>${pokemon.name}<h2/> `
    pokedexDisplay.appendChild(cartaoPokemon)
}