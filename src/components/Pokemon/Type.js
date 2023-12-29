import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'
import getColorByType from '../../utils/getColor';


export default function Type(props) {
  const {types} = props;

  return (
    <View style={styles.content}>
      {
      map(types, (item, index) =>(
        <View key={index} style={{backgroundColor: getColorByType(item.type.name), ...styles.pill}}>
          <Text style={styles.txt}>
            {capitalize(item.type.name)}
          </Text>
        </View>
      ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  content:
  {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
},
txt:{
  color: 'white',
},
  pill:
  {
    paddingHorizontal: 30,
    paddingVertical:5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
})