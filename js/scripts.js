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

console.log(pokemonList);

for(let i=0; i<pokemonList.length; i++){//code iterates through pokemon array
    let result = pokemonList[i].height >1.0 ? 'Wow that\'s big' : '' // a condition in the for loop that returns a comment as soon as height is bigger than 1.0, othervise returns an empmty string
    document.write(`<div class=pokemonNameAndHeight>${pokemonList[i].name} (height:${pokemonList[i].height}) ${result}</div><br>`)//prints a pokemon name as well as the height and a comment 
}