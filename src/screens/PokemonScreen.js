import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { getPokemonDetailApi } from '../api/pokemon'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'

export default function PokemonScreen(props) {
  const { navigation, route:{params} } = props;

  const [pokemon, setPokemon] = useState(null);


  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> null,
      hederLeft: ()=> ( <MaterialCommunityIcons name="home"
      color='#fff'
      size={30}
      style={{marginLeft:20}}
      onPress={navigation.goBack}
    />
    ),
    });
  },[navigation, params])

  useEffect(() => {
(async ()=> {
try{
const response = await getPokemonDetailApi(params.id);

setPokemon(response);
}catch(error){
  navigation.goBack();
}
})()
  }, [params])

  if(!pokemon) return null;

  return (

    <ScrollView>
      <Header
      name={pokemon.name}
      order={pokemon.order}
      image={pokemon.sprites.other['official-artwork'].front_default}
      type={pokemon.types[0].type.name} />
      <Type
        types={pokemon.types}
      />
      <Stats stats=
      {
        pokemon.stats
      }/>
    </ScrollView>
  )
}