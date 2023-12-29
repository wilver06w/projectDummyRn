import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'

import getColorByType from '../utils/getColor'
import React from 'react'
import { capitalize } from "lodash"
import {useNavigation} from "@react-navigation/native"

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const pokemonColor = getColorByType(pokemon.type);

  const bgStyles = {backgroundColor:pokemonColor, ...styles.bgStyle};
  const goToPokemon = () => {
    navigation.navigate('Pokemon', { id: pokemon.id} );
  }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
            <Text style={styles.name}>{capitalize( pokemon.name)}</Text>
            <Image style={styles.image} source={{ uri: pokemon.image}}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
card:{
  flex:1,
  height:130,
},
number:{
  position: 'absolute',
  right:10,
  top:10,
  color:"#fff",
  fontSize:11,
},
name:{
color:"#fff",
paddingTop:10,
paddingLeft:10,
fontWeight:"bold",
fontSize
:15,
},
spacing:{
  flex:1,
  padding:5,
},
bgStyle:{
  borderRadius: 15,
  padding: 10,
  flex: 1,
},
image:{
  position:'absolute',
  bottom:2,
  right:2,
  width:90,
  height:90,
}

})