/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('home');
    }, 2000);
  }, []);
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>Toko Distributor</Text>
      <Text style={styles.text2}>Belanja Grosir Online</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#EC7063',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    // lineHeight: 50,
    // fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    fontSize: 20,
    // lineHeight: 40,
    // fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
