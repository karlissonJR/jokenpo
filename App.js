/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Topo from './components/topo';
import Icone from './components/icone';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaOponente: '',
      resultado: '',
    };
  }

  jokenpo(escolhaUsuario){

    var numAleatorio = Math.floor(Math.random() * 3, 0);
    var jogadas = ['pedra', 'papel', 'tesoura'];
    var escolhaOponente = jogadas[numAleatorio];
    var resultado = '';

    if(escolhaUsuario == escolhaOponente)
      resultado = 'Empate';

    else if(escolhaUsuario == 'pedra'){
      if(escolhaOponente == 'tesoura')
        resultado = 'Venceu';

      else
        resultado = 'Perdeu';
    }

    else if(escolhaUsuario == 'papel'){
      if(escolhaOponente == 'pedra')
        resultado = 'Venceu';

      else
        resultado = 'Perdeu';
    }

    else if(escolhaUsuario == 'tesoura'){
      if(escolhaOponente == 'papel')
        resultado = 'venceu';

      else
        resultado = 'Perdeu';
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaOponente: escolhaOponente,
      resultado: resultado,
    });
  }

  render() {
    return (
      <View style={styles.painelPrincipal}>

        <Topo />

        <View style={styles.painelBotao}>
          <TouchableOpacity style={styles.btn} onPress={() => {this.jokenpo('pedra')}}>
            <Text style={styles.btnTexto}>Pedra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {this.jokenpo('papel')}}>
            <Text style={styles.btnTexto}>Papel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {this.jokenpo('tesoura')}}>
            <Text style={styles.btnTexto}>Tesoura</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.painelResultado}>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'/>
          <Icone escolha={this.state.escolhaOponente} jogador='Oponente'/>
          <Text style={styles.textoResultado}>{this.state.resultado}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  painelPrincipal: {
    flex: 1,
  },

  painelBotao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },

  painelResultado: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
  },

  btn: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 2,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  btnTexto: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },

  textoResultado: {
    fontSize: 30,
    color: 'green',
  },
});
