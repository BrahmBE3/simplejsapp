
  //IIFE FUCTION ADDED
let pokemonRepository = (function () {

  let pokemonList =
  [//Give pokemon in the first few taskes
  // {
  //   name: "Bulbasaur",
  //   height: 0.5,

  //   types: ["grass", "poison"],
  // },
  // {
  //   name: "Lucario",
  //   height: 1.5,
  //   types: ["fire", "ground"],
  // },
  // {
  //   name: "Squirtle",
  //   height: 1,
  //   types: ["water"],
  // },
  // {
  //   name: "Eevee",
  //   height: 1.1,
  //   types: ["water"],
  // },];
  // fetching pokemon data with API,(150 pokemons)
];

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  let modalContainer = document.querySelector("#modal-container");

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
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
    // creating show modal
  function showModal(pokemon) {
    // let modalConatiner = document.querySelector("#modal-container")
    modalContainer.innerText = "";
    //craeting div element
    let modal = document.createElement("div");
    // adding class to the div elemnt created above
    modal.classList.add("modal");
    //close button when clicked close off
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);
    // creating content for modal
    let modalTitle = document.createElement("h1");
    modalTitle.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
    let modalText = document.createElement("p");
    modalText.innerText = pokemon.height;

    let modalImg = document.createElement("img");
    modalImg.classList.add("modal-img");
    modalImg.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(modalTitle);
    modal.appendChild(modalText);
    modal.appendChild(modalImg);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");
  }

  function hideModal(){
    modalContainer.classList.remove("is-visible");
  }

  modalContainer.addEventListener("click", (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });


  window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
        hideModal();
      }
    });


  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
   });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();
//adding a pokemon into the pokemonRepository
// pokemonRepository.add({ name: "Balbasur", height: 0.4, types: ["water"] });
//
// console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
