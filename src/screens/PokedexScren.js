import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, Platform } from 'react-native'
import { getPokemonsApi, getPokemonDetailByKeyApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    (async ()=>{
      await loadPokemon();
    })();
  }, []);


  const  loadPokemon = async () =>{
    try{
      setLoading(true);
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonArray = [];

      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailByKeyApi(pokemon.url);
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
      });

      }
      setPokemons([...pokemons, ...pokemonArray]);

    }catch(error){
      console.error(error);
    }finally{
      setLoading(false);
    }

  }
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemon} isLoading={loading} isNext={nextUrl}/>
    </SafeAreaView>
  )
}