/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navBar}>
            <Image source={ require('./images/youtube.png') } style={{ width: 80, height: 25 }} />
            <View style={styles.rightNav}>
              <TouchableOpacity>
                <Icon name='search' size={25} />
              </TouchableOpacity>
              
              <Icon style={styles.navItem} name='account-circle' size={25} />
            </View>

          </View>
          <View style={styles.list} />
          <View style={styles.bottomBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1       
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15
  },
  rightNav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  list: {
    flex: 9,
    backgroundColor: 'grey'    
  },
  bottomBar: {
    flex: 1,
    backgroundColor: 'white'
  },
  navItem: {
    marginLeft: 30
  }  
});
