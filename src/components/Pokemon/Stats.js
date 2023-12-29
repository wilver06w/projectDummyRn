import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { map, capitalize} from 'lodash'

export default function Stats(props) {
  const { stats } = props;


  const barStyles = (num) =>{
    const color = num > 49 ?
    'blue':
    "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    }
  }
  return (
    <View style={style.content}>
      <Text style={style.title}>Base Stats</Text>
      {map(stats, (item, index) => {
        return (
          <View key={index} style={style.block}>
            <View style={style.blockTitle}>
              <Text style={style.statName}>{capitalize( item.stat.name)}</Text>
            </View>
            <View style={style.blockInfo}>
              <Text style={style.number}>{capitalize( item.base_stat)}</Text>
              <View style={style.bgBar}>
                <View style={[style.bar, barStyles(item.base_stat)]}
                ></View>
          </View>
          </View>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  bar:{
    height: 5,
    borderRadius: 20,
  },
  bgBar:{
    backgroundColor: '#DEDEDE',
    borderRadius: 20,
    width: '88%',
    height: 5,
    overflow: 'hidden',
},
  number:{
    width: '12%',
    fontSize: 12,
},
  blockInfo:{
    width: '70%',
    alignItems:'center',
    flexDirection:'row',
},
  block:{
    flexDirection:"row",
    paddingVertical: 5,
},
  blockTitle:{
    width:'30%',
},
  content: {
    paddingHorizontal:20,
    marginTop: 40,
    marginBottom: 80,
  },
  title:{
    fontWeight:"bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  statName:{
    fontSize: 12,
    color: '#6b6b6b',
  },
});