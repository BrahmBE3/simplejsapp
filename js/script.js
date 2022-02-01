let pokemonRepository = (function () {
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.5,
      types: ["grass", "poison"],
    },
    {
      name: "Lucario",
      height: 1.5,
      types: ["fire", "ground"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
    {
      name: "Eevee",
      height: 1.1,
      types: ["water"],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else
    {
      console.log("pokemon is not correct");
    }}
  function getAll() {
    return repository;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click" ,function (event) {
      showDetails(pokemon);
    })
  }  function showDetails(){
    console.log(pokemon.height);
      console.log(pokemon.types);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails

  };
})();

pokemonRepository.add({ name: "Balbasur", height: 0.4, types: ["water"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
