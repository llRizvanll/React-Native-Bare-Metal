import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { DrawerPage } from './src/drawer';



const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }  
  }
  render() {
    return (
      <View style={styles.container}>
        <DrawerPage/>
      </View>
    );
  }
}
export default App;