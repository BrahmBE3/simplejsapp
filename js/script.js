
  //IIFE FUCTION ADDED
let pokemonRepository = (function () {
<<<<<<< Updated upstream

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

  // function addListItem(pokemon){
  //   let pokemonList = document.querySelector(".pokemon-list");
  //   let listpokemon = document.createElement("li");
  //   let button = document.createElement("button");
  //   button.innerText = pokemon.name;
  //   button.classList.add("button-class");
  //   listpokemon.appendChild(button);
  //   pokemonList.appendChild(listpokemon);
  //   button.addEventListener("click" ,function (event) {
  //     showDetails(pokemon);
  //   })
  // }

function addListItem (pokemon){
  let newPokemonList = document.querySelector(".pokemon-list");
  let pokemonListItems = document.createElement("li");
  pokemonListItems.classList.add("listItem-style")
  let modalButton = document.createElement("button");

  modalButton.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);;

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
=======

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

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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

  // function showModal(pokemon) {
  //   // let modalConatiner = document.querySelector("#modal-container")
  //   modalContainer.innerText = "";
  //   //craeting div element
  //   let modal = document.createElement("div");
  //   // adding class to the div elemnt created above
  //   modal.classList.add("modal");
  //   //close button when clicked close off
  //   let closeButtonElement = document.createElement("button");
  //   closeButtonElement.classList.add("modal-close");
  //   closeButtonElement.innerText = 'X';
  //   closeButtonElement.addEventListener('click', hideModal);
  //   // creating content for modal
  //   let modalTitle = document.createElement("h1");
  //   modalTitle.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
  //   let modalText = document.createElement("p");
  //   modalText.innerText = pokemon.height;
  //
  //   let modalImg = document.createElement("img");
  //   modalImg.classList.add("modal-img");
  //   modalImg.src = pokemon.imageUrl;
  //
  //   modal.appendChild(closeButtonElement);
  //   modal.appendChild(modalTitle);
  //   modal.appendChild(modalText);
  //   modal.appendChild(modalImg);
  //   modalContainer.appendChild(modal);
  //
  //   modalContainer.classList.add("is-visible");
  // }
  $(document).ready(function(){
          $("#search-pokemon").on("keyup", function() {
              const value = $(this).val().toLowerCase();
              $(".searchButton").filter(function() {
                  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
          });
      });

  //
  // function hideModal(){
  //   modalContainer.classList.remove("is-visible");
  // }
  //
  // modalContainer.addEventListener("click", (e) => {
  //   // Since this is also triggered when clicking INSIDE the modal
  //   // We only want to close if the user clicks directly on the overlay
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });
  //
  //
  // window.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
  //       hideModal();
  //     }
  //   });
=======
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
>>>>>>> Stashed changes

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
<<<<<<< Updated upstream
    // hideModal: hideModal
=======
    hideModal: hideModal
>>>>>>> Stashed changes
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
