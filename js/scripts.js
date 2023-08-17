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
        if(typeof pokemon === 'object'){
            pokemonList.push(pokemon)
        } else {
            console.log('Bad data type')
        }
        
    }

    function getAll(){
        return pokemonList
    }

    function filter(pokemon){
        pokemonList.filter(pokemon)
        return pokemon.name === 'Persian'
    }

    return{
        add: add,
        getAll: getAll,
        filter:filter
    };


})();


console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
    let result = pokemon.height >1.0 ? 'Wow that\'s big' : '' 
    document.write(`<div class=pokemonNameAndHeight>${pokemon.name} (height:${pokemon.height}) ${result}</div><br>`)
});

console.log(pokemonRepository.filter());