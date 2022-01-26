let pokemonRepository = (function() {
    let pokemonList = [
      {name:'Dragonite' , height: 7.1 , types:['dragon','flying'] , Category:'dragon'},
      {name:'Charmeleon' ,  height: 5.5 , types:['Fire'] , Category:'Flame'},
      {name:'Charizard' ,  height: 5.9 , types:['Fire','Flying'] , Category:'Flame'},
      {name:'Blastoise' ,  height: 2.0  , types:['Water'] , Category:'Shellfish'},
      {name:'Growlithe' ,  height: 2.5 , types:['Fire'] , Category:'Puppy'},
      {name:'Raichu' ,   height: 5.0 , types:['Electric'] , Category:'Mouse'},
      {name:'Machoke' ,   height: 2.2 , types:['Fighting'] , Category:'Superpower'},
      {name:'Jigglypuff' ,  height: 2.8 , types:['Normal','Fairy'] , Category:'Balloon'}
    ];

    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
       pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return pokemonList;
    }
    function addListItem(pokemon){
      let ulElement = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("add-button");
      listpokemon.appendChild(button);
      ulElement.appendChild(listpokemon);
      button.addEventListener("click", (event) => {
     showDetails(pokemon);
   });
};
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
// adding the new pokemon to pokemonlist repositorey
  pokemonRepository.add({ name: "bulbasauras", height: 1.3, types: ["water"], Category:"dragon" });

  console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
