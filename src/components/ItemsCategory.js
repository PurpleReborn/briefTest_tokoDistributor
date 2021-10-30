import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

const ItemsCategory = props => {
  return (
    <TouchableOpacity style={styles.parent}>
      <View style={styles.wrapImg}>
        <Image style={styles.img} source={props.image} />
      </View>
      {props.name.length > 10 ? (
        <Text style={styles.text}>{props.name.substring(0, 11)}...</Text>
      ) : (
        <Text style={styles.text}>{props.name}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ItemsCategory;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  wrapImg: {
    backgroundColor: '#F2F3F4',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  img: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 13,
    width: 60,
    color: '#566573',
  },
});
