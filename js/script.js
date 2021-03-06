
  //IIFE FUCTION ADDED
let pokemonRepository = (function () {

  let pokemonList =
  [];

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // let modalContainer = document.querySelector("#modal-container");

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
      // "height" in pokemon &&
      // "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else
    {
    console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }
function addListItem (pokemon){
  let newPokemonList = document.querySelector(".pokemon-list");
  let pokemonListItems = document.createElement("li");
  pokemonListItems.classList.add("listItem-style")
  let modalButton = document.createElement("button");

  modalButton.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

modalButton.classList.add("searchButton");
modalButton.classList.add("btn-primary");
modalButton.classList.add("btn-block");
modalButton.setAttribute("data-target", "#pokemonModal");
modalButton.setAttribute("data-toggle","modal");

  pokemonListItems.appendChild(modalButton);
  newPokemonList.appendChild(pokemonListItems);

modalButton.addEventListener("click", function(){
  showDetails(pokemon);
});
}
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
 });
}
    // adding the loadlist() function
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
          // height: item.height,
          // types: item.types
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
  })  }
  // loadDetails fuction for getting details of height and type of pokemons
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight,
      item.types = [];
      details.types.forEach(function (element){
        item.types.push(element.type.name);
      })

    }).catch(function (e) {
      console.error(e);
    });
  }
    // creating show modal
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    // let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();
    //adding pokemon name to the modal
    let titleElement = $("<h1>"+ pokemon.name[0].toUpperCase() + pokemon.name.substring(1) + "</h1>");
    //adding image element to the modalImg
    let imageElement = $("<img class='modal-img'>");
    imageElement.attr("src",pokemon.imageUrl);
    // adding height element in the modal
    let heightElement = $("<p>" + "Height-" +  pokemon.height + "</p>");
    let typesElement = $("<p>"  + "Types-" + pokemon.types + "</p>")
    let weightElement = $("<p>" + "Weight-" + pokemon.weight + "</p>")
    // append all the elements into the respective part of the modal (modal title,modalbodyand modal footer)
      modalTitle.append(titleElement);
      modalBody.append(heightElement);
      modalBody.append(typesElement);
      modalBody.append(weightElement);
      modalBody.append(imageElement);
  }


  $(document).ready(function(){
          $("#search-pokemon").on("keyup", function() {
              const value = $(this).val().toLowerCase();
              $(".searchButton").filter(function() {
                  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
          });
      });



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    // hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
