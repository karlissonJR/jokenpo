import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';


export default class Topo extends Component{
  render() {
    return(
      <Image
        source={require('../img/jokenpo.png')}
        style={styles.img}
      />
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 412,
  }
});
