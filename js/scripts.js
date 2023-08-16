let pokemonRepository = (function(){
    let pokemonList = [{
        name : "Persian",
        height : 1,
        types : ['dark', 'rock', 'ghost']
    },
    {
        name : "Pikachu",
        height : 0.4,
        types : ['electric', 'fighting', 'poison']
    },
    {
        name : "Arbok",
        height : 3.5,
        types : ['dark', 'grass', 'poison']
    }];

    function add(pokemon){
        pokemonList.push(pokemon)
    }

    function getAll(){
        return pokemonList
    }

    return{
        add: add,
        getAll: getAll
    };


})();


console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
    let result = pokemon.height >1.0 ? 'Wow that\'s big' : '' 
    document.write(`<div class=pokemonNameAndHeight>${pokemon.name} (height:${pokemon.height}) ${result}</div><br>`)
});