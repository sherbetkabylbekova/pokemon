import React, {useEffect, useState} from 'react';
import axios from "axios";

const Pokemon = () => {
    const [pokemons,setPokemons] = useState([])
    const [search,setSearch] = useState("")
    const filteredPokemon = pokemons.filter(el => el.name.toLowerCase().includes(search))
    useEffect(()=>{
        axios("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then(res=>setPokemons(res.data.pokemon))
    })
    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleSearch}/>
          <div className='row'>
              {filteredPokemon.map(el=>
                  <div className='col-4'>
                      <img src={el.img} alt=""/>
                      <h2>{el.name}</h2>
                  </div>
              )
              }
          </div>
        </div>
    );
};

export default Pokemon;