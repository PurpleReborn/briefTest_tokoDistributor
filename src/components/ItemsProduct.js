import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const ItemsProduct = ({
  productName,
  normalPrice,
  // agentPrice,
  // memberPrice,
  image,
  location,
}) => {
  return (
    <TouchableOpacity style={styles.parent}>
      <View style={styles.ImgWrap}>
        <Image style={styles.img} source={image} />
        <Text style={styles.text}>{productName}</Text>
      </View>
      <View style={styles.priceWrap}>
        <View>
          <View style={styles.locWrap}>
            <Icon name="location-on" color="gray" size={20} />
            {location !== '' ? (
              <Text style={styles.loc}>{location}</Text>
            ) : (
              <Text style={styles.loc}>Indonesia</Text>
            )}
          </View>
          <Text style={styles.price}>Rp {normalPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemsProduct;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    // backgroundColor: '#FADBD8',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.2,
    height: 250,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ImgWrap: {
    alignItems: 'center',
    // paddingTop: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 5,
    color: '#566573',
  },
  img: {
    width: Dimensions.get('window').width / 2.2,
    height: 100,
    borderRadius: 5,
  },
  priceWrap: {
    paddingBottom: 10,
  },
  textPrice: {
    color: 'gray',
    fontWeight: 'bold',
  },
  price: {
    color: '#CD6155',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  locWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loc: {
    fontSize: 14,
    color: '#566573',
  },
});
