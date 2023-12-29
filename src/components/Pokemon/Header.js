import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash'
import getColorByType from '../../utils/getColor';

export default function Header(props) {
  const {name, order, image, type} = props;
  const color = getColorByType(type);

  const bgStyle = [{backgroundColor:
    color, ...style.bg}];

  return (
    <View>
      <View style={bgStyle} />

      <SafeAreaView style={style.content}>
        <View style={style.header}>
          <Text style={style.name}>
            {capitalize(name)}
          </Text>
          <Text style={style.order}>
              #{`${order}`.padStart(3, '0')}
          </Text>
        </View>
        <View style={style.contentImg}>
          <Image source={{uri: image}} style={style.image} />
        </View>
      </SafeAreaView>
    </View>
  )
}


const style = StyleSheet.create({
  order:{
    color: '#fff',
    fontWeight: 'bold',
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  content:{
    marginHorizontal: 20,
    marginTop: 30,
  },
  name:{
    color:'#fff',
    fontWeight: "bold",
    fontSize: 27,
  },
  bg:{
    width: "100%",
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  contentImg:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    top: 30,
  },
  image:{
    width:250,
    height:300,
    resizeMode: 'contain',
  }
});