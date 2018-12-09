import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Icone extends Component{
  render() {

    if(this.props.escolha == 'pedra'){
      return(
        <View style={styles.painel}>
          <Text style={styles.txt}>{this.props.jogador}</Text>
          <Image
            source={require('../img/pedra.png')}
            style={styles.img}
          />

        </View>
      );
    }

    else if(this.props.escolha == 'papel'){
      return(
        <View style={styles.painel}>
          <Text style={styles.txt}>{this.props.jogador}</Text>
          <Image
            source={require('../img/papel.png')}
            style={styles.img}
          />

        </View>
      );
    }

    else if(this.props.escolha == 'tesoura'){
      return(
        <View style={styles.painel}>
          <Text style={styles.txt}>{this.props.jogador}</Text>
          <Image
            source={require('../img/tesoura.png')}
            style={styles.img}
          />

        </View>
      );
    }

    else{
      return(
        false
      );
    }
  }
}

const styles = StyleSheet.create({

  painel: {
    alignItems: 'center',
  },

  img: {
    height: 100,
    width: 100,
  },

  txt: {
    fontSize: 19,
    color: 'blue',
  },
});
