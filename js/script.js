<<<<<<< Updated upstream
let pokemonRepository = (function() {
    let pokemonList = [];
    //api url of 150 pokemon with there name and further details imported
let apiUrl ="https://pokeapi.co/api/v2/pokemon/?limit=150";
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon

      ) {
       pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
=======

  //IIFE FUCTION ADDED
let pokemonRepository = (function () {

  let pokemonList = [];

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
>>>>>>> Stashed changes
    }

    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      // creating a list in tag <ul> using creat.element
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");// button formation of the names of pokemon.
      button.innerText = pokemon.name;// assigining the inner text of button with the name of pokemon.
      button.classList.add("button-class");// button-class i s the class of tag <ul>
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function(event)  {
        showDetails(pokemon);
      });
    }

function loadList() {
return fetch(apiUrl).then(function (response) {
 return response.json();
}).then(function (json) {
 json.results.forEach(function (item) {
   let pokemon = {
     name: item.name,
     detailsUrl: item.url
   };
   add(pokemon);
 });
}).catch(function (e) {//adding the fuction error in case the list is fail to have a response.
 console.error(e);
})
}

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

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  let modalContainer = document.querySelector('#modal-container');

  // REST OF CODE

  function showModal(pokemon) {
    // Clear all existing modal content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  // THE RETURN STATEMENT HERE

})();

let container = document.querySelector('#image-container');

// Create an <img> element
let myImage = document.createElement('img');

// setting `src` property to set the actual element's `src` attribute
// this also works on <img> elements selected by querySelector() method, it is not specific for <img> elements created with createElement() methods
myImage.src = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

container.appendChild(myImage);
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
// adding the new pokemon to pokemonlist repositorey
  // pokemonRepository.add({ name: "bulbasauras", height: 1.3, types: ["water"], Category:"dragon" });
  //
  // console.log(pokemonRepository.getAll());

  pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
