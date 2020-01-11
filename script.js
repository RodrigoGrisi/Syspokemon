
  function searchAll(){
      var search_ = document.getElementById('search').value
      var yourPoke = document.getElementById('yourPoke')

      search = Number(search_)

      switch(search){
          case 1: 
         yourPoke.src = "pokedex/001.png"
        break;
          case 2: 
         yourPoke.src = "pokedex/002.png"
        break;
          case 3: 
         yourPoke.src = "pokedex/003.png"
        break;
          case 4: 
         yourPoke.src = "pokedex/004.png"
        break;
          case 5: 
         yourPoke.src = "pokedex/005.png"
        break;
          case 6: 
         yourPoke.src = "pokedex/006.png"
        break;
          case 7: 
         yourPoke.src = "pokedex/007.png"
        break;
          case 8: 
         yourPoke.src = "pokedex/008.png"
        break;
          case 9: 
         yourPoke.src = "pokedex/009.png"
        break;
          case 10: 
         yourPoke.src = "pokedex/010.png"
        break;
        default:
          yourPoke.src = "pokedex/pokenaoencontrado.png"
      }
  }