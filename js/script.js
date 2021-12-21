//IIfe fuction , global variable

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
function getAll() {
  return pokemonList;
}
function add(pokemon){
   pokemonList.push(pokemon);
}
return{
  getAll:  getAll,
  add: add
};
})();
 pokemonRepository.getAll().forEach(function(pokemon)  {
   if (pokemon.height <= 4.0) {
   document.write('<p>'+'Name:' +  pokemon.name +  '<br>' + 'Height:' + pokemon.height +'   ' + 'Thats a small pokemon' +'</p>');
} else {
    document.write('<p>'+'Name:'  +  pokemon.name +'<br>' + 'Height:' + pokemon.height +'    ' + 'WOW! thats a big pokemon' +'</p>');
  }
});
console.log(pokemonRepository.getAll());


// for ( var i = 0 ; i < pokemonList.length ; i++){
//   /* For got three steeps in it (1. starter ||  initialzer gives you information about vere loop have to start ike a starting point) ; (2. condetion where should loop needs to end to which number or point);(3.Incremantor or decremaantor goes both direction ascending and decending represent as (i++ or i+1)(i-- or i-1))*/
// if (pokemonList[i].height < 8.0 && pokemonList[i].height > 5.0 ) {
//   document.write(pokemonList[i].name + '  ' + pokemonList[i].height + ' ' + '-  wow! thats big pokemon  ');
// }
// else if (pokemonList[i].height < 5.0 && pokemonList[i].height > 3.0) {
//   document.write(pokemonList[i].name + '  ' + pokemonList[i].height + ' ' + '-  wow! thats average size pokemon  ');
// }
// else {
// document.write(pokemonList[i].name + '  ' + pokemonList[i].height + ' ' + '-  small pokemon  ');
// }
// }
