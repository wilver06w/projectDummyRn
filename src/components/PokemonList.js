import { StyleSheet, ActivityIndicator, FlatList,Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isLoading, isNext} = props;

  const loadMore = () => {
    loadPokemons();
  }

  return (
    <FlatList
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => pokemon.id}
    renderItem={({ item }) =>
    <PokemonCard pokemon={item}/>
  }
    contentContainerStyle={styles.flagListContentContainer}
    onEndReached={(!isLoading && isNext) && loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
      isNext && (<ActivityIndicator size="large" style={styles
      .spinner} color="#AEAEAE"/>)
    }
    />
  )
}

const styles = StyleSheet.create({
flagListContentContainer:{
  paddingHorizontal: 5,
  marginTop: Platform.OS === 'android' ? 30 : 0,
},
spinner:{
  marginTop:20,
  marginBottom: Platform.OS === 'android' ? 90 : 60,
}
})